const blueprints = require('components/blueprints.js');
const utils = require('components/utils.js');
const audio = require('audio.js');
const debug = require('debug.js');

const createComponentType = require('components/componentsExtra.js').createComponentType;

function arg(args, key, defaultValue) {
    if (args && args.hasOwnProperty(key)) {
        return args[key];
    }
    return defaultValue;
}

const HIT_TYPE = {
    PHYSICAL: 0,
    FIRE: 1,
    WATER: 2,
    SPARKLE: 3
};

const EVENTS = {
    hit: 'hit'
};

createComponentType('hitscanGun', {
    ctor: function(entityManager, properties) {
        console.log("hitscanGun");
        this.barrelPointOffset = arg(properties, 'barrelPointOffset', { x: 0, y: 0, z: 0 });
        this.bulletPower = arg(properties, 'power', 5);
        this.soundURL = arg(properties, 'fireSoundURL', audio.grenadeLauncher);
        this.fireSound = SoundCache.getSound(this.soundURL);
        var hitTypeString = arg(properties, 'hitType', 'PHYSICAL');
        this.hitType = HIT_TYPE[hitTypeString];
        this.damage = arg(properties, 'damage', 10.0);
        this.relativeRotation = getRelativeRotation(this.entityManager.entityID);

        entityManager.on('useBegin', this.onUseBegin.bind(this));
        entityManager.on('useEnd', this.onUseEnd.bind(this));
              console.log("hitscanGunEnd");
    },
    onUseBegin: function(entityID, args) {
        print("use begin", this.entityManager.entityID, this.soundURL);
        // var properties = Entities.getEntityProperties(this.entityManager.entityID, ['position', 'rotation']);
        // var origin = Vec3.sum(properties.position, this.barrelPointOffset);
        // var forward = Quat.getFront(properties.rotation);

        var properties = Entities.getEntityProperties(this.entityManager.entityID, ['position', 'rotation']);
        var rotation = Quat.multiply(properties.rotation, this.relativeRotation);
        var forward = Quat.getFront(rotation);
        var origin = Vec3.sum(properties.position, Vec3.multiplyQbyV(rotation, this.barrelPointOffset));

        print('debug', debug.drawLine);
        debug.drawLine(origin, Vec3.sum(origin, forward));

        Vec3.print('forward', forward);

        Audio.playSound(this.fireSound, {
            volume: 0.8,
            position: properties.position
        });

        var pickRay = { origin: origin, direction: forward };
        var intersectionInfo = Entities.findRayIntersectionBlocking(pickRay, true);
        if (intersectionInfo.intersects) {
            console.log("Hit: ", intersectionInfo.entityID);
            Entities.getEntityProperties(intersectionInfo.entityID, ['velocity']);
            var newVelocity = Vec3.sum(properties.velocity, Vec3.multiply(forward, this.bulletPower));
            Entities.editEntity(intersectionInfo.entityID, {
                velocity: newVelocity
            });
            this.entityManager.sendEvent(intersectionInfo.entityID, 'hit', { type: this.hitType, damage: this.damage });
        } else {
            console.log("No hit");
        }
    },
    onUseEnd: function(args) {
    }
}, {});

