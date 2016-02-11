print('require:: in nature', exports);
print('require:: in utils', global.exports);
const BASE_URL = "http://localhost:8000/assets/kenney/";

var ASSETS = {
  "Tall_Rock_2_01": {
    "modelURL": "naturePack/Tall_Rock_2_01.fbx",
    "name": "Tall_Rock_2_01",
    "dimensions": {
      "y": 2.17,
      "x": 1.17779,
      "z": 10.88
    }
  },
  "Grey_Cliff_Green_Top_01": {
    "modelURL": "naturePack/Grey_Cliff_Green_Top_01.fbx",
    "name": "Grey_Cliff_Green_Top_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 2.74,
      "z": 24.0
    }
  },
  "Grey_Waterfall_Top_01": {
    "modelURL": "naturePack/Grey_Waterfall_Top_01.fbx",
    "name": "Grey_Waterfall_Top_01",
    "dimensions": {
      "y": 0.29000000000000575,
      "x": 3.86,
      "z": 24.000000000000007
    }
  },
  "Grey_Cliff_Top_01": {
    "modelURL": "naturePack/Grey_Cliff_Top_01.fbx",
    "name": "Grey_Cliff_Top_01",
    "dimensions": {
      "y": 0.29000000000000575,
      "x": 3.86,
      "z": 24.000000000000004
    }
  },
  "Tree_01": {
    "modelURL": "naturePack/Tree_01.fbx",
    "name": "Tree_01",
    "dimensions": {
      "y": 7.183704,
      "x": 1.9554816,
      "z": 10.3656
    }
  },
  "Grey_Cliff_Corner_01": {
    "modelURL": "naturePack/Grey_Cliff_Corner_01.fbx",
    "name": "Grey_Cliff_Corner_01",
    "dimensions": {
      "y": 2.2,
      "x": 0.78,
      "z": 6.24
    }
  },
  "Large_Oak_Dark_01": {
    "modelURL": "naturePack/Large_Oak_Dark_01.fbx",
    "name": "Large_Oak_Dark_01",
    "dimensions": {
      "y": 4.60155,
      "x": 3.02,
      "z": 20.9232
    }
  },
  "Mushroom_Tall_01": {
    "modelURL": "naturePack/Mushroom_Tall_01.fbx",
    "name": "Mushroom_Tall_01",
    "dimensions": {
      "y": 0.787,
      "x": 0.434918,
      "z": 4.0176
    }
  },
  "Rock_6_01": {
    "modelURL": "naturePack/Rock_6_01.fbx",
    "name": "Rock_6_01",
    "dimensions": {
      "y": 0.34,
      "x": 1.0,
      "z": 8.0
    }
  },
  "Oak_Green_01": {
    "modelURL": "naturePack/Oak_Green_01.fbx",
    "name": "Oak_Green_01",
    "dimensions": {
      "y": 4.9335,
      "x": 1.57617,
      "z": 14.56
    }
  },
  "Flower_Red_01": {
    "modelURL": "naturePack/Flower_Red_01.fbx",
    "name": "Flower_Red_01",
    "dimensions": {
      "y": 0.4,
      "x": 0.485926,
      "z": 3.887408
    }
  },
  "Brown_Cliff_Bottom_Corner_Green_Top_01": {
    "modelURL": "naturePack/Brown_Cliff_Bottom_Corner_Green_Top_01.fbx",
    "name": "Brown_Cliff_Bottom_Corner_Green_Top_01",
    "dimensions": {
      "y": 2.2,
      "x": 1.14,
      "z": 9.12
    }
  },
  "Wood_Fence_01": {
    "modelURL": "naturePack/Wood_Fence_01.fbx",
    "name": "Wood_Fence_01",
    "dimensions": {
      "y": 1.1,
      "x": 0.5,
      "z": 24.0
    }
  },
  "Grey_Cliff_End_01": {
    "modelURL": "naturePack/Grey_Cliff_End_01.fbx",
    "name": "Grey_Cliff_End_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 5.62,
      "z": 24.0
    }
  },
  "Rock_4_01": {
    "modelURL": "naturePack/Rock_4_01.fbx",
    "name": "Rock_4_01",
    "dimensions": {
      "y": 0.53,
      "x": 1.0,
      "z": 8.0
    }
  },
  "Mushroom_Brown_01": {
    "modelURL": "naturePack/Mushroom_Brown_01.fbx",
    "name": "Mushroom_Brown_01",
    "dimensions": {
      "y": 0.353484,
      "x": 0.434918,
      "z": 4.0176
    }
  },
  "Grey_Cliff_Bottom_Corner_01": {
    "modelURL": "naturePack/Grey_Cliff_Bottom_Corner_01.fbx",
    "name": "Grey_Cliff_Bottom_Corner_01",
    "dimensions": {
      "y": 2.2,
      "x": 1.14,
      "z": 9.12
    }
  },
  "Brown_Cliff_End_Green_Top_01": {
    "modelURL": "naturePack/Brown_Cliff_End_Green_Top_01.fbx",
    "name": "Brown_Cliff_End_Green_Top_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 5.62,
      "z": 24.0
    }
  },
  "Grey_Waterfall_01": {
    "modelURL": "naturePack/Grey_Waterfall_01.fbx",
    "name": "Grey_Waterfall_01",
    "dimensions": {
      "y": 2.2,
      "x": 3.0,
      "z": 7.36
    }
  },
  "Plate_Grass_01": {
    "modelURL": "naturePack/Plate_Grass_01.fbx",
    "name": "Plate_Grass_01",
    "dimensions": {
      "y": 0.3,
      "x": 3.0,
      "z": 24.0
    }
  },
  "Trunk_Alt_01": {
    "modelURL": "naturePack/Trunk_Alt_01.fbx",
    "name": "Trunk_Alt_01",
    "dimensions": {
      "y": 0.83,
      "x": 2.1144179999999997,
      "z": 6.42952
    }
  },
  "Brown_Cliff_End_01": {
    "modelURL": "naturePack/Brown_Cliff_End_01.fbx",
    "name": "Brown_Cliff_End_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 5.62,
      "z": 24.0
    }
  },
  "Grey_Cliff_End_Green_Top_01": {
    "modelURL": "naturePack/Grey_Cliff_End_Green_Top_01.fbx",
    "name": "Grey_Cliff_End_Green_Top_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 5.62,
      "z": 24.0
    }
  },
  "Rock_5_01": {
    "modelURL": "naturePack/Rock_5_01.fbx",
    "name": "Rock_5_01",
    "dimensions": {
      "y": 0.49,
      "x": 1.0,
      "z": 8.0
    }
  },
  "Brown_Cliff_Green_Top_01": {
    "modelURL": "naturePack/Brown_Cliff_Green_Top_01.fbx",
    "name": "Brown_Cliff_Green_Top_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 2.74,
      "z": 24.0
    }
  },
  "Brown_Cliff_Top_Corner_01": {
    "modelURL": "naturePack/Brown_Cliff_Top_Corner_01.fbx",
    "name": "Brown_Cliff_Top_Corner_01",
    "dimensions": {
      "y": 0.29,
      "x": 0.92,
      "z": 7.360000000000009
    }
  },
  "Brown_Cliff_01": {
    "modelURL": "naturePack/Brown_Cliff_01.fbx",
    "name": "Brown_Cliff_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 2.74,
      "z": 24.0
    }
  },
  "Plate_River_Dirt_01": {
    "modelURL": "naturePack/Plate_River_Dirt_01.fbx",
    "name": "Plate_River_Dirt_01",
    "dimensions": {
      "y": 0.3,
      "x": 3.0,
      "z": 24.0
    }
  },
  "Oak_Dark_01": {
    "modelURL": "naturePack/Oak_Dark_01.fbx",
    "name": "Oak_Dark_01",
    "dimensions": {
      "y": 4.9335,
      "x": 1.57617,
      "z": 14.56
    }
  },
  "Grey_Cliff_Bottom_Green_Top_01": {
    "modelURL": "naturePack/Grey_Cliff_Bottom_Green_Top_01.fbx",
    "name": "Grey_Cliff_Bottom_Green_Top_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 5.62,
      "z": 24.0
    }
  },
  "Campfire_01": {
    "modelURL": "naturePack/Campfire_01.fbx",
    "name": "Campfire_01",
    "dimensions": {
      "y": 0.05550000000000001,
      "x": 0.699329,
      "z": 5.594632
    }
  },
  "Trunk_02": {
    "modelURL": "naturePack/Trunk_02.fbx",
    "name": "Trunk_02",
    "dimensions": {
      "y": 0.83,
      "x": 0.80369,
      "z": 6.42952
    }
  },
  "Brown_Cliff_Corner_01": {
    "modelURL": "naturePack/Brown_Cliff_Corner_01.fbx",
    "name": "Brown_Cliff_Corner_01",
    "dimensions": {
      "y": 2.2,
      "x": 0.78,
      "z": 6.24
    }
  },
  "Plate_River_01": {
    "modelURL": "naturePack/Plate_River_01.fbx",
    "name": "Plate_River_01",
    "dimensions": {
      "y": 0.3,
      "x": 3.0,
      "z": 24.0
    }
  },
  "Brown_Cliff_Bottom_01": {
    "modelURL": "naturePack/Brown_Cliff_Bottom_01.fbx",
    "name": "Brown_Cliff_Bottom_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 5.62,
      "z": 24.0
    }
  },
  "Rock_2_01": {
    "modelURL": "naturePack/Rock_2_01.fbx",
    "name": "Rock_2_01",
    "dimensions": {
      "y": 0.71,
      "x": 1.0,
      "z": 6.9282
    }
  },
  "Grey_Cliff_Bottom_01": {
    "modelURL": "naturePack/Grey_Cliff_Bottom_01.fbx",
    "name": "Grey_Cliff_Bottom_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 5.62,
      "z": 24.0
    }
  },
  "Water_lily_01": {
    "modelURL": "naturePack/Water_lily_01.fbx",
    "name": "Water_lily_01",
    "dimensions": {
      "y": 0.1,
      "x": 0.562819,
      "z": 4.939592
    }
  },
  "Grass_01": {
    "modelURL": "naturePack/Grass_01.fbx",
    "name": "Grass_01",
    "dimensions": {
      "y": 0.395,
      "x": 0.725,
      "z": 5.8
    }
  },
  "Brown_Cliff_Bottom_Corner_01": {
    "modelURL": "naturePack/Brown_Cliff_Bottom_Corner_01.fbx",
    "name": "Brown_Cliff_Bottom_Corner_01",
    "dimensions": {
      "y": 2.2,
      "x": 1.14,
      "z": 9.12
    }
  },
  "Oak_Fall_01": {
    "modelURL": "naturePack/Oak_Fall_01.fbx",
    "name": "Oak_Fall_01",
    "dimensions": {
      "y": 4.9335,
      "x": 1.57617,
      "z": 14.56
    }
  },
  "Brown_Waterfall_Top_01": {
    "modelURL": "naturePack/Brown_Waterfall_Top_01.fbx",
    "name": "Brown_Waterfall_Top_01",
    "dimensions": {
      "y": 0.29000000000000575,
      "x": 3.86,
      "z": 24.000000000000007
    }
  },
  "Plant_1_01": {
    "modelURL": "naturePack/Plant_1_01.fbx",
    "name": "Plant_1_01",
    "dimensions": {
      "y": 0.65119,
      "x": 0.569151,
      "z": 4.553208
    }
  },
  "Tent_01": {
    "modelURL": "naturePack/Tent_01.fbx",
    "name": "Tent_01",
    "dimensions": {
      "y": 2.85503,
      "x": 3.0,
      "z": 24.0
    }
  },
  "Grey_Cliff_Bottom_Corner_Green_Top_01": {
    "modelURL": "naturePack/Grey_Cliff_Bottom_Corner_Green_Top_01.fbx",
    "name": "Grey_Cliff_Bottom_Corner_Green_Top_01",
    "dimensions": {
      "y": 2.2,
      "x": 1.14,
      "z": 9.12
    }
  },
  "Mushroom_Red_01": {
    "modelURL": "naturePack/Mushroom_Red_01.fbx",
    "name": "Mushroom_Red_01",
    "dimensions": {
      "y": 0.567,
      "x": 0.434918,
      "z": 4.0176
    }
  },
  "Grey_Cliff_01": {
    "modelURL": "naturePack/Grey_Cliff_01.fbx",
    "name": "Grey_Cliff_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 2.74,
      "z": 24.0
    }
  },
  "Fallen_Trunk_01": {
    "modelURL": "naturePack/Fallen_Trunk_01.fbx",
    "name": "Fallen_Trunk_01",
    "dimensions": {
      "y": 0.7952,
      "x": 2.19,
      "z": 9.4004
    }
  },
  "Flower_Tall_Yellow_01": {
    "modelURL": "naturePack/Flower_Tall_Yellow_01.fbx",
    "name": "Flower_Tall_Yellow_01",
    "dimensions": {
      "y": 0.54,
      "x": 0.485926,
      "z": 3.887408
    }
  },
  "Plate_River_Corner_01": {
    "modelURL": "naturePack/Plate_River_Corner_01.fbx",
    "name": "Plate_River_Corner_01",
    "dimensions": {
      "y": 0.3,
      "x": 3.000000000005475,
      "z": 24.0
    }
  },
  "Brown_Cliff_Top_01": {
    "modelURL": "naturePack/Brown_Cliff_Top_01.fbx",
    "name": "Brown_Cliff_Top_01",
    "dimensions": {
      "y": 0.29000000000000575,
      "x": 3.86,
      "z": 24.000000000000004
    }
  },
  "Grey_Cliff_Corner_Green_Top_01": {
    "modelURL": "naturePack/Grey_Cliff_Corner_Green_Top_01.fbx",
    "name": "Grey_Cliff_Corner_Green_Top_01",
    "dimensions": {
      "y": 2.2,
      "x": 0.78,
      "z": 6.24
    }
  },
  "Wood_Fence_Broken_01": {
    "modelURL": "naturePack/Wood_Fence_Broken_01.fbx",
    "name": "Wood_Fence_Broken_01",
    "dimensions": {
      "y": 1.1,
      "x": 0.5,
      "z": 24.000000000000004
    }
  },
  "Wood_Fence_Gate_01": {
    "modelURL": "naturePack/Wood_Fence_Gate_01.fbx",
    "name": "Wood_Fence_Gate_01",
    "dimensions": {
      "y": 1.1,
      "x": 0.5,
      "z": 24.0
    }
  },
  "Brown_Waterfall_01": {
    "modelURL": "naturePack/Brown_Waterfall_01.fbx",
    "name": "Brown_Waterfall_01",
    "dimensions": {
      "y": 2.2,
      "x": 3.0,
      "z": 7.36
    }
  },
  "Tree_02": {
    "modelURL": "naturePack/Tree_02.fbx",
    "name": "Tree_02",
    "dimensions": {
      "x": 0.01,
      "y": 0.03,
      "z": 0.01
    }
  },
  "Grey_Cliff_Top_Corner_01": {
    "modelURL": "naturePack/Grey_Cliff_Top_Corner_01.fbx",
    "name": "Grey_Cliff_Top_Corner_01",
    "dimensions": {
      "y": 0.29,
      "x": 0.92,
      "z": 7.360000000000009
    }
  },
  "Flower_Yellow_02": {
    "modelURL": "naturePack/Flower_Yellow_02.fbx",
    "name": "Flower_Yellow_02",
    "dimensions": {
      "y": 0.4,
      "x": 0.485926,
      "z": 3.887408
    }
  },
  "Flower_Yellow_01": {
    "modelURL": "naturePack/Flower_Yellow_01.fbx",
    "name": "Flower_Yellow_01",
    "dimensions": {
      "y": 0.4,
      "x": 0.485926,
      "z": 3.887408
    }
  },
  "Trunk_Alt_02": {
    "modelURL": "naturePack/Trunk_Alt_02.fbx",
    "name": "Trunk_Alt_02",
    "dimensions": {
      "y": 0.83,
      "x": 2.1144179999999997,
      "z": 6.42952
    }
  },
  "Flower_Tall_Yellow_02": {
    "modelURL": "naturePack/Flower_Tall_Yellow_02.fbx",
    "name": "Flower_Tall_Yellow_02",
    "dimensions": {
      "y": 0.54,
      "x": 0.485926,
      "z": 3.887408
    }
  },
  "Tent_Poles_01": {
    "modelURL": "naturePack/Tent_Poles_01.fbx",
    "name": "Tent_Poles_01",
    "dimensions": {
      "y": 2.85503,
      "x": 3.0,
      "z": 24.0
    }
  },
  "Flower_Tall_Red_01": {
    "modelURL": "naturePack/Flower_Tall_Red_01.fbx",
    "name": "Flower_Tall_Red_01",
    "dimensions": {
      "y": 0.54,
      "x": 0.485926,
      "z": 3.887408
    }
  },
  "Brown_Cliff_Bottom_Green_Top_01": {
    "modelURL": "naturePack/Brown_Cliff_Bottom_Green_Top_01.fbx",
    "name": "Brown_Cliff_Bottom_Green_Top_01",
    "dimensions": {
      "y": 2.2000000000000046,
      "x": 5.62,
      "z": 24.000000000000004
    }
  },
  "Tall_Rock_1_01": {
    "modelURL": "naturePack/Tall_Rock_1_01.fbx",
    "name": "Tall_Rock_1_01",
    "dimensions": {
      "y": 1.59,
      "x": 1.22976,
      "z": 11.36
    }
  },
  "Large_Oak_Fall_01": {
    "modelURL": "naturePack/Large_Oak_Fall_01.fbx",
    "name": "Large_Oak_Fall_01",
    "dimensions": {
      "y": 4.60155,
      "x": 3.02,
      "z": 20.9232
    }
  },
  "Hanging_Moss_01": {
    "modelURL": "naturePack/Hanging_Moss_01.fbx",
    "name": "Hanging_Moss_01",
    "dimensions": {
      "y": 0.9266855999999999,
      "x": 0.0,
      "z": 4.866667
    }
  },
  "Trunk_01": {
    "modelURL": "naturePack/Trunk_01.fbx",
    "name": "Trunk_01",
    "dimensions": {
      "y": 0.83,
      "x": 0.80369,
      "z": 6.42952
    }
  },
  "Rock_1_01": {
    "modelURL": "naturePack/Rock_1_01.fbx",
    "name": "Rock_1_01",
    "dimensions": {
      "y": 0.64,
      "x": 1.18,
      "z": 8.17528
    }
  },
  "Plate_River_Corner_Dirt_01": {
    "modelURL": "naturePack/Plate_River_Corner_Dirt_01.fbx",
    "name": "Plate_River_Corner_Dirt_01",
    "dimensions": {
      "y": 0.3,
      "x": 3.000000000005475,
      "z": 24.0
    }
  },
  "Plant_3_01": {
    "modelURL": "naturePack/Plant_3_01.fbx",
    "name": "Plant_3_01",
    "dimensions": {
      "y": 0.696081,
      "x": 1.14972,
      "z": 8.72976
    }
  },
  "Plate_Grass_Dirt_01": {


    "modelURL": "naturePack/Plate_Grass_Dirt_01.fbx",
    "name": "Plate_Grass_Dirt_01",
    "dimensions": {
      "y": 0.3,
      "x": 3.0,
      "z": 24.0
    }
  },
  "Plant_2_01": {
    "modelURL": "naturePack/Plant_2_01.fbx",
    "name": "Plant_2_01",
    "dimensions": {
      "y": 0.63535,
      "x": 0.750324,
      "z": 6.002592
    }
  },
  "Rock_3_01": {
    "modelURL": "naturePack/Rock_3_01.fbx",
    "name": "Rock_3_01",
    "dimensions": {
      "y": 0.68,
      "x": 0.98,
      "z": 6.78964
    }
  },
  "Tall_Rock_3_01": {
    "modelURL": "naturePack/Tall_Rock_3_01.fbx",
    "name": "Tall_Rock_3_01",
    "dimensions": {
      "y": 1.97,
      "x": 1.59349,
      "z": 14.72
    }
  },
  "Large_Oak_Green_01": {
    "modelURL": "naturePack/Large_Oak_Green_01.fbx",
    "name": "Large_Oak_Green_01",
    "dimensions": {
      "y": 4.60155,
      "x": 3.02,
      "z": 20.9232
    }
  },
  "Brown_Cliff_Corner_Green_Top_01": {
    "modelURL": "naturePack/Brown_Cliff_Corner_Green_Top_01.fbx",
    "name": "Brown_Cliff_Corner_Green_Top_01",
    "dimensions": {
      "y": 2.2,
      "x": 0.78,
      "z": 6.24
    }
  }
}

for (var key in ASSETS) {
    var asset = ASSETS[key];
    asset.type = 'Model';
    asset.dimensions = Vec3.multiply(40, asset.dimensions);
    asset.modelURL = BASE_URL + asset.modelURL;
}

exports.assets = ASSETS;
