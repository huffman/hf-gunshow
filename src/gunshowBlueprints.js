var guns = require('guns.js').guns;
var audio = require('audio.js');
var utils = require('components/utils.js');

print("Loaded guns:", guns, guns.flamethrower);

// Script.include('particles.js');

// var MODEL_FLAMETHROWER = "http://localhost:7070/flamethrower.fbx";

var TEXTURE_STAR = "http://ericrius1.github.io/PartiArt/assets/star.png";
var TEXTURE_SPARK = "https://hifi-public.s3.amazonaws.com/alan/Particles/spark_2.png";
var TEXTURE_SMOKE = "https://hifi-public.s3.amazonaws.com/alan/Particles/Particle-Sprite-Smoke-1.png";
var TEXTURE_CIRCLE = "https://hifi-content.s3.amazonaws.com/alan/dev/textures/grabsprite-3.png";

// var guns = require('guns.js').guns;

// registerBlueprint('grenade', Object.assign({}, guns['grenade_vintage.fbx'], {
//     name: 'grenade',
//     dimensions: {
//         x: 0.1,
//         y: 0.05,
//         z: 0.1
//     },
//     gravity: { x: 0, y: -9.8, z: 0 },
//     lifetime: 10,
//     collisionsWillMove: true,
//     components: {
//         timedExplosive: {}
//     }
// }));
//
registerBlueprint('rainbow-disc', {
    type: 'Sphere',
    name: 'grenade',
    dimensions: {
        x: 0.1,
        y: 0.0001,
        z: 0.1
    },
    gravity: { x: 0, y: -9.8, z: 0 },
    lifetime: 10,
    collisionsWillMove: true,
    children: [
        {
            blueprint: 'particle.smoke',
            position: { x: 0 , y: 0, z: 0 }
        }
    ],
    components: {
        timedExplosive: {},
    }
});

registerBlueprint('particle.muzzleFlash', {
    type: "ParticleEffect",
    isEmitting: true,
    "name": "muzzle-flash",
    "color": {
        red: 228,
        green: 128,
        blue: 12
    },
    "maxParticles": 1000,
    "lifespan": 0.1,
    "emitRate": 1000,
    "emitSpeed": 0.5,
    "speedSpread": 0,
    "emitOrientation": {
        "x": -0.4,
        "y": 1,
        "z": -0.2,
        "w": 0.7071068286895752
    },
    "emitDimensions": {
        "x": 0,
        "y": 0,
        "z": 0
    },
    "polarStart": 0,
    "polarFinish": Math.PI,
    "azimuthStart": -3.1415927410125732,
    "azimuthFinish": 2,
    "emitAcceleration": {
        "x": 0,
        "y": 0,
        "z": 0
    },
    "accelerationSpread": {
        "x": 0,
        "y": 0,
        "z": 0
    },
    "particleRadius": 0.05,
    "radiusSpread": 0.01,
    "radiusStart": 0.05,
    "radiusFinish": 0.05,
    "colorSpread": {
        red: 100,
        green: 100,
        blue: 20
    },
    "alpha": 1,
    "alphaSpread": 0,
    "alphaStart": 0,
    "alphaFinish": 0,
    "additiveBlending": false,
    "textures": "http://ericrius1.github.io/PartiArt/assets/star.png"
});

registerBlueprint('particle.smoke', {
    type: "ParticleEffect",
    "name": "muzzle-smoke",
    position: {
        x: 0.4,
        y: 0.07,
        z: 0.01
    },
    "color": {
        red: 228,
        green: 128,
        blue: 12
    },
    "maxParticles": 1000,
    isEmitting: false,
    "emitRate": 20,
    emitSpeed: 0,
    "speedSpread": 0,
    "emitDimensions": {
        "x": 0,
        "y": 0,
        "z": 0
    },
    "polarStart": 0,
    "polarFinish": 0,
    "azimuthStart": -3.1415927410125732,
    "azimuthFinish": 3.14,
    "emitAcceleration": {
        "x": 0,
        "y": 0.1,
        "z": 0
    },
    "accelerationSpread": {
        "x": 0.2,
        "y": 0,
        "z": 0.2
    },
    "radiusSpread": 0.04,
    "particleRadius": 0.07,
    "radiusStart": 0.07,
    "radiusFinish": 0.07,
    "alpha": 1,
    "alphaSpread": 0,
    "alphaStart": 1,
    "alphaFinish": 1,
    // "alpha": 0.7,
    // "alphaSpread": 0,
    // "alphaStart": 0,
    // "alphaFinish": 0,
    "additiveBlending": false,
    "textures": "https://hifi-public.s3.amazonaws.com/alan/Particles/Particle-Sprite-Smoke-1.png"
});