createComponentType('projectileGun', {
    ctor: function(entityManager, properties) {
        console.log("init gun component", properties.fireSoundURL);
        var soundURL = properties.fireSoundURL || audio.grenadeLauncher;
        console.log("url", soundURL);
        this.fireSound = SoundCache.getSound(soundURL);
        this.projectileBlueprint = properties.projectileBlueprint || 'nailgun.nail';
        entityManager.on('useBegin', this.onUseBegin.bind(this));
        entityManager.on('useEnd', this.onUseEnd.bind(this));
        console.log("done initting");
    },
    stopMuzzleFlash: function() {
        if (this.muzzleSmokeID) {
            Entities.editEntity(this.muzzleSmokeID, { isEmitting: false });
        }
        if (this.muzzleFlashID) {
            Entities.editEntity(this.muzzleFlashID, { isEmitting: false });
        }
    },
    onUseBegin: function(entityID, args) {
        print("use begin", this.entityManager.entityID);

        var properties = Entities.getEntityProperties(this.entityManager.entityID, ['position', 'rotation']);
        var audioOptions = {
            volume: 0.9,
            position: properties.position
        };
        Audio.playSound(this.fireSound, audioOptions);

        args = parseJSON(args[0]);

        var forward = Quat.getFront(properties.rotation);
        // Spawn projectile
        spawnBlueprint(this.projectileBlueprint, {
            velocity: Vec3.multiply(20, forward),
            rotation: properties.rotation,
            position: Vec3.sum(properties.position, forward)
        });

        // TODO: Do we want to access other entities directly, or send them messages??
        if (this.muzzleSmokeID === undefined) {
            this.muzzleSmokeID = findEntity({
                name: 'muzzle-smoke',
                parentID: this.entityManager.entityID
            });
        }
        if (this.muzzleFlashID === undefined) {
            this.muzzleFlashID = findEntity({
                name: 'muzzle-flash',
                parentID: this.entityManager.entityID
            });
        }
        print("5");
        if (this.muzzleSmokeID) {
            console.log('playing particle effect');
            // Adjust particle effect properties
            Entities.editEntity(this.muzzleSmokeID, { isEmitting: true });
            Script.setTimeout(this.stopMuzzleFlash.bind(this), 500);
        }
        if (this.muzzleFlashID) {
            Entities.editEntity(this.muzzleFlashID, { isEmitting: true });
            Script.setTimeout(this.stopMuzzleFlash.bind(this), 500);
        }
        if (this.particleTimeoutID) {
            Script.clearTimeout(this.particleTimeoutID);
        }
        print("6");
    },
    onUseEnd: function(args) {
        print("use end");
    }
}, {
});

function getRelativeRotation(entityID) {
    var data = parseJSON(Entities.getEntityProperties(entityID, ['userData']).userData);
    try {
        return data.grabbableKey.spatialKey.relativeRotation;
    } catch (e) {
        return Quat.fromPitchYawRollDegrees(0, 0, 0);
    }
}

createComponentType('particleGun', {
    ctor: function(entityManager, properties) {
        this.barrelPointOffset = arg(properties, 'barrelPointOffset', { x: 0, y: 0, z: 0 });
        var hitTypeString = arg(properties, 'hitType', 'FIRE');
        this.hitType = HIT_TYPE[hitTypeString];
        this.damage = arg(properties, 'damage', 10.0);
        this.relativeRotation = getRelativeRotation(this.entityManager.entityID);

        this.intervalID = null;

        entityManager.on('useBegin', this.onUseBegin.bind(this));
        entityManager.on('useEnd', this.onUseEnd.bind(this));
        this.particleID = findEntity({
            name: 'particle-trigger',
            parentID: this.entityManager.entityID
        });
        if (properties.audioURL) {
            this.sound = SoundCache.getSound(properties.audioURL);
        }
    },
    checkForEntitiesBeingHit: function() {
        //console.log("checkForEntitiesBeingHit()");
        var properties = Entities.getEntityProperties(this.entityManager.entityID, ['position', 'rotation']);
        var rotation = Quat.multiply(properties.rotation, this.relativeRotation);
        var forward = Quat.getFront(rotation);
        var origin = Vec3.sum(properties.position, Vec3.multiplyQbyV(rotation, this.barrelPointOffset));
        Vec3.print('forward', forward);
        var pickRay = { origin: origin, direction: forward };
        var intersectionInfo = Entities.findRayIntersectionBlocking(pickRay, true);
        if (intersectionInfo.intersects) {
            if (Vec3.distance(intersectionInfo.intersection, origin) < 4.0) {
                console.log("HIT!", Entities.getEntityProperties(intersectionInfo.entityID, ['name']).name);
                this.entityManager.sendEvent(intersectionInfo.entityID, 'hit', { type: this.hitType, damage: this.damage });
            } else {
                console.log("hit, but too far away");
            }
        }
    },
    onUseBegin: function(entityID, args) {
        console.log("Using particle gun");
        if (this.particleID) {
            Entities.editEntity(this.particleID, {
                isEmitting: true
            });
        }
        if (this.sound && this.sound.downloaded) {
            if (!this.injector) {
                var properties = Entities.getEntityProperties(this.entityManager.entityID, ['position']);
                this.injector = Audio.playSound(this.sound, {
                    position: properties.position,
                    volume: 1.0,
                    loop: true
                });
            } else {
                this.injector.restart();
            }
        }
        this.intervalID = Script.setInterval(this.checkForEntitiesBeingHit.bind(this), 100);
        this.checkForEntitiesBeingHit();
    },
    onUseEnd: function() {
        console.log("Stopped using particle gun");
        if (this.intervalID) {
            Script.clearInterval(this.intervalID);
            this.intervalID = null;
        }
        if (this.particleID) {
            Entities.editEntity(this.particleID, {
                isEmitting: false
            });
        }
        if (this.injector) {
            this.injector.stop();
        }
    }
}, {
});



