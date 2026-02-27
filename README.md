Project: mobile-expo-training-labs

Goal
This is an Expo React Native practice repository. The main purpose is to test practical skills around one theme, and convert learned theory into real mini-projects. Visual polish will be improved gradually; the primary focus is hands-on implementation.

Covered Topics (mostly theory, some implemented)

✅ Development Workflow

✅ Core Components & UI patterns

✅ Lists: FlatList / SectionList / Horizontal lists

✅ Platform-specific code (iOS/Android)

✅ Styling + NativeWind (Tailwind)

✅ Networking (fetch)

✅ Interactions (touch/animation/navigation)

✅ Push Notifications (partially implemented)

✅ Deep Linking

✅ Security (Auth basics)

✅ Storage: AsyncStorage vs SecureStore (partially implemented)

✅ State management: Zustand

✅ Dev Client (EAS development build)

Still in Progress:

Notifications

Hardware: Camera, Gallery, Location (GPS).

Drawer Navigation

Advanced: Performance & Native Modules.

Publishing

Tech Stack

Expo (React Native)

TypeScript

React Navigation (Stack + Bottom Tabs)

NativeWind / TailwindCSS (optional styling)

How to run

npm install
npx expo start

Navigation

Bottom Tabs: First, Second, Third

Stack Screens: Fourth … SevenTeen (labs continue)

Exercises / Labs

Architect test (theory)

Safe area / Notch handling

Choosing Pressable vs Button

Loading indicator

Keyboard avoiding on forms

1. Profile Card (UI): View, Image, Text, Pressable, StyleSheet, Platform.select (shadow/elevation), React Navigation (navigate)

2. Smart Bulb (State & Conditional UI): SafeAreaView, View, Text, Switch, Pressable, useState, StyleSheet, Platform.select (shadow/elevation), Conditional styles (toggle on/off), React Navigation (navigate)
3. Secret Image (Modal & ImageBackground): I set a nature photo as an ImageBackground and placed a centered Pressable button labeled "See details". On press, I use useState to control showing/hiding a Modal. Inside the modal, I display the text "This is a secret information" and a close button (Pressable + Image exit icon) that hides the modal when pressed. I replaced StyleSheet styles with NativeWind (className).
   Secret Image (Modal & ImageBackground)

Background image + “See details” opens Modal + close action

Notes

This repo is work-in-progress; labs will be expanded step-by-step.
