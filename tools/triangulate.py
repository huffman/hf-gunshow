#!/usr/bin/env python

import fbx
import sys
import json
import ntpath

filepath = sys.argv[1]

def triangulate(path):
    manager = fbx.FbxManager.Create()

    importer = fbx.FbxImporter.Create(manager, 'model')

    status = importer.Initialize(path)

    if status == False:
        print '\tError opening file'
        return False

    scene = fbx.FbxScene.Create(manager, 'scene')

    importer.Import(scene)

    importer.Destroy()

    converter = fbx.FbxGeometryConverter(manager)

    success = converter.Triangulate(scene, True)

    if success:
        exporter = fbx.FbxExporter.Create(manager, 'model')
        exporter.Initialize(path)
        return exporter.Export(scene)

model_extents = {}
for i in range(1, len(sys.argv)):
    path = sys.argv[i]
    print("Triangulating", path)
    if triangulate(path):
        print("\tSuccess!")
    else:
        print("\tError triangulating")
