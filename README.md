# react-native-typescript-boilerplate-template 2022 
[![npm](https://img.shields.io/npm/v/@handidev/react-native-typescript-boilerplate)](https://www.npmjs.com/package/@handidev/react-native-typescript-boilerplate)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg)](https://conventionalcommits.org)

## What is React Native Typescript Boilerplate

It is a template that you can clone and reuse for every project. It is starting point for React Native application.

## React Native Typescript Boilerplate ( 0.70.6 )

consist of:

- "@react-native-masked-view/masked-view": "^0.2.8",
- "@react-navigation/bottom-tabs": "^6.4.0",
- "@react-navigation/material-top-tabs": "^6.3.0",
- "@react-navigation/native": "^6.0.13",
- "@react-navigation/native-stack": "^6.9.1",
- "@reduxjs/toolkit": "^1.9.0",
- "react": "18.1.0",
- "react-native": "0.70.6",
- "react-native-gesture-handler": "^2.8.0",
- "react-native-pager-view": "^6.1.0",
- "react-native-safe-area-context": "^4.4.1",
- "react-native-screens": "^3.18.2",
- "react-native-tab-view": "^3.3.0",
- "react-native-vector-icons": "^9.2.0",
- "react-redux": "^8.0.5"
## Requirements

Node 14 or greater is required. Development for iOS requires a Mac and Xcode 10 or up, and will target iOS 11 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Quick start

To create a new project using the boilerplate simply run :

```
npx react-native init MyAppName --template @handidev/react-native-typescript-boilerplate
```

note: replace `MyAppName` with your desired App name.

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


#### Error Your Ruby version is 2.6.10, but your Gemfile specified 2.7.5
- install `rbenv`
- run `rbenv local 2.7.5`
- `export PATH="$HOME/.rbenv/bin:$PATH"`
`export PATH="$HOME/.rbenv/shims:$PATH"`

--------------
##### `Error /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:283:in find_spec_for_exe: Could not find 'bundler' (2.1.4) required by your /Users/username/DEVELOPER/MyAppName/Gemfile.lock. (Gem::GemNotFoundException)`
`To update to the latest version installed on your system, run bundle update --bundler.
To install the missing version, run `gem install bundler:2.1.4`
from /System/Library/Frameworks/Ruby.framework/Versions/2.6/usr/lib/ruby/2.6.0/rubygems.rb:302:in activate_bin_path
from /usr/bin/bundle:23:in <main>`

✖ Installing Bundler
`error Error: Looks like your iOS environment is not properly set. Please go to https://reactnative.dev/docs/next/environment-setup and follow the React Native CLI QuickStart guide for macOS and iOS.`

### Solution:
follow step below:
1. `brew install rbenv`
2. `rbenv install 2.7.5`
3. `rbenv local 2.7.5  `
4. `export PATH="$HOME/.rbenv/shims:$PATH"`
----------

### React Native Build Failed on M1 Macbook Pro / Air

try this solution: [How to Run and Build React Native on Macbook Pro M1 Apple Silicon](https://handi.dev/blog/how-run-react-native-on-macbook-m1-apple-silicon)