createComponentType('sticky', {
    init: function() {
        Script.addEventHandler(this.entityID, "collisionWithEntity", this.onCollisionWithEntity.bind(this));
    },
    onCollisionWithEntity: function(entityA, entityB, collision) {
        var properties = Entities.getEntityProperties(entityA, ['position', 'rotation']);
        var otherProperties = Entities.getEntityProperties(entityB, ['name', 'position', 'rotation']);
        console.log("Hit: " + otherProperties.name);
        Entities.editEntity(entityA, {
            parentID: entityB,
            //localPosition: Vec3.subtract(properties.position, otherProperties.position),
            //localRotation: Quat.rotationBetween(properties.rotation, otherProperties.rotation),
            velocity: { x: 0, y: 0, z: 0 },
            gravity: { x: 0, y: 0, z: 0 },
            collisionsWillMove: false,
            ignoreForCollisions: true
        });
    }
}, {
});

createComponentType('timedExplosive', {
}, {
    ctor: function(entityManager, properties) {
        this.radius = arg(properties, 'radius', 0.5);
        this.power = arg(properties, 'power', 1.0);
    },
    init: function() {
        this.timeoutID = Script.setTimeout(this.detonate.bind(this), 1000);
        this.fireSound = SoundCache.getSound(audio.grenadeExplosion);
    },
    detonate: function() {
        console.warn("detonate!");

        var properties = Entities.getEntityProperties(this.entityManager.entityID, ['position']);

        try {
            Vec3.print("exploding at", properties.position);
            spawnBlueprint('particle.explosion', {
                position: properties.position,
                lifetime: 1000,
                lifespan: 100
            });
        } catch (e) {
            print('failed to spawn blueprint ', e);
        }

        Audio.playSound(this.fireSound, {
            volume: 0.9,
            position: properties.position
        });

        //Apply force to nearby entities
        var entities = Entities.findEntities(properties.position, this.radius);
        try {
        for (var i in entities) {
            var id = entities[i];
            if (id != this.entityManager.entityID) {
                print("PUshing", id);
                var targetProperties = Entities.getEntityProperties(id, ['position', 'velocity']);
                var directionOfForce = Vec3.subtract(targetProperties.position, properties.position);
                var force = this.power;
                if (directionOfForce.x == 0 && directionOfForce.y == 0 && directionOfForce.z == 0) {
                    directionOfForce = { x: 0, y: 1, z: 0 };
                } else {
                    var distance = Vec3.length(directionOfForce);
                    directionOfForce = Vec3.normalize(directionOfForce);
                    var force = this.power * (this.radius - distance);
                }
                Entities.editEntity(id, {
                    velocity: { x: 0, y: 1, z: 0 },//Vec3.sum(targetProperties.velocity, Vec3.multiply(force, directionOfForce))
                });
            }
        }
        } catch (e) {
            print('failed to push', e);
        }

        print("deleting entity");
        Entities.deleteEntity(this.entityManager.entityID);
    }
});

