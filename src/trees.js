const ANIM_OAK_EXPLODE = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/oak/tree_oak_explode.fbx';
const ANIM_OAK_SHAKE = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/oak/tree_oak_shake.fbx';
const OAK_DARK = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/oak/tree_oak_static_dark.fbx';
const OAK_FALL = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/oak/tree_oak_static_fall.fbx';
const OAK = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/oak/tree_oak_static.fbx';
const OAK_DIMENSIONS = {
    "y": 4.60155,
    "x": 3.02,
    "z": 2.6154
};

const ANIM_OAK_LARGE_EXPLODE = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/oak_large/tree_oak_large_explode.fbx';
const ANIM_OAK_LARGE_SHAKE = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/oak_large/tree_oak_large_shake.fbx';
const OAK_LARGE_FALL = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/oak_large/tree_oak_large_static_fall.fbx';
const OAK_LARGE = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/oak_large/tree_oak_large_static.fbx';
const OAK_LARGE_DIMENSIONS = {
    "y": 4.60155,
    "x": 3.02,
    "z": 2.6154
};

const ANIM_PINE_EXPLODE = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/pine/tree_pine_explode.fbx';
const ANIM_PINE_SHAKE = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/pine/tree_pine_shake.fbx';
const PINE = 'http://hifi-content.s3.amazonaws.com/ozan/dev/props/trees_lowpoly/pine/tree_pine_static.fbx';
const PINE_DIMENSIONS = {
    "y": 3.7126279999999996,
    "x": 1.2769352,
    "z": 1.2957
}


exports.trees = {};

function addTree(name, model, dimensions, animShake, animExplode) {
    exports.trees[name] = {
        name: name,
        type: 'Model',
        modelURL: model,
        dimensions: dimensions,
        components: {
            flammable: {
                size: 4,
                fireAnimationURL: animShake,
                killAnimationURL: animExplode
            }
        }
    }
}

addTree('tree.oak', OAK, OAK_DIMENSIONS, ANIM_OAK_SHAKE, ANIM_OAK_EXPLODE);
addTree('tree.oakDark', OAK_DARK, OAK_DIMENSIONS, ANIM_OAK_SHAKE, ANIM_OAK_EXPLODE);
addTree('tree.oakFall', OAK_FALL, OAK_DIMENSIONS, ANIM_OAK_SHAKE, ANIM_OAK_EXPLODE);

addTree('tree.oakLargeFall', OAK_LARGE_FALL, OAK_LARGE_DIMENSIONS, ANIM_OAK_LARGE_SHAKE, ANIM_OAK_LARGE_EXPLODE);
addTree('tree.oakLarge', OAK_LARGE, OAK_LARGE_DIMENSIONS, ANIM_OAK_LARGE_SHAKE, ANIM_OAK_LARGE_EXPLODE);

addTree('tree.pine', PINE, PINE_DIMENSIONS, ANIM_PINE_SHAKE, ANIM_PINE_EXPLODE);