registerBlueprint('particle.sparkle', {
    type: "ParticleEffect",
    "color": {
        red: 228,
        green: 128,
        blue: 12
    },
    "maxParticles": 1000,
    isEmitting: false,
    "emitRate": 20,
    emitSpeed: 0,
    "speedSpread": 0,
    "emitDimensions": {
        "x": 0,
        "y": 0,
        "z": 0
    },
    "polarStart": 0,
    "polarFinish": 0,
    "azimuthStart": -3.1415927410125732,
    "azimuthFinish": 3.14,
    "emitAcceleration": {
        "x": 0,
        "y": 0.5,
        "z": 0
    },
    "accelerationSpread": {
        "x": 0.2,
        "y": 0,
        "z": 0.2
    },
    "radiusSpread": 0.04,
    "particleRadius": 0.07,
    "radiusStart": 0.07,
    "radiusFinish": 0.07,
    "alpha": 0.7,
    "alphaSpread": 0,
    "alphaStart": 0,
    "alphaFinish": 0,
    "additiveBlending": 0,
    "textures": TEXTURE_STAR
});


registerBlueprint('gun.flamethrower', {
    name: 'flamethrower',
    type: 'Model',
    modelURL: guns.flamethrower.modelURL,
    dimensions: guns.flamethrower.dimensions,
    shapeType: 'box',
    collisionsWillMove: true,
    dynamic: true,
    gravity: {x: 0, y: -5.0, z: 0},
    restitution: 0,
    collisionSoundURL: "https://s3.amazonaws.com/hifi-public/sounds/Guns/Gun_Drop_and_Metalli_1.wav",
    components: {
        particleGun: {
            audioURL: audio.flamethrower,
            barrelPointOffset: { x: 0, y: 0, z: -1.0 }
        }
    },
    userData: {
        grabbableKey: {
            spatialKey: {
                relativePosition: {
                    x: 0,
                    y: 0.05,
                    z: -0.08
                },
                relativeRotation: Quat.fromPitchYawRollDegrees(0, 180, 0)
            },
            invertSolidWhileHeld: true
        }
    },
    children: [
        {
            blueprint: 'particle.smoke',
            name: 'particle-trigger',
            dimensions: { x: 0.1, y: 0.1, z: 0.1 },
            localPosition: { x: 0 , y: 0.08, z: 0.32 },
            localRotation: Quat.fromPitchYawRollDegrees(0, 0, 0),
            lifespan: 0.2,
            emitRate: 80,
            emitSpeed: 6,
            "polarStart": 0,
            "polarFinish": 0.1,
            emitterShouldTrail: false,
            additiveBlending: true,
            isEmitting: false,
            emitAcceleration: {
                x: 0,
                y: 0,
                z: 3.0
            },
            accelerationSpread: {
                x: 0.1,
                y: 0,
                z: 0.1
            }
        }
    ]
});

registerExtendedBlueprint('particle.fire', 'particle.smoke', {
    localPosition: { x: 0 , y: 0.08, z: 0.32 },
    localRotation: Quat.fromPitchYawRollDegrees(0, 0, 0),
    lifespan: 0.2,
    emitRate: 80,
    emitSpeed: 6,
    "polarStart": 0,
    "polarFinish": 0.1,
    emitterShouldTrail: false,
    additiveBlending: true,
    isEmitting: false,
});

registerBlueprint('gun.sparkler', {
    name: 'flamethrower',
    type: 'Model',
    modelURL: guns.flamethrower.modelURL,
    dimensions: guns.flamethrower.dimensions,
    shapeType: 'box',
    collisionsWillMove: true,
    gravity: {x: 0, y: -5.0, z: 0},
    restitution: 0,
    collisionSoundURL: "https://s3.amazonaws.com/hifi-public/sounds/Guns/Gun_Drop_and_Metalli_1.wav",
    components: {
        particleGun: {
            audioURL: "http://localhost:8080/audio/sparkle.wav"
        }
    },
    userData: {
        grabbableKey: {
            spatialKey: {
                relativePosition: {
                    x: 0,
                    y: 0.05,
                    z: -0.08
                },
                relativeRotation: Quat.fromPitchYawRollDegrees(0, 180, 0)
            },
            invertSolidWhileHeld: true
        }
    },
    children: [
        {
            blueprint: 'particle.sparkle',
            name: 'particle-trigger',
            dimensions: { x: 0.1, y: 0.1, z: 0.1 },
            localPosition: { x: 0 , y: 0.05, z: 0.3 },
            localRotation: Quat.fromPitchYawRollDegrees(90, 0, 0),
            emitSpeed: 1,
            emitterShouldTrail: false,
            additiveBlending: true,
            isEmitting: false
        }
    ]
});

