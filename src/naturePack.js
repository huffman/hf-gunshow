//const BASE_URL = "http://192.168.0.106:8000/assets/kenney/naturePack/";

const BASE_URL = Script.resolvePath("../assets/kenney/naturePack/");

var ASSETS = {
    "Tall_Rock_2_01": {
        "modelURL": "Tall_Rock_2_01.fbx", 
        "name": "Tall_Rock_2_01", 
        "dimensions": {
            "y": 2.17, 
            "x": 1.17779, 
            "z": 1.36
        }
    }, 
    "Grey_Cliff_Green_Top_01": {
        "modelURL": "Grey_Cliff_Green_Top_01.fbx", 
        "name": "Grey_Cliff_Green_Top_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 0.78, 
            "z": 3.0000000000000004
        }
    }, 
    "Grey_Waterfall_Top_01": {
        "modelURL": "Grey_Waterfall_Top_01.fbx", 
        "name": "Grey_Waterfall_Top_01", 
        "dimensions": {
            "y": 0.2900000000000007, 
            "x": 0.9199999999999999, 
            "z": 3.0000000000000058
        }
    }, 
    "Grey_Cliff_Top_01": {
        "modelURL": "Grey_Cliff_Top_01.fbx", 
        "name": "Grey_Cliff_Top_01", 
        "dimensions": {
            "y": 0.2900000000000007, 
            "x": 0.9199999999999999, 
            "z": 3.000000000000003
        }
    }, 
    "Tree_01": {
        "modelURL": "Tree_01.fbx", 
        "name": "Tree_01", 
        "dimensions": {
            "y": 3.7126279999999996, 
            "x": 1.2769352, 
            "z": 1.2957
        }
    }, 
    "Grey_Cliff_Corner_01": {
        "modelURL": "Grey_Cliff_Corner_01.fbx", 
        "name": "Grey_Cliff_Corner_01", 
        "dimensions": {
            "y": 2.2, 
            "x": 0.78, 
            "z": 0.78
        }
    }, 
    "Large_Oak_Dark_01": {
        "modelURL": "Large_Oak_Dark_01.fbx", 
        "name": "Large_Oak_Dark_01", 
        "dimensions": {
            "y": 4.60155, 
            "x": 3.02, 
            "z": 2.6154
        }
    }, 
    "Mushroom_Tall_01": {
        "modelURL": "Mushroom_Tall_01.fbx", 
        "name": "Mushroom_Tall_01", 
        "dimensions": {
            "y": 0.787, 
            "x": 0.434918, 
            "z": 0.5022
        }
    }, 
    "Rock_6_01": {
        "modelURL": "Rock_6_01.fbx", 
        "name": "Rock_6_01", 
        "dimensions": {
            "y": 0.34, 
            "x": 1.0, 
            "z": 1.0
        }
    }, 
    "Oak_Green_01": {
        "modelURL": "Oak_Green_01.fbx", 
        "name": "Oak_Green_01", 
        "dimensions": {
            "y": 4.9335, 
            "x": 1.57617, 
            "z": 1.82
        }
    }, 
    "Flower_Red_01": {
        "modelURL": "Flower_Red_01.fbx", 
        "name": "Flower_Red_01", 
        "dimensions": {
            "y": 0.4, 
            "x": 0.485926, 
            "z": 0.485926
        }
    }, 
    "Brown_Cliff_Bottom_Corner_Green_Top_01": {
        "modelURL": "Brown_Cliff_Bottom_Corner_Green_Top_01.fbx", 
        "name": "Brown_Cliff_Bottom_Corner_Green_Top_01", 
        "dimensions": {
            "y": 2.2, 
            "x": 1.14, 
            "z": 1.14
        }
    }, 
    "Wood_Fence_01": {
        "modelURL": "Wood_Fence_01.fbx", 
        "name": "Wood_Fence_01", 
        "dimensions": {
            "y": 1.1, 
            "x": 0.5, 
            "z": 3.0
        }
    }, 
    "Grey_Cliff_End_01": {
        "modelURL": "Grey_Cliff_End_01.fbx", 
        "name": "Grey_Cliff_End_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 1.1400000000000001, 
            "z": 3.0
        }
    }, 
    "Rock_4_01": {
        "modelURL": "Rock_4_01.fbx", 
        "name": "Rock_4_01", 
        "dimensions": {
            "y": 0.53, 
            "x": 1.0, 
            "z": 1.0
        }
    }, 
    "Mushroom_Brown_01": {
        "modelURL": "Mushroom_Brown_01.fbx", 
        "name": "Mushroom_Brown_01", 
        "dimensions": {
            "y": 0.353484, 
            "x": 0.434918, 
            "z": 0.5022
        }
    }, 
    "Grey_Cliff_Bottom_Corner_01": {
        "modelURL": "Grey_Cliff_Bottom_Corner_01.fbx", 
        "name": "Grey_Cliff_Bottom_Corner_01", 
        "dimensions": {
            "y": 2.2, 
            "x": 1.14, 
            "z": 1.14
        }
    }, 
    "Brown_Cliff_End_Green_Top_01": {
        "modelURL": "Brown_Cliff_End_Green_Top_01.fbx", 
        "name": "Brown_Cliff_End_Green_Top_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 1.1400000000000001, 
            "z": 3.0
        }
    }, 
    "Grey_Waterfall_01": {
        "modelURL": "Grey_Waterfall_01.fbx", 
        "name": "Grey_Waterfall_01", 
        "dimensions": {
            "y": 2.2, 
            "x": 3.0, 
            "z": 0.92
        }
    }, 
    "Plate_Grass_01": {
        "modelURL": "Plate_Grass_01.fbx", 
        "name": "Plate_Grass_01", 
        "dimensions": {
            "y": 0.3, 
            "x": 3.0, 
            "z": 3.0
        }
    }, 
    "Trunk_Alt_01": {
        "modelURL": "Trunk_Alt_01.fbx", 
        "name": "Trunk_Alt_01", 
        "dimensions": {
            "y": 0.83, 
            "x": 0.967531, 
            "z": 0.80369
        }
    }, 
    "Brown_Cliff_End_01": {
        "modelURL": "Brown_Cliff_End_01.fbx", 
        "name": "Brown_Cliff_End_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 1.1400000000000001, 
            "z": 3.0
        }
    }, 
    "Grey_Cliff_End_Green_Top_01": {
        "modelURL": "Grey_Cliff_End_Green_Top_01.fbx", 
        "name": "Grey_Cliff_End_Green_Top_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 1.1400000000000001, 
            "z": 3.0
        }
    }, 
    "Rock_5_01": {
        "modelURL": "Rock_5_01.fbx", 
        "name": "Rock_5_01", 
        "dimensions": {
            "y": 0.49, 
            "x": 1.0, 
            "z": 1.0
        }
    }, 
    "Brown_Cliff_Green_Top_01": {
        "modelURL": "Brown_Cliff_Green_Top_01.fbx", 
        "name": "Brown_Cliff_Green_Top_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 0.78, 
            "z": 3.000000000000001
        }
    }, 
    "Brown_Cliff_Top_Corner_01": {
        "modelURL": "Brown_Cliff_Top_Corner_01.fbx", 
        "name": "Brown_Cliff_Top_Corner_01", 
        "dimensions": {
            "y": 0.29, 
            "x": 0.92, 
            "z": 0.9200000000000087
        }
    }, 
    "Brown_Cliff_01": {
        "modelURL": "Brown_Cliff_01.fbx", 
        "name": "Brown_Cliff_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 0.78, 
            "z": 3.0
        }
    }, 
    "Plate_River_Dirt_01": {
        "modelURL": "Plate_River_Dirt_01.fbx", 
        "name": "Plate_River_Dirt_01", 
        "dimensions": {
            "y": 0.3, 
            "x": 3.0, 
            "z": 3.0
        }
    }, 
    "Oak_Dark_01": {
        "modelURL": "Oak_Dark_01.fbx", 
        "name": "Oak_Dark_01", 
        "dimensions": {
            "y": 4.9335, 
            "x": 1.57617, 
            "z": 1.82
        }
    }, 
    "Grey_Cliff_Bottom_Green_Top_01": {
        "modelURL": "Grey_Cliff_Bottom_Green_Top_01.fbx", 
        "name": "Grey_Cliff_Bottom_Green_Top_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 1.1400000000000001, 
            "z": 3.0
        }
    }, 
    "Campfire_01": {
        "modelURL": "Campfire_01.fbx", 
        "name": "Campfire_01", 
        "dimensions": {
            "y": 0.15, 
            "x": 0.699329, 
            "z": 0.699329
        }
    }, 
    "Trunk_02": {
        "modelURL": "Trunk_02.fbx", 
        "name": "Trunk_02", 
        "dimensions": {
            "y": 0.83, 
            "x": 0.80369, 
            "z": 0.80369
        }
    }, 
    "Brown_Cliff_Corner_01": {
        "modelURL": "Brown_Cliff_Corner_01.fbx", 
        "name": "Brown_Cliff_Corner_01", 
        "dimensions": {
            "y": 2.2, 
            "x": 0.78, 
            "z": 0.78
        }
    }, 
    "Plate_River_01": {
        "modelURL": "Plate_River_01.fbx", 
        "name": "Plate_River_01", 
        "dimensions": {
            "y": 0.3, 
            "x": 3.0, 
            "z": 3.0
        }
    }, 
    "Brown_Cliff_Bottom_01": {
        "modelURL": "Brown_Cliff_Bottom_01.fbx", 
        "name": "Brown_Cliff_Bottom_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 1.1400000000000001, 
            "z": 3.0000000000000013
        }
    }, 
    "Rock_2_01": {
        "modelURL": "Rock_2_01.fbx", 
        "name": "Rock_2_01", 
        "dimensions": {
            "y": 0.71, 
            "x": 1.0, 
            "z": 0.866025
        }
    }, 
    "Grey_Cliff_Bottom_01": {
        "modelURL": "Grey_Cliff_Bottom_01.fbx", 
        "name": "Grey_Cliff_Bottom_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 1.1400000000000001, 
            "z": 3.0
        }
    }, 
    "Water_lily_01": {
        "modelURL": "Water_lily_01.fbx", 
        "name": "Water_lily_01", 
        "dimensions": {
            "y": 0.1, 
            "x": 0.562819, 
            "z": 0.617449
        }
    }, 
    "Grass_01": {
        "modelURL": "Grass_01.fbx", 
        "name": "Grass_01", 
        "dimensions": {
            "y": 0.395, 
            "x": 0.725, 
            "z": 0.725
        }
    }, 
    "Brown_Cliff_Bottom_Corner_01": {
        "modelURL": "Brown_Cliff_Bottom_Corner_01.fbx", 
        "name": "Brown_Cliff_Bottom_Corner_01", 
        "dimensions": {
            "y": 2.2, 
            "x": 1.14, 
            "z": 1.14
        }
    }, 
    "Oak_Fall_01": {
        "modelURL": "Oak_Fall_01.fbx", 
        "name": "Oak_Fall_01", 
        "dimensions": {
            "y": 4.9335, 
            "x": 1.57617, 
            "z": 1.82
        }
    }, 
    "Brown_Waterfall_Top_01": {
        "modelURL": "Brown_Waterfall_Top_01.fbx", 
        "name": "Brown_Waterfall_Top_01", 
        "dimensions": {
            "y": 0.2900000000000007, 
            "x": 0.9199999999999999, 
            "z": 3.0000000000000058
        }
    }, 
    "Plant_1_01": {
        "modelURL": "Plant_1_01.fbx", 
        "name": "Plant_1_01", 
        "dimensions": {
            "y": 0.65119, 
            "x": 0.569151, 
            "z": 0.569151
        }
    }, 
    "Tent_01": {
        "modelURL": "Tent_01.fbx", 
        "name": "Tent_01", 
        "dimensions": {
            "y": 2.85503, 
            "x": 3.0, 
            "z": 3.0
        }
    }, 
    "Grey_Cliff_Bottom_Corner_Green_Top_01": {
        "modelURL": "Grey_Cliff_Bottom_Corner_Green_Top_01.fbx", 
        "name": "Grey_Cliff_Bottom_Corner_Green_Top_01", 
        "dimensions": {
            "y": 2.2, 
            "x": 1.14, 
            "z": 1.14
        }
    }, 
    "Mushroom_Red_01": {
        "modelURL": "Mushroom_Red_01.fbx", 
        "name": "Mushroom_Red_01", 
        "dimensions": {
            "y": 0.567, 
            "x": 0.434918, 
            "z": 0.5022
        }
    }, 
    "Grey_Cliff_01": {
        "modelURL": "Grey_Cliff_01.fbx", 
        "name": "Grey_Cliff_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 0.78, 
            "z": 3.0
        }
    }, 
    "Fallen_Trunk_01": {
        "modelURL": "Fallen_Trunk_01.fbx", 
        "name": "Fallen_Trunk_01", 
        "dimensions": {
            "y": 0.7952, 
            "x": 2.19, 
            "z": 1.17505
        }
    }, 
    "Flower_Tall_Yellow_01": {
        "modelURL": "Flower_Tall_Yellow_01.fbx", 
        "name": "Flower_Tall_Yellow_01", 
        "dimensions": {
            "y": 0.54, 
            "x": 0.485926, 
            "z": 0.485926
        }
    }, 
    "Plate_River_Corner_01": {
        "modelURL": "Plate_River_Corner_01.fbx", 
        "name": "Plate_River_Corner_01", 
        "dimensions": {
            "y": 0.3, 
            "x": 3.0000000000006843, 
            "z": 3.0
        }
    }, 
    "Brown_Cliff_Top_01": {
        "modelURL": "Brown_Cliff_Top_01.fbx", 
        "name": "Brown_Cliff_Top_01", 
        "dimensions": {
            "y": 0.2900000000000007, 
            "x": 0.9199999999999999, 
            "z": 3.000000000000003
        }
    }, 
    "Grey_Cliff_Corner_Green_Top_01": {
        "modelURL": "Grey_Cliff_Corner_Green_Top_01.fbx", 
        "name": "Grey_Cliff_Corner_Green_Top_01", 
        "dimensions": {
            "y": 2.2, 
            "x": 0.78, 
            "z": 0.78
        }
    }, 
    "Wood_Fence_Broken_01": {
        "modelURL": "Wood_Fence_Broken_01.fbx", 
        "name": "Wood_Fence_Broken_01", 
        "dimensions": {
            "y": 1.1, 
            "x": 0.5, 
            "z": 3.0000000000000044
        }
    }, 
    "Wood_Fence_Gate_01": {
        "modelURL": "Wood_Fence_Gate_01.fbx", 
        "name": "Wood_Fence_Gate_01", 
        "dimensions": {
            "y": 1.1, 
            "x": 0.5, 
            "z": 3.0
        }
    }, 
    "Brown_Waterfall_01": {
        "modelURL": "Brown_Waterfall_01.fbx", 
        "name": "Brown_Waterfall_01", 
        "dimensions": {
            "y": 2.2, 
            "x": 3.0, 
            "z": 0.92
        }
    }, 
    "Tree_02": {
        "modelURL": "Tree_02.fbx", 
        "name": "Tree_02", 
        "dimensions": {
            "y": 3.1589080000000003, 
            "x": 1.18, 
            "z": 1.18
        }
    }, 
    "Grey_Cliff_Top_Corner_01": {
        "modelURL": "Grey_Cliff_Top_Corner_01.fbx", 
        "name": "Grey_Cliff_Top_Corner_01", 
        "dimensions": {
            "y": 0.29, 
            "x": 0.92, 
            "z": 0.9200000000000087
        }
    }, 
    "Flower_Yellow_02": {
        "modelURL": "Flower_Yellow_02.fbx", 
        "name": "Flower_Yellow_02", 
        "dimensions": {
            "y": 0.4, 
            "x": 0.485926, 
            "z": 0.485926
        }
    }, 
    "Flower_Yellow_01": {
        "modelURL": "Flower_Yellow_01.fbx", 
        "name": "Flower_Yellow_01", 
        "dimensions": {
            "y": 0.4, 
            "x": 0.485926, 
            "z": 0.485926
        }
    }, 
    "Trunk_Alt_02": {
        "modelURL": "Trunk_Alt_02.fbx", 
        "name": "Trunk_Alt_02", 
        "dimensions": {
            "y": 0.83, 
            "x": 0.967531, 
            "z": 0.80369
        }
    }, 
    "Flower_Tall_Yellow_02": {
        "modelURL": "Flower_Tall_Yellow_02.fbx", 
        "name": "Flower_Tall_Yellow_02", 
        "dimensions": {
            "y": 0.54, 
            "x": 0.485926, 
            "z": 0.485926
        }
    }, 
    "Tent_Poles_01": {
        "modelURL": "Tent_Poles_01.fbx", 
        "name": "Tent_Poles_01", 
        "dimensions": {
            "y": 2.85503, 
            "x": 3.0, 
            "z": 3.0
        }
    }, 
    "Flower_Tall_Red_01": {
        "modelURL": "Flower_Tall_Red_01.fbx", 
        "name": "Flower_Tall_Red_01", 
        "dimensions": {
            "y": 0.54, 
            "x": 0.485926, 
            "z": 0.485926
        }
    }, 
    "Brown_Cliff_Bottom_Green_Top_01": {
        "modelURL": "Brown_Cliff_Bottom_Green_Top_01.fbx", 
        "name": "Brown_Cliff_Bottom_Green_Top_01", 
        "dimensions": {
            "y": 2.2000000000000006, 
            "x": 1.1400000000000001, 
            "z": 3.000000000000003
        }
    }, 
    "Tall_Rock_1_01": {
        "modelURL": "Tall_Rock_1_01.fbx", 
        "name": "Tall_Rock_1_01", 
        "dimensions": {
            "y": 1.59, 
            "x": 1.22976, 
            "z": 1.42
        }
    }, 
    "Large_Oak_Fall_01": {
        "modelURL": "Large_Oak_Fall_01.fbx", 
        "name": "Large_Oak_Fall_01", 
        "dimensions": {
            "y": 4.60155, 
            "x": 3.02, 
            "z": 2.6154
        }
    }, 
    "Hanging_Moss_01": {
        "modelURL": "Hanging_Moss_01.fbx", 
        "name": "Hanging_Moss_01", 
        "dimensions": {
            "y": 1.3670856999999998, 
            "x": 0.0, 
            "z": 0.45666700000000005
        }
    }, 
    "Trunk_01": {
        "modelURL": "Trunk_01.fbx", 
        "name": "Trunk_01", 
        "dimensions": {
            "y": 0.83, 
            "x": 0.80369, 
            "z": 0.80369
        }
    }, 
    "Rock_1_01": {
        "modelURL": "Rock_1_01.fbx", 
        "name": "Rock_1_01", 
        "dimensions": {
            "y": 0.64, 
            "x": 1.18, 
            "z": 1.02191
        }
    }, 
    "Plate_River_Corner_Dirt_01": {
        "modelURL": "Plate_River_Corner_Dirt_01.fbx", 
        "name": "Plate_River_Corner_Dirt_01", 
        "dimensions": {
            "y": 0.3, 
            "x": 3.0000000000006843, 
            "z": 3.0
        }
    }, 
    "Plant_3_01": {
        "modelURL": "Plant_3_01.fbx", 
        "name": "Plant_3_01", 
        "dimensions": {
            "y": 0.696081, 
            "x": 1.14972, 
            "z": 1.09122
        }
    }, 
    "Plate_Grass_Dirt_01": {
        "modelURL": "Plate_Grass_Dirt_01.fbx", 
        "name": "Plate_Grass_Dirt_01", 
        "dimensions": {
            "y": 0.3, 
            "x": 3.0, 
            "z": 3.0
        }
    }, 
    "Plant_2_01": {
        "modelURL": "Plant_2_01.fbx", 
        "name": "Plant_2_01", 
        "dimensions": {
            "y": 0.63535, 
            "x": 0.750324, 
            "z": 0.750324
        }
    }, 
    "Rock_3_01": {
        "modelURL": "Rock_3_01.fbx", 
        "name": "Rock_3_01", 
        "dimensions": {
            "y": 0.68, 
            "x": 0.98, 
            "z": 0.848705
        }
    }, 
    "Tall_Rock_3_01": {
        "modelURL": "Tall_Rock_3_01.fbx", 
        "name": "Tall_Rock_3_01", 
        "dimensions": {
            "y": 1.97, 
            "x": 1.59349, 
            "z": 1.84
        }
    }, 
    "Large_Oak_Green_01": {
        "modelURL": "Large_Oak_Green_01.fbx", 
        "name": "Large_Oak_Green_01", 
        "dimensions": {
            "y": 4.60155, 
            "x": 3.02, 
            "z": 2.6154
        }
    }, 
    "Brown_Cliff_Corner_Green_Top_01": {
        "modelURL": "Brown_Cliff_Corner_Green_Top_01.fbx", 
        "name": "Brown_Cliff_Corner_Green_Top_01", 
        "dimensions": {
            "y": 2.2, 
            "x": 0.78, 
            "z": 0.78
        }
    }
};

