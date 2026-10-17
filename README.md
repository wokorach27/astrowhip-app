ASTROWHIP app package

BEFORE YOU START (both options)
Open index.html and set WHATSAPP (your number, digits only, country code first), your address, handles, real prices and product list.
For the Android project the file is android-project/app/src/main/assets/index.html. For the web app it is pwa/index.html.
Product photos live in the images folder next to index.html. To add a product, copy its photo into images in BOTH places and add a line to PRODUCTS.

OPTION A: install as an app now (PWA)
1. Upload the whole pwa folder (including images and icons) to free HTTPS hosting (Netlify Drop, GitHub Pages or Cloudflare Pages).
2. Open the link in Chrome on Android, tap the menu, then Install app (or Add to Home screen).
3. ASTROWHIP appears on the home screen with the planet icon and opens full screen.

OPTION B: real APK (Android Studio)
1. Install Android Studio and open the android-project folder.
2. Let it sync, then Build > Build Bundle(s) / APK(s) > Build APK(s).
3. The APK is in app/build/outputs/apk/debug/app-debug.apk. Send it by WhatsApp or install it by USB.
4. For Google Play: Build > Generate Signed Bundle / APK and keep your keystore file safe.

OPTION C: APK from the hosted PWA without Android Studio
After Option A, paste your hosted link into pwabuilder.com and download the Android package.
