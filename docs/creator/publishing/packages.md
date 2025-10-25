---
sidebar_position: 4
---

# Packages

## Packages vs Products

By Uni-VCC's definition, these are two disctinct entities;

Package is what people see when searching for assets. It has name, summary and a list of linked products.

Product is a link between package on Uni-VCC and third-party service.

## Creation

In your [Published Packages](https://uni-vcc.app/dash/my-packages) tab, click `New Package...`

You'll see a few required fields you must fill out before creating the package:

- Package Name: Self-explanatory. This name is displayed in the package browser.
- Package ID: This is a little trickier to explain. 
  - If you don't own a domain, just stick to `myname.myavatar` syntax. For example: `zeith.uno-card`.
  - If you own a domain, however, you can do something more interesting. For example: domain of `zeith.dev` can be used, assume we have `uno-card` subdomain (so `uno-card.zeith.dev`), the package ID in this case would be `dev.zeith.uno-card`.
- Package Type: Dropdown with a few options:
  - Avatar: Your package is an avatar. It provides a `VRCAvatarDescriptor` component.
  - Avatar Edit: Your package is a modified version of an avatar. This is not yet implemented.
  - Avatar Addon: Your package is an addon for a specific avatar. It could be something like clothes that can only fit one specific avatar.
  - Universal Addon: Your package is a prefab that can be installed onto any avatar.
After you've filled everything out, you can create the package.

## Editing

Once you've created a package, you can click into it, and edit it's basic details.

You'll also see the `List this Package` section, which will be unlisted by default.

Once you have everything linked together, you can list the package.

## Package Distributables

Your package may have one or more version available to be activated by the end user.

Navigate to `Distributables` tab on the top, and create a new variant of your package!

You'll need at least one variant.

The name will be displayed to the users viewing package's page, so pick the name carefully!

The Sub-Id can be either empty (if you have just one version that's perfectly fine), or a lowercase suffix.

## Product Linking

Before publishing a package, you will have to connect your distributable to at least one product for it to be obtainable.

Click on `Link To Product` in your distributable editor, wait for it to load (it usually takes a few seconds to load).

Choose a platform, find a correct product, expand it and select the version of the product that you want to link to by clicking on `Use this Product` button.

![](./img/product-link.png)

If everything goes okay, you will see the product links appear on the right sidebar of the package editor.

You can also choose a thumbnail from a similar popup by clicking on `Select Thumbnail` button inside the package overview. It will not show products without a thumbnail image.

## Age rating

All tags imply their age rating, and the highest one will be taken when evaluating age rating of your package.

If the tags don't offer the suitable age rating, consider using `mature` or `adult` tags to manually set the content rating.

## Versions

In the distributable editor, you'll see `Versions` tab. Upon opening it, you'll see an `Upload...` button and list of versions you have uploaded to Uni-VCC with a search bar.

Uploading a new version consists of three steps:
- Selecting and uploading .unitypackage file
- Filling out version information:
  :::info
  The version information you put is saved in your browser, making subsequent updates quicker to fill out.
  :::
  - Version (ex. `1.0.0`, `>=1.4.0`, `^3.x` etc)
  - Unity (2019.4, 2022.3 etc)
  - Dependencies: list of dependencies with minimal supported versions.
    *Here are a few common dependencies you might want to use:*
    - `com.vrchat.avatars` - VRChat SDK for avatars
    - `com.vrcfury.vrcfury` - VRCFury
    - `com.poiyomi.toon` - Poiyomi Toon

Version search queries the versions by their display name (ex. `1.0.0`)

### Semver

Following the versions may be a little overwhelming, so here's a quick rundown of what you should specify:

- Exact version (ex. `1.2.5`) - this matches this version only.
- Versions until (ex. `<4.2`) - this matches any version prior to the specified version.
- Versions after (ex. `>=3.0.0`) - this matches any version after the specified version or the specified version itself.
- Versions compatible with (ex. `^3.x`) - this matches any version compatible with any v3. Versions like 2.9.9 or 4.0.0 will not match.