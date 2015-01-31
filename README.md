Instabart apps (Android and iOS)
==============

This is a Cordova based project that wraps the Instabart code into a native app.

## Getting started
-  Clone the app repository
  1. `git clone https://github.com/mortenvn/instabart-apps.git`

- Clone the [main instabart repository](https://github.com/mortenvn/instabart.git). This is the same repo that is used at instabart.no
  2. `cd instabart-apps`
  3. `git clone https://github.com/mortenvn/instabart.git www`

- From the www folder, install grunt dependencies and generate production code
  4. `cd www`
  5. `npm install`
  6. `npm install -g grunt-cli` (might need sudo)
  7. `grunt phone`

- Install the Cordova CLI, generate android and iOS projects and manually add custom app files
  7. `npm install -g cordova` (might need sudo)
  8. `cordova add platform android`
  9. `cordova add platform ios`
  10. For Android, manually update `AndroidManifest.xml` with the correct minSDKVersion. As of now, the proper value is `<uses-sdk android:minSdkVersion="14" android:targetSdkVersion="19" />`

## Test the app!
- **Test in emulator:** `cordova emulate [android|ios]`
- **Test using USB connected phone:** `cordova run [android|ios]`

## Updating the "www" files
As the [main project](https://github.com/mortenvn/instabart.git) evolves, the **www** files in the cordova project will have to be updated. Luckily, since we just cloned the project, getting the newest files is super easy.

From the **www** folder:

1. `grunt`
2. `git pull origin master`
3. `grunt phone`

## Generating production files
### Android
#### First time setup
First time you want to create a production .apk, do the following steps. By doing this you will be able to generate a release version of the APK, [sign it and zipalign it](http://developer.android.com/tools/publishing/app-signing.html) using just **one** command.

1. `cd PROJECT_ROOT/platforms/android`
2.  `touch ant.properties`
3.  Open the newly created **ant.properties** and add the following lines: 
   - `key.store=/PATH/TO/KEYSTORE`
   - `key.alias=instabart`

#### Normal rutine
1. Open `config.xml` and increment the **versionName** and **versionCode**
2. `git add config.xml && git commit -m "Something smart"`
3. Delete the `node_modules` folder from www. By doing this you reduce the app file size by approx. 20 MB.
4. `cordova build android --release`
5. Restore the `node_modules` folder

This will create a **Instabart-release.apk** file in the folder **platforms/android/ant-build**. We're done!

### iOS
#### First time setup
1. Install dependencies `sudo npm install -g ios-deploy` and
`sudo npm install -g ios-sim`
2. Click on `Instabart.xcodeproj` to open the project in Xcode
3. Select "Team" under General -> Identity ->
Team -> Morten V Noddeland (morten@noddeland.no)
4. Set "Code Signing under Build settings -> Code Signing -> Release -> "iPhone Distribution: Morten V Noddeland"

#### Normal rutine
1. Open `config.xml` and increment the **versionName** and **versionCode**
2. `git add config.xml && git commit -m "Something smart"`
3. Delete the `node_modules` folder from www. By doing this you reduce the app file size by approx. 20 MB.
4. Open project in Xcode, then click Product -> Archive
5. Restore the `node_modules` folder