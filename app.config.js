import 'dotenv/config'

export default {
  expo: {
    name: 'corebiz',
    slug: 'corebiz',
    version: '1.0.0',
    orientation: 'portrait',
    icon: './assets/icon.png',
    userInterfaceStyle: 'automatic',
    newArchEnabled: true,
    splash: {
      image: './assets/splash-icon.png',
      resizeMode: 'contain',
      backgroundColor: '#ffffff',
    },
    ios: {
      bundleIdentifier: 'com.corebiz.app',
      supportsTablet: true,
    },
    android: {
      adaptiveIcon: {
        package: 'com.seuprojeto.app',
        foregroundImage: './assets/adaptive-icon.png',
        backgroundColor: '#ffffff',
      },
    },
    web: {
      favicon: './assets/favicon.png',
    },
    extra: {
      unsplash: {
        apiUrl: process.env.UNSPLASH_APIURL,
        apiKey: process.env.UNSPLASH_APIKEY,
      },
      firebase: {
        apiKey: process.env.FIREBASE_APIKEY,
        authDomain: process.env.FIREBASE_AUTHDOMAIN,
        projectId: process.env.FIREBASE_PROJECTID,
        storageBucket: process.env.FIREBASE_STORAGEBUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGINGSENDERID,
        appId: process.env.FIREBASE_APPID,
      },
    },
    plugins: ['expo-font', 'expo-asset'],
  },
}