var abbvToTile = {
    tr2: 'Tall_Rock_2_01',
    gcg: 'Grey_Cliff_Green_Top_01',
    gwf: 'Grey_Waterfall_Top_01',
    pg1: 'Plate_Grass_01',
    pr1: 'Plate_River_01',
    prc: 'Plate_River_Corner_01',

    bct: 'Brown_Cliff_Top_01',
    bcc: 'Brown_Cliff_Top_Corner_01',
    bwt: 'Brown_Waterfall_Top_01',

    gct: 'Grey_Cliff_Top_01',
    gcc: 'Grey_Cliff_Top_Corner_01',
    gwt: 'Grey_Waterfall_Top_01',

    _____: null
};

var abbvToRot = {
    0: Quat.fromPitchYawRollDegrees(0, 0, 0),
    1: Quat.fromPitchYawRollDegrees(0, 90, 0),
    2: Quat.fromPitchYawRollDegrees(0, 180, 0),
    3: Quat.fromPitchYawRollDegrees(0, 270, 0)
};

// pg - Plate_Grass_01
// pr - Plate_River_01
// prc - Plate_River

exports.generateTerrain = function(map) {
    console.log("bp: Generating terrain");
    var entities = [];
    var rows = map.length;
    var cols = map[0].length;
    for (var i = 0; i < rows; ++i) {
        var x = i * 3.0;
        for (var j = 0; j < cols; ++j) {
            var y = j * 3.0;
            var abbv = map[i][j].slice(0, 3);
            var bp = abbvToTile[abbv];
            var rotAbbv = map[i][j][4];
            var rotation = abbvToRot[rotAbbv];

            console.log("bp: ", x, y, abbv, bp);
            if (bp !== null) {
                var props = ASSETS[bp];
                var position = { x: x, y: -2, z: y };
                var xlt = props.dimensions.x < 3.0;
                var zlt = props.dimensions.z < 3.0;
                // if ((xlt && rotAbbv == 0) || (zlt && rotAbbv == 1)) {
                //     position.x -= props.dimensions.x / 2 - 1.5;
                // } else if ((xlt && rotAbbv == 2) || (zlt && rotAbbv == 3)) {
                //     position.x += props.dimensions.x / 2 - 1.5;
                // } else if ((xlt && rotAbbv == 1) || (zlt && rotAbbv == 0)) {
                //     position.z += props.dimensions.z / 2 - 1.5;
                // } else if ((xlt && rotAbbv == 3) || (zlt && rotAbbv == 2)) {
                //     position.z -= props.dimensions.z / 2 - 1.5;
                // }

                var offset = {
                    x: xlt ? -props.dimensions.x / 2 + 1.5 : 0,
                    y: 0,
                    z: zlt ? -props.dimensions.z / 2 + 1.5 : 0
                };
                offset = Vec3.multiplyQbyV(rotation, offset);

                position = Vec3.sum(position, offset);

                entities.push({
                    blueprint: bp,
                    position: position,
                    rotation: rotation
                });
            }
        }
    }
    return entities;
};

const TREES = ['Tree_01', 'Tree_02', 'Large_Oak_Fall_01', 'Large_Oak_Green_01',
               'Large_Oak_Dark_01', 'Oak_Green_01', 'Oak_Dark_01', 'Oak_Fall_01'];


for (var key in ASSETS) {
    var asset = ASSETS[key];
    asset.type = 'Model';
    //asset.dimensions = Vec3.multiply(40, asset.dimensions);
    asset.modelURL = BASE_URL + asset.modelURL;
    asset.shapeType = "Box";
    if (TREES.indexOf(key) > -1) {
        asset.dimensions = Vec3.multiply(0.6, asset.dimensions);
        asset.components = { flammable: {} };
    }
    registerBlueprint(key, asset);
}

exports.treeNames = TREES;
exports.assets = ASSETS;