createComponentType('trail', {
}, {
    init: function() {
        console.log("TRAIL START");
        var properties = Entities.getEntityProperties(this.entityManager.entityID, ['position', 'rotation']);
        // Create infiniteline
        this.line = new InfiniteLine(
            properties.position, { red: 255, green: 255, blue: 255 }, 100);
        var normal = Quat.getUp(properties.rotation);
        this.line.enqueuePoint(properties.position, 0.1, normal);
        this.line.enqueuePoint(properties.position, 0.1, normal);

        this.intervalID = Script.setInterval(function() {
            console.log("TRAIL APPEND");
            var properties = Entities.getEntityProperties(this.entityManager.entityID, ['position', 'rotation']);
            var normal = Quat.getUp(properties.rotation);
            this.line.enqueuePoint(properties.position, 0.1, normal);
        }.bind(this), 20);
    },
    destroy: function() {
        console.log("TRAIL DESTROY");
        // Destory line
        Script.clearInterval(this.intervalID);
        this.line.destroy();
    }
});

createComponentType('mortal', {
}, {
    init: function() {
        this.hp = 100;
        this.entityManager.on('damage', this.onDamage.bind(this));
    },
    onDamage: function(type, amount) {
        this.hp -= amount;
        console.log("damage", type, amount, this.hp);
        // this.entityManager.emit('died');
    }
});

createComponentType('flammable', {
    init: function() {
        console.log("Flammable registering for hit event");
        this.entityManager.on('hit', this.onHit.bind(this));
        //this.entityManager.emit('hit', 'on:  test');
        this.onFire = false;
        this.flameID = null;
    },
    onHit: function(args) {
        console.log("FLAMMABLE HIT");
        console.log("HIT", JSON.stringify(args));
        if (args.type == HIT_TYPE.FIRE) {
            console.log("ON FIRE!!!");
            if (!this.onFire) {
                //var properties = Entities.getEntityProperties(this.entityManager.entityID, ['position']);
                this.flameID = spawnBlueprint('particle.smoke', {
                    lifetime: 30,
                    name: "FIRE",
                    parentID: this.entityManager.entityID,
                    localPosition: { x: 0, y: 0, z: 0 },//properties.position,
                    dimensions: { x: 0.1, y: 0.1, z: 0.1 },
                    lifespan: 2.5,
                    emitRate: 80,
                    emitSpeed: 0.5,
                    "polarStart": 0,
                    "polarFinish": 0.3,
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
                });
                this.onFire = true;
                Script.setTimeout(function() {
                    console.log("Deleting", this.flameID);
                    Entities.editEntity(this.flameID, { isEmitting: false });
                    this.onFire = false;
                }.bind(this), 25000);
            }
        } else if (args.type == HIT_TYPE.WATER) {
            if (this.onFire) {
                console.log("NO LONGER ON FIRE");
                this.onFire = false;
                Entities.deleteEntity(this.flameID);
                this.flameID = null;
            }
        }
    }
}, {
});

createComponentType('enchantable', {
}, {
    init: function() {
        this.entityManager.on('enchant', this.onEnchant.bind(this));
    },
    onEnchant: function(localPosition) {
        // Attach a sparkle entity
    }
});


createComponentType('skeetShooter', {
    ctor: function(entityManager, properties) {
        this.blueprintName = arg(properties, 'blueprint', 'clayPigeon');
        this.shootOffset = arg(properties, 'shootOffset', { x: 0, y: 0, z: 0 });
        this.shootSpeed = arg(properties, 'shootSpeed', 5);
    },
    onHit: function() {
        this.shoot();
    },
    onPress: function() {
        this.shoot();
    },
    shoot: function() {
        const properties = Entities.getEntityProperties(this.entityManager.entityID, ['position', 'rotation']);
        const forward = Quat.front(properties.rotation);
        const velocity = Vec3.multiply(this.shootSpeed, forward);
        const rotatedShootOffset = Vec3.multiplyQbyV(properties.rotation, this.shootOffset);
        const shootFrom = Vec3.sum(properties.position, rotatedShootOffset);
        blueprints.spawnBlueprint(this.blueprintName, {
            properties: shootFrom,
            velocity: velocity
        });
    }
}, {
    init: function() {
    },
    onShoot: function() {
    }
});
