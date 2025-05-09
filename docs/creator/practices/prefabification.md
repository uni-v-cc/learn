---
sidebar_position: 1
---

# Prefabification

This is one of the most important tips, and is a requirement to publish assets on Uni-V.CC.

Keep your assets as prefabs and/or prefab variants!

For example: You have a model (FBX), and also add a bunch of things using VRCFury ontop inside the scene.

Think of something like this:

![](./img/pf/scene1.png)

You can easily turn it into prefabs by grabbing the object inside the hierarchy (would be `Main Version` and `Alt Version` objects on the screenshot above) and dragging them into the folder (where `Avatar Main Mesh`, `Avatar Data` and `Demo Scene` are on the screenshot)

This would turn the asset into a prefab file which contains all the additions ontop of the FBX.

Now you might build more versions ontop of that prefab (for example, tweaking blendshapes), and drag that again into the files. A menu will pop up asking if you want to make a new prefab, or a variant. In these cases you'd most likely want to create a variant.

This way you can have three prefab layers:
1. The FBX file itself
2. Basic features (Gestures, Custom animations, GoGoLoco etc)
3. Custom versions (Male/Female, Body shapes etc)

And best part is when you edit the second layer, the changes will propagate downstream to all end-user prefabs.