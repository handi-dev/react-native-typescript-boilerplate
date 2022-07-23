# react-native-typescript-boilerplate-template 2022 
[![npm](https://img.shields.io/npm/v/@handidev/react-native-boilerplate)](https://www.npmjs.com/package/@handidev/react-native-typescript-boilerplate)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## What is React Native Typescript Boilerplate

It is a template that you can clone and reuse for every project. It is starting point for React Native application.

## React Native Typescript Boilerplate ( 0.69.1 )

consist of:

- react-native": "0.69.1"
- "@react-native-masked-view/masked-view": "^0.2.7",
- "@react-navigation/bottom-tabs": "^6.3.2",
- "@react-navigation/material-top-tabs": "^6.2.2",
- "@react-navigation/native": "^6.0.11",
- "@react-navigation/native-stack": "^6.7.0",
- "@react-navigation/stack": "^6.2.2",
- "@reduxjs/toolkit": "^1.8.3",
- "react": "18.0.0",
- "react-native-gesture-handler": "^2.5.0",
- "react-native-pager-view": "^5.4.25",
- "react-native-safe-area-context": "^4.3.1",
- "react-native-screens": "^3.15.0",
- "react-native-tab-view": "^3.1.1",
- "react-native-vector-icons": "^9.2.0",
- "react-redux": "^8.0.2"
## Requirements

Node 12 or greater is required. Development for iOS requires a Mac and Xcode 10 or up, and will target iOS 11 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Quick start

To create a new project using the boilerplate simply run :

```
npx react-native init MyApp --template @handidev/react-native-boilerplate
```

note: replace `MyApp` with your desired App name.

Assuming you have all the requirements installed, you can run the project by running:

- `yarn start` / `npm start -- -- reset-cache`  to start the metro bundler, in a dedicated terminal
- `npx react-native run-ios` / `npx react-native run-android`  to run the *platform* application (remember to start a simulator or connect a device)
## List of Q & A

#### I got error `Error: spawn ./gradlew EACCES` when run `npx react-native run-android`.

Run this command `chmod 755 android/gradlew` from your root project directory

#### I got error `Error: SDK location not found. Define location with sdk.dir in the local.properties file or with an ANDROID_HOME environment variable.`

- Go to your Project -> Android
- Create a file local.properties
- Open the file
- Paste your Android SDK path depending on the operating system:

  - Windows:
    sdk.dir=C:\\Users\\`USERNAME`\\AppData\\Local\\Android\\sdk
  - Linux or MacOS
    sdk.dir=/Users/`USERNAME`/Library/Android/sdk

- Replace `USERNAME` with your PC username

### React Native Build Failed on M1 Macbook Pro / Air

try this solution: [How to Run and Build React Native on Macbook Pro M1 Apple Silicon](https://handi.dev/blog/how-run-react-native-on-macbook-m1-apple-silicon)
