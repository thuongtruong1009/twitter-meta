<div align="center">
  <h1 style="color:#00BFFF"><img src="https://br.atsit.in/vi/wp-content/uploads/2021/11/twitter-xem-xet-nguoi-dung-ghi-nhat-ky-loi-ngoai-iphone.png" width="40">twitter-meta</h1>
  <em style="color:purple">----------- A Quasar Framework app ----------</em>
</div>

## Preview

- [Demo web here](https://twitter-meta.vercel.app/#/)

<table>
  <tr>
    <th><a href="source/templates/markdown/README.md">🎪 home page</a></th>
    <th><a href="source/templates/terminal/README.md">🔍 explore page</a></th>
  </tr>
  <tr>
    <td align="center">
      <img alt="" width="400" src="/public/preview/home.jpg">
      <img width="900" height="1" alt="">
    </td>
    <td align="center">
      <img alt="" width="400" src="/public/preview/explore.jpg">
      <img width="900" height="1" alt="">
    </td>
  </tr>
  <tr>
    <th><a href="source/templates/markdown/README.md">📄 messages page</a></th>
    <th><a href="source/templates/terminal/README.md">🏷 profile page</a></th>
  </tr>
  <tr>
    <td align="center">
      <img alt="" width="400" src="/public/preview/messages.jpg">
      <img width="900" height="1" alt="">
    </td>
    <td align="center">
      <img alt="" width="400" src="/public/preview/profile.jpg">
      <img width="900" height="1" alt="">
    </td>
  </tr>
  <tr>
    <th><a href="source/templates/markdown/README.md">⚙ more tab</a></th>
    <th><a href="source/templates/terminal/README.md">📳 responsive page</a></th>
  </tr>
  <tr>
    <td align="center">
      <img alt="" width="400" src="/public/preview/more.jpg">
      <img width="900" height="1" alt="">
    </td>
    <td align="center">
      <img alt="" width="400" src="/public/preview/responsive.jpg">
      <img width="900" height="1" alt="">
    </td>
  </tr>
</table>

## Feature and Plugin CLI

- [Quasar](https://quasar.dev/): strong tool for build web app & mobile app
- [Firebase](https://firebase.google.com/) and [Firestore](https://firebase.google.com/docs/firestore): realtime database using no-sql
- [Electron for Quasar](https://quasar.dev/quasar-cli/developing-electron-apps/introduction): preview for desktop application
- [Cordova for Quasar](https://quasar.dev/quasar-cli/developing-cordova-apps/introduction): preview for mobile apllication

### Customize the configuration

- See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).
- Prefix [size of electron browser](https://www.electronjs.org/docs/latest/api/browser-window).
* Format the time using [date formatter](https://date-fns.org/docs/Getting-Started).
* Get component style [animation](https://animate.style/).
* Style config [editorconfig](https://editorconfig.org/).
* Download [virtualbox](https://www.virtualbox.org/wiki/Downloads).

## Tutorial & Practice

<mark>you should follow step-by-step order clearly</mark>

### Clone to local

```bash
# star this repo and open the terminal
git clone https//github.com/vue-core/twitter-meta.git
```

### Install the dependencies

```bash
npm install
# you need globaly install through npm install -g @quasar/cli
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Build the app for production

```bash
quasar build
```

### Install firebase

```bash
npm install firebase
```

### Install boot file

```bash
quasar new boot firebase
------------------------
quasar.conf.js -> boot:['firebase']
```

### Preview as Electron destop app on Window/Mac

- In this scenerio, I resume that I buiding on main-opartion is MacOS & building on sub-operation by virtual machine

```bash
View in main-operation -> quasar dev -m electron
-> src-electron/electron-main.js
mainWindow = new BrowserWindow({
    width: 1024,
    minWidth: 1024,
    height: 600,
})
-------------------------------------------------
View in sub-operation -> quasar build -m electron
-> quasar.conf.js
electron: {
    packager: {
        platform: 'win32'
    },
}
open the path /dist/electron/Twitter.exe on virtual machine
```

### Preview as iOS/Android mobile application with Cordova

```bash
npm install -g cordova
-----------------------
For iOS
require: xcodebuild
local build: quasar dev -m cordova -T ios

switching to iOS WkWebView (cd src-cordova):
# add ScrollEnabled-Preference to Config.xml
<platform name="ios">
  <preference name="ScrollEnabled" value="true" />
</platform>

# install Ionic-Webview-plugin
cordova plugin add cordova-plugin-ionic-webview
# check type_list
cordova run ios --list
cd ..
quasar dev -m cordova -T ios -e <type_list>
--------------------------------------------
For Android
require: android studio
config: AVD manager
connect: pixel 2, ect... (that available)
local build: quasar dev -m cordova -T android
```

## Reference

- Relax with [bee-music sound](https://github.com/thuongtruong1009/bee-music)
- Learning front-end web full course at [Front-end course](https://github.com/thuongtruong1009/challenge-resposive-web-design).
- Learn Snake Game tutorial at [Snake-Game-OOP](https://github.com/thuongtruong1009/Snake-Game-OOP)
- Learn Java for new beginner at [Java training](https://github.com/thuongtruong1009/java-oop-training)
- Make flip card game at [flip-card](https://github.com/thuongtruong1009/flip-cards)
- Learn computer architecture at [architecture](https://github.com/thuongtruong1009/computer-architecture)
- Pratice UI/UX at [league-fo-legend](https://github.com/thuongtruong1009/league-of-legends-clone)

## ❤️ [Support me](https://www.paypal.me/thuongtruong1009)

> We are looking for sponsors to join us to have better community reach and impact.

[![MOMO](https://img.shields.io/badge/-MOMO-red?style=flat&labelColor=RED&logo=MOMO&logoColor=black)](https://nhantien.momo.vn/0917085937)
<a href="https://www.paypal.me/thuongtruong1009">
<img height="25" marginTop="10" src="https://www.paypalobjects.com/digitalassets/c/website/marketing/apac/C2/logos-buttons/optimize/26_Blue_PayPal_Pill_Button.png">
</a>
<a href='https://ko-fi.com/thuongtruong1009' target='_blank'>
<img height='25' style='border:0px;height:28px;color:blue' src='https://az743702.vo.msecnd.net/cdn/kofi3.png?v=0' border='0' alt='Buy Me a Coffee at ko-fi.com' />
</a>

## 📰 [License](LICENSE)

- ##### This project is distributed under the [MIT License](LICENSE).
- ##### Copyright of [@thuongtruong1009](https://github.com/thuongtruong1009), 2022.
