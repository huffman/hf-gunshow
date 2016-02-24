#!/usr/bin/env python

import fbx
import sys
import json
import ntpath

filepath = sys.argv[1]

def get_extents(path):
    manager = fbx.FbxManager.Create()

    importer = fbx.FbxImporter.Create(manager, 'model')

    status = importer.Initialize(path)

    if status == False:
        print 'error'
        return None

    scene = fbx.FbxScene.Create(manager, 'scene')

    importer.Import(scene)

    importer.Destroy()

    MAX_INT = 2 ** 32 - 1
    MIN_INT = -2 ** 32

    max_coords = [MIN_INT] * 3
    min_coords = [MAX_INT] * 3

    found = False
    for i in range(scene.GetGeometryCount()):
        g = scene.GetGeometry(i)
        if type(g) is fbx.FbxMesh:
            for i in range(g.GetControlPointsCount()):
                v = g.GetControlPointAt(i)
                for i in range(3):
                    max_coords[i] = max(max_coords[i], v[i])
                    min_coords[i] = min(min_coords[i], v[i])
            extents = [max_coords[i] - min_coords[i] for i in range(3)]
            found = True
        else:
            print('not mesh', g)
        #print [max_coords[i] - min_coords[i] for i in range(3)]


    scene.Destroy()

    if found:
        return [max_coords[i] - min_coords[i] for i in range(3)]

    return None

model_extents = {}
for i in range(1, len(sys.argv)):
    path = sys.argv[i]
    extents = get_extents(path)
    name = ntpath.basename(path)
    if name.lower().endswith('.fbx'):
        name = name[:-4]
    if extents:
        model_extents[name] = {
            'name': name,
            'modelURL': path,
            'dimensions': {
                'x': extents[0],
                'y': extents[1],
                'z': extents[2]
            }
        }
    else:
        print 'error reading file', path

print json.dumps(model_extents, indent=2)