registerBlueprint('weapon.grenade', {
    name: 'grenade',
    type: "Model",
    modelURL: guns.grenade.modelURL,
    dimensions: guns.grenade.dimensions,
    angularVelocity: {
        x: 30,
        y: 0,
        z: 1
    },
    gravity: { x: 0, y: -9.8, z: 0 },
    lifetime: 10,
    shapeType: "Box",
    collisionsWillMove: true,
    children: [
        {
            blueprint: 'particle.smoke',
            position: { x: 0 , y: 0, z: 0 }
        }
    ],
    components: {
        timedExplosive: {},
    }
});

registerBlueprint('weapon.smokeGrenade', {
    name: 'grenade',
    type: "Model",
    modelURL: guns.grenadeSmoke.modelURL,
    dimensions: guns.grenadeSmoke.dimensions,
    angularVelocity: {
        x: 30,
        y: 0,
        z: 1
    },
    gravity: { x: 0, y: -9.8, z: 0 },
    lifetime: 5,
    shapeType: "Box",
    collisionsWillMove: true,
    children: [
        {
            blueprint: 'particle.smoke',
            position: { x: 0 , y: 0, z: 0 }
        }
    ],
    components: {
    }
});

registerBlueprint('particle.explosion', {
    "ignoreForCollisions": 0,
    "collisionMask": 31,
    "collidesWith": "static,dynamic,kinematic,myAvatar,otherAvatar,",
    "collisionsWillMove": 0,
    "name": "ParticlesTest Emitter",
    "color": {
        "red": 255,
        "green": 255,
        "blue": 255
    },
    "maxParticles": 1000,
    "lifespan": 5,
    "emitRate": 2,
    "emitSpeed": 1,
    "speedSpread": 0,
    "emitOrientation": {
        "x": -0.7071068286895752,
        "y": 0,
        "z": 0,
        "w": 0.7071068286895752
    },
    "emitDimensions": {
        "x": 0,
        "y": 0,
        "z": 0
    },
    "emitRadiusStart": 1,
    "polarStart": 0,
    "polarFinish": 0,
    "azimuthStart": -3.1415927410125732,
    "azimuthFinish": 3.1415927410125732,
    "emitAcceleration": {
        "x": 0,
        "y": -0.30000001192092896,
        "z": 0
    },
    "accelerationSpread": {
        "x": 0,
        "y": 0,
        "z": 0
    },
    "particleRadius": 0.03999999910593033,
    "radiusSpread": 0,
    "radiusStart": 0.03999999910593033,
    "radiusFinish": 0.03999999910593033,
    "colorSpread": {
        "red": 0,
        "green": 0,
        "blue": 0
    },
    "colorStart": {
        "red": 255,
        "green": 255,
        "blue": 255
    },
    "colorFinish": {
        "red": 255,
        "green": 255,
        "blue": 255
    },
    "alpha": 1,
    "alphaSpread": 0,
    "alphaStart": 1,
    "alphaFinish": 1,
    "emitterShouldTrail": 0,
    "textures": "https://hifi-public.s3.amazonaws.com/alan/Particles/Particle-Sprite-Smoke-1.png"
}
);

registerBlueprint('nailgun.nail', {
    type: 'Model',
    name: 'nail',
    modelURL: Script.resolvePath("../gunshow/nail.obj"),
    dimensions: {
        x: 0.1,
        y: 0.1,
        z: 0.56
    },
    shapeType: "box",
    linearDamping: 0.001,
    gravity: { x: 0, y: -9.8, z: 0 },
    lifetime: 10,
    components: {
        sticky: {}
    }
});

registerBlueprint('gun.pistol', utils.extend(utils.deepCopy(guns.pistolSilencer), {
    components: {
        hitscanGun: {
            barrelPointOffset: {
                x: 0,
                y: 0.05,
                z: -0.05
            }
        }
    }
}));



// How to implement fire?
//  On firing, raycast out to find item being targeted
//  If has sent fire message to entity before, skip
//  Else send fire message to entity
//
// On Entity side, handle onSetFire, and create fire particle effect
//
// Water gun does same, using onDistinguish
//
