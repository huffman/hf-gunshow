Script.include('components/module.js');

require('components/components.js');
require('components/blueprints.js');
const audio = require('audio.js');

// var GUNS = require('guns.js').guns;
GUNS = require('guns.js').guns;
console.warn('guns', GUNS);
// print("HEREEEEguns", guns);
// print("HEREEEEguns", Object.keys(GUNS));

const naturePack = require('naturePack.js')
var natureAssets = naturePack.assets;

SCENE = {
    name: "home",
    entities: [
        // {
        //     name: "island",
        //     type: "Model",
        //     shapeType: 'box',
        //     position: { x: 0.27, y: -14.29, z: 1.47 },
        //     dimensions: { x: 50.76, y: 25.32, z: 43.61 },
        //     modelURL: "https://hifi-public.s3.amazonaws.com/huffman/island.fbx",
        // },
        // {
        //     blueprint: "Plate_Grass_01",
        //     position: { x: 0, y: -2, z: 0 }
        // },
        // {
        //     blueprint: "Plate_Grass_01",
        //     position: { x: 3.0, y: -2, z: 0 }
        // },
        // {
        //     blueprint: "Plate_River_01",
        //     position: { x: 0.0, y: -2, z: 3.0 },
        //     rotation: Quat.fromPitchYawRollDegrees(0, 90, 0)
        // },
        // {
        //     blueprint: "Plate_River_Corner_01",
        //     position: { x: 3.0, y: -2, z: 3.0 },
        //     rotation: Quat.fromPitchYawRollDegrees(0, 90, 0)
        // },
        // {
        //     blueprint: "Plate_River_Corner_01",
        //     position: { x: 3.0, y: -2, z: 3.0 },
        //     rotation: Quat.fromPitchYawRollDegrees(0, 90, 0)
        // },
        {
            name: "ForestAmbientSound",
            position: { x: 0, y: 0, z: 0 },
            components: {
                audio: {
                    url: audio.forestAmbience,
                    volume: 0.25,
                    loop: true,
                    follow: false
                }
            }
        },
        {
            name: "StreamAmbientSound",
            position: { x: 0, y: 0, z: 0 },
            components: {
                audio: {
                    url: audio.stream,
                    volume: 1.0,
                    loop: true,
                    follow: false
                }
            }
        },
        {
            name: "fireplaceSwitch",
            type: "Box",
            position: { x: 0.5, y: 0, z: 0 },
            components: {
                button: {},
                eventProxy: {
                    buttonActivated: {
                        to: 'warpArea',
                        method: 'create',
                        args: ['random']
                    }
                }
            }
        },
        {
            name: "warpArea",
            position: { x: 0, y: 0.5, z: 0 },
            ignoreForCollisions: true,
            components: {
                objectCreator: {}
            }
        },
        {
            name: "fireplace",
            position: { x: 8.6, y: -1.7846, z: 9.36 },
            children: [
                {
                    blueprint: 'Campfire_01'
                },
                {
                    blueprint: 'particle.smoke',
                    name: "FIRE",
                    localPosition: { x: 0, y: 0, z: 0 },//properties.position,
                    dimensions: { x: 0.1, y: 0.1, z: 0.1 },
                    lifespan: 2.5,
                    emitRate: 20,
                    emitSpeed: 0.2,
                    "polarStart": 0,
                    "polarFinish": 0.3,
                    alphaStart: 1.0,
                    emitterShouldTrail: false,
                    additiveBlending: true,
                    isEmitting: true,
                    emitAcceleration: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    accelerationSpread: {
                        x: 0.1,
                        y: 0,
                        z: 0.1
                    }
                },
                {
                    blueprint: 'particle.smoke',
                    name: "SMOKE",
                    localPosition: { x: 0, y: 0.4, z: 0 },//properties.position,
                    dimensions: { x: 0.1, y: 0.1, z: 0.1 },
                    lifespan: 12.5,
                    emitRate: 1,
                    emitSpeed: 0.2,
                    color: { red: 166, green: 166, blue: 166 },
                    "polarStart": 0,
                    "polarFinish": 0.05,

                    "particleRadius": 0.15,
                    "radiusStart": 0.15,
                    "radiusFinish": 0.15,

                    emitterShouldTrail: false,
                    additiveBlending: true,
                    isEmitting: true,
                    emitAcceleration: {
                        x: 0,
                        y: 0,
                        z: 0
                    },
                    accelerationSpread: {
                        x: 0.01,
                        y: 0,
                        z: 0.01
                    }
                },
                {
                    name: 'fireplace.light',
                    type: 'Light',
                    localPosition: { x: 0, y: 0.2, z: 0 },
                    dimensions: { x: 3, y: 3, z: 3 },
                    color: { red: 207, green: 150, blue: 67 },
                    components: {
                        flickeringLight: {}
                    }
                },
            ],
            components: {
                audio: {
                    url: 'http://hifi-public.s3.amazonaws.com/ryan/demo/0619_Fireplace__Tree_B.L.wav',
                    volume: 0.25,
                    loop: true,
                    follow: false
                }
            }
        },
        {
            name: 'grenade-launcher',
            type: 'Model',
            // modelURL: "https://s3.amazonaws.com/hifi-public/eric/models/gun.fbx",
            modelURL: "https://hifi-content.s3.amazonaws.com/ozan/dev/props/guns/grenade_launcher/grenade_launcher.fbx",
            dimensions: {
                x: 0.26,
                y: 0.33,
                z: 0.92
            },
            color: {
                red: 200,
                green: 0,
                blue: 20
            },
            shapeType: 'box',
            collisionsWillMove: true,
            gravity: {x: 0, y: -5.0, z: 0},
            restitution: 0,
            collisionSoundURL: "https://s3.amazonaws.com/hifi-public/sounds/Guns/Gun_Drop_and_Metalli_1.wav",
            userData: {
                grabbableKey: {
                    spatialKey: {
                        relativePosition: {
                            x: 0,
                            y: 0.05,
                            z: -0.08
                        },
                        relativeRotation: Quat.fromPitchYawRollDegrees(0, 0, 0)
                    },
                    invertSolidWhileHeld: true
                }
            },
            components: {
                projectileGun: {
                    // projectileBlueprint: 'rainbow-disc',
                    projectileBlueprint: 'weapon.grenade',
                    fireSoundURL: 'http://localhost:7070/audio/grenade_launcher.wav'
                }
            },
            children: [
                {
                    type: "ParticleEffect",
                    "name": "muzzle-smoke",
                    position: {
                        x: 0.4,
                        y: 0.05,
                        z: 0
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
                    "textures": "https://hifi-public.s3.amazonaws.com/alan/Particles/Particle-Sprite-Smoke-1.png"
                },
                {
                    type: "ParticleEffect",
                    position: {
                        x: 0.4,
                        y: 0.05,
                        z: 0
                    },
                    isEmitting: false,
                    "name": "muzzle-flash",
                    parentID: this.entityID,
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
                    "additiveBlending": true,
                    "textures": "http://ericrius1.github.io/PartiArt/assets/star.png"
                }
            ]
        },
        {
            name: 'nail-gun',
            type: 'Model',
            // modelURL: "https://s3.amazonaws.com/hifi-public/eric/models/gun.fbx",
            // modelURL: Script.resolvePath('../gunshow/nail_gun.fbx'),
            modelURL: "https://hifi-content.s3.amazonaws.com/ozan/dev/props/guns/nail_gun/nail_gun.fbx",
            dimensions: {
                x: 0.18,
                y: 0.59,
                z: 0.68
            },
            color: {
                red: 200,
                green: 0,
                blue: 20
            },
            shapeType: 'box',
            collisionsWillMove: true,
            gravity: {x: 0, y: -5.0, z: 0},
            restitution: 0,
            collisionSoundURL: "https://s3.amazonaws.com/hifi-public/sounds/Guns/Gun_Drop_and_Metalli_1.wav",
            userData: {
                grabbableKey: {
                    spatialKey: {
                        relativePosition: {
                            x: 0,
                            y: 0.05,
                            z: -0.08
                        },
                        relativeRotation: Quat.fromPitchYawRollDegrees(0, 0, 0)
                    },
                    invertSolidWhileHeld: true
                }
            },
            components: {
                projectileGun: {
                    projectileBlueprint: 'nailgun.nail',
                    fireSoundURL: Script.resolvePath("../gunshow/gatling.wav")
                }
            },
            children: [
                {
                    type: "ParticleEffect",
                    "name": "muzzle-smoke",
                    position: {
                        x: 0.4,
                        y: 0.05,
                        z: 0
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
                    "textures": "https://hifi-public.s3.amazonaws.com/alan/Particles/Particle-Sprite-Smoke-1.png"
                },
                {
                    type: "ParticleEffect",
                    position: {
                        x: 0.4,
                        y: 0.05,
                        z: 0
                    },
                    isEmitting: false,
                    "name": "muzzle-flash",
                    parentID: this.entityID,
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
                    "additiveBlending": true,
                    "textures": "http://ericrius1.github.io/PartiArt/assets/star.png"
                }
            ]
        },
        {
            blueprint: 'weapon.grenade_launcher',
            position: { x: 1.0, y: 0, z: 1 }
        },
        {
            blueprint: 'gun.flamethrower',
            position: { x: 0.5, y: 0, z: 1 }
        },
        // {
        //     blueprint: 'gun.extinguisher',
        //     position: { x: 4.5, y: 0, z: 1 }
        // },
        {
            blueprint: 'gun.pistol',
            position: { x: 1.6, y: 0, z: 0.1 }
        },
        {
            blueprint: 'gun.uzi',
            position: { x: 1.3, y: 0, z: 0.1 }
        },
        {
            blueprint: 'clayPigeonShooter',
            position: { x: 5, y: 0, z: 5 }
        },
        {
            type: "Box",
            name: "target",
            position: { x: 0, y: 0, z: 3 },
            dimensions: {
                x: 0.1,
                y: 0.3,
                z: 0.1
            },
            dynamic: true
        }
    ]
};

var map = [
    ['gcc_0', 'gct_0', 'gct_0', 'gct_0', 'gwt_0', 'gct_0', 'gct_0', 'gct_0', 'gct_0', 'gcc_1'],
    ['gct_3', 'prc_2', 'pr1_0', 'pr1_0', 'prc_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'gct_1'],
    ['gwt_3', 'prc_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'gct_1'],
    ['gct_3', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'gct_1'],
    ['gct_3', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'gct_1'],
    ['gct_3', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'gct_1'],
    ['gct_3', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'gct_1'],
    ['gct_3', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'gct_1'],
    ['gct_3', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'gct_1'],
    ['gct_3', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'pg1_0', 'gct_1'],
    ['gcc_3', 'gct_2', 'gct_2', 'gct_2', 'gct_2', 'gct_2', 'gct_2', 'gct_2', 'gct_2', 'gcc_2'],
];

var entities = naturePack.generateTerrain(map);
for (var k in entities) {
    SCENE.entities.push(entities[k]);
}

var len = Object.keys(naturePack.assets).length;
var rows = Math.sqrt(len);
var i = 0;
var x = 0;
var z = 30;
for (var key in naturePack.assets) {
    //print('pr: ', key);
    SCENE.entities.push({
        blueprint: key,
        position: { x: x * 3, y: 0, z: z }
    });
    if (++x >= rows) {
        x = 0;
        z += 3;
    }
}

var x = 0;
for (var key in naturePack.treeNames) {
    SCENE.entities.push({
        name: 'tree-',
        blueprint: naturePack.treeNames[key],
        position: { x: x, y: -0.5, z: 5 }
    });
    x += 2;
}

// for (var i in naturePack.treeNames) {
//     var key = naturePack.treeNames[i];
//     SCENE.entities.push({
//         blueprint: key,
//         position: { x: i * 3, y: 0, z: 10 }
//     });
// }
//
// var GUN_BASE_URL = "http://localhost:7070/";

var i = 0;
for (var k in GUNS) {
    ++i;
    var data = GUNS[k];
    // SCENE.entities.push(data);
}

var TREES = [{"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.2141534686088562, "x": 4.60909366607666, "z": 1.0103321075439453}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124380826950073, "x": 6.443547248840332, "z": 0}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.21415531635284424, "x": 6.478203773498535, "z": 1.1254949569702148}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 5.245368003845215, "z": 2.964324951171875}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.2141534686088562, "x": 4.703660011291504, "z": 5.104509353637695}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -0.6560921669006348, "x": -1.52587890625e-05, "z": -4.57763671875e-05, "w": 0.7546654939651489}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.2141534686088562, "x": 7.828476905822754, "z": 4.894549369812012}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124380826950073, "x": 9.662930488586426, "z": 3.8842172622680664}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.21415531635284424, "x": 9.697587013244629, "z": 5.009712219238281}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 2.857235908508301, "z": 6.006537437438965}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -0.6560921669006348, "x": -1.52587890625e-05, "z": -4.57763671875e-05, "w": 0.7546654939651489}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.21415531635284424, "x": 4.849747657775879, "z": 6.971457481384277}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": -0.6560921669006348, "x": -1.52587890625e-05, "z": -4.57763671875e-05, "w": 0.7546654939651489}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124380826950073, "x": 5.959465980529785, "z": 6.780499458312988}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -0.6560705304145813, "x": -1.5052883099997416e-06, "z": -2.152662091248203e-05, "w": 0.7546995878219604}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 8.464751243591309, "z": 6.848543167114258}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124380826950073, "x": 7.9645490646362305, "z": 8.596970558166504}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.21415531635284424, "x": 7.999205589294434, "z": 9.722465515136719}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.2141534686088562, "x": 6.130095481872559, "z": 9.60730266571045}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 6.766369819641113, "z": 11.561296463012695}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.21415531635284424, "x": 1.8691091537475586, "z": 9.885055541992188}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124380826950073, "x": 1.8344526290893555, "z": 8.759560585021973}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 0.6362752914428711, "z": 11.723886489868164}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.2141534686088562, "x": 0, "z": 9.769892692565918}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}];
TREES = [{"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 17.00171661376953, "z": 12.989572525024414}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": 0.5555351972579956, "x": -4.57763671875e-05, "z": -1.52587890625e-05, "w": 0.8314793109893799}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 17.68937110900879, "z": 9.624954223632812}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -0.12655571103096008, "x": -3.8119207601994276e-05, "z": -2.9584329240606166e-05, "w": 0.9919700622558594}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 17.826732635498047, "z": 14.389230728149414}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -0.12655571103096008, "x": -3.8119207601994276e-05, "z": -2.9584329240606166e-05, "w": 0.9919700622558594}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 18.137569427490234, "z": 12.18299674987793}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -0.1264514923095703, "x": -4.57763671875e-05, "z": -4.57763671875e-05, "w": 0.9919737577438354}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 16.055471420288086, "z": 22.090373992919922}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.8681718111038208, "x": -4.777528010890819e-05, "z": 6.769701030862052e-06, "w": 0.4962408244609833}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124374866485596, "x": 13.836786270141602, "z": 20.85526466369629}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.8681718111038208, "x": -4.777528010890819e-05, "z": 6.769701030862052e-06, "w": 0.4962408244609833}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.629132866859436, "x": 15.854141235351562, "z": 11.81937026977539}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": 0.5555351972579956, "x": -4.57763671875e-05, "z": -1.52587890625e-05, "w": 0.8314793109893799}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.629132866859436, "x": 15.2060546875, "z": 20.42144203186035}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": 0.8681718111038208, "x": -4.777528010890819e-05, "z": 6.769701030862052e-06, "w": 0.4962408244609833}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 11.068391799926758, "z": 2.515228271484375}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.5555351972579956, "x": -4.57763671875e-05, "z": -1.52587890625e-05, "w": 0.8314793109893799}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124374866485596, "x": 10.719554901123047, "z": 0}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.5555351972579956, "x": -4.57763671875e-05, "z": -1.52587890625e-05, "w": 0.8314793109893799}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.629132866859436, "x": 11.890068054199219, "z": 0.8324670791625977}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": 0.5555351972579956, "x": -4.57763671875e-05, "z": -1.52587890625e-05, "w": 0.8314793109893799}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 13.037643432617188, "z": 2.002669334411621}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": 0.5555351972579956, "x": -4.57763671875e-05, "z": -1.52587890625e-05, "w": 0.8314793109893799}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 13.862659454345703, "z": 3.402327537536621}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -0.1266040802001953, "x": -4.57763671875e-05, "z": -4.57763671875e-05, "w": 0.9919432401657104}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 14.17349624633789, "z": 1.1960935592651367}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -0.12633565068244934, "x": -3.8119207601994276e-05, "z": -2.9584329240606166e-05, "w": 0.991969883441925}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 18.096389770507812, "z": 4.596236705780029}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -0.6561837196350098, "x": -1.52587890625e-05, "z": -4.57763671875e-05, "w": 0.7545739412307739}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 15.939142227172852, "z": 5.153350353240967}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -0.6562752723693848, "x": -1.52587890625e-05, "z": -4.57763671875e-05, "w": 0.7545434236526489}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 16.91653823852539, "z": 3.8555073738098145}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 15.689395904541016, "z": 2.2323050498962402}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.629132866859436, "x": 17.55850601196289, "z": 2.347468852996826}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124374866485596, "x": 17.879669189453125, "z": 0.9474854469299316}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -1.52587890625e-05, "x": -1.52587890625e-05, "z": -1.52587890625e-05, "w": 1}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 2.7641448974609375, "z": 21.819429397583008}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": 0.5914855003356934, "x": -1.52587890625e-05, "z": 7.62939453125e-05, "w": -0.8063019514083862}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 0.7284326553344727, "z": 22.724952697753906}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.5915770530700684, "x": 1.52587890625e-05, "z": 4.57763671875e-05, "w": -0.8062714338302612}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 1.478219985961914, "z": 21.283594131469727}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -0.08278018236160278, "x": 1.52587890625e-05, "z": 4.57763671875e-05, "w": -0.9965819716453552}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 0, "z": 19.88518714904785}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -0.08276906609535217, "x": 3.063819895032793e-05, "z": 7.151850877562538e-05, "w": -0.9965478181838989}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.629132866859436, "x": 1.8624858856201172, "z": 19.69028091430664}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": -0.08278018236160278, "x": 1.52587890625e-05, "z": 4.57763671875e-05, "w": -0.9965819716453552}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124374866485596, "x": 1.94818115234375, "z": 18.25649070739746}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": -0.08278018236160278, "x": 1.52587890625e-05, "z": 4.57763671875e-05, "w": -0.9965819716453552}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 14.895103454589844, "z": 8.737855911254883}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.5555575489997864, "x": -2.1164549252716824e-05, "z": -4.209889993944671e-06, "w": 0.8314780592918396}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 16.831249237060547, "z": 20.20919418334961}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": 0.8681718111038208, "x": -4.777528010890819e-05, "z": 6.769701030862052e-06, "w": 0.4962408244609833}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.629132866859436, "x": 15.716779708862305, "z": 7.055094242095947}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": 0.5555575489997864, "x": -2.1164549252716824e-05, "z": -4.209889993944671e-06, "w": 0.8314780592918396}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 16.864355087280273, "z": 8.225296020507812}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": 0.5555575489997864, "x": -2.1164549252716824e-05, "z": -4.209889993944671e-06, "w": 0.8314780592918396}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 18.000207901000977, "z": 7.418720722198486}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": -0.1263904571533203, "x": -4.57763671875e-05, "z": -4.57763671875e-05, "w": 0.9919737577438354}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 15.032464981079102, "z": 13.502132415771484}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.5555351972579956, "x": -4.57763671875e-05, "z": -1.52587890625e-05, "w": 0.8314793109893799}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 4.352783203125, "z": 19.891382217407227}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": 0.7099760174751282, "x": -8.863958646543324e-05, "z": -7.698461558902636e-06, "w": 0.7041869163513184}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 6.564292907714844, "z": 19.6206111907959}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.7099071145057678, "x": -7.526155968662351e-05, "z": 1.973055441339966e-05, "w": 0.7042545080184937}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 5.42585563659668, "z": 20.779773712158203}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": 0.997835636138916, "x": -7.526155968662351e-05, "z": 1.973055441339966e-05, "w": 0.06543922424316406}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.629132866859436, "x": 4.5925397872924805, "z": 22.191118240356445}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": 0.997835636138916, "x": -7.526155968662351e-05, "z": 1.973055441339966e-05, "w": 0.06543922424316406}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124374866485596, "x": 4.091390609741211, "z": 23.537202835083008}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.997835636138916, "x": -7.526155968662351e-05, "z": 1.973055441339966e-05, "w": 0.06543922424316406}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 6.430629730224609, "z": 22.549264907836914}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.997835636138916, "x": -7.526155968662351e-05, "z": 1.973055441339966e-05, "w": 0.06543922424316406}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 11.233184814453125, "z": 19.66559600830078}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": 0.32942700386047363, "x": -7.62939453125e-05, "z": -4.57763671875e-05, "w": 0.9441519975662231}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 12.808095932006836, "z": 21.241586685180664}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.32933545112609863, "x": -7.62939453125e-05, "z": -1.52587890625e-05, "w": 0.9441825151443481}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124374866485596, "x": 14.68362808227539, "z": 10.98690414428711}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.5555351972579956, "x": -4.57763671875e-05, "z": -1.52587890625e-05, "w": 0.8314793109893799}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 11.193771362304688, "z": 21.058137893676758}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": 0.8681620359420776, "x": -7.62939453125e-05, "z": -1.52587890625e-05, "w": 0.49623870849609375}}, {"dimensions": {"y": 3.7900588512420654, "x": 1.2108598947525024, "z": 1.3981773853302002}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.629132866859436, "x": 9.56857681274414, "z": 21.2703857421875}, "modelURL": "Oak_Fall_01.fbx", "type": "Model", "rotation": {"y": 0.8681620359420776, "x": -7.62939453125e-05, "z": -1.52587890625e-05, "w": 0.49623870849609375}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124374866485596, "x": 8.199308395385742, "z": 21.704208374023438}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.8681620359420776, "x": -7.62939453125e-05, "z": -1.52587890625e-05, "w": 0.49623870849609375}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 10.417993545532227, "z": 22.93931770324707}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.8681620359420776, "x": -7.62939453125e-05, "z": -1.52587890625e-05, "w": 0.49623870849609375}}, {"dimensions": {"y": 2.5317931175231934, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0, "x": 16.870662689208984, "z": 18.816652297973633}, "modelURL": "Oak_Green_01.fbx", "type": "Model", "rotation": {"y": 0.32945072650909424, "x": -6.139215838629752e-05, "z": -2.0541527192108333e-05, "w": 0.9441737532615662}}, {"dimensions": {"y": 2.760930061340332, "x": 1.812000036239624, "z": 1.5692400932312012}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.11456847190856934, "x": 18.445573806762695, "z": 20.392642974853516}, "modelURL": "Large_Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.32935580611228943, "x": -4.731465014629066e-05, "z": -9.467326890444383e-06, "w": 0.9442169666290283}}, {"dimensions": {"y": 3.4542806148529053, "x": 0.9457020163536072, "z": 1.092000126838684}, "shapeType": "box", "components": {"flammable": {}}, "position": {"y": 0.46124374866485596, "x": 14.546266555786133, "z": 6.22262716293335}, "modelURL": "Oak_Dark_01.fbx", "type": "Model", "rotation": {"y": 0.5555575489997864, "x": -2.1164549252716824e-05, "z": -4.209889993944671e-06, "w": 0.8314780592918396}}];

function randFloat(from, to) {
    return from + Math.random() * (to - from);
}

for (var k in TREES) {
    var t = TREES[k];
    t.modelURL = Script.resolvePath('../assets/kenney/naturePack/' + t.modelURL);
    t.position.y = 0;
    const y = t.dimensions.y / 2 - 2.0;
    t.dimensions = Vec3.multiply(randFloat(0.75, 1.25), t.dimensions);
    t.dimensions.y *= randFloat(0.9, 1.5);
    t.position = Vec3.sum({
        x: 10,
        y: y,
        z: 2
    }, t.position);
}

SCENE.entities = SCENE.entities.concat(TREES);

//SCENE.entities = SCENE.entities.slice(20);
Script.scriptEnding.connect(function() {
    print("Script ending");
    destroyScene(SCENE.name);
});

createScene(SCENE);
