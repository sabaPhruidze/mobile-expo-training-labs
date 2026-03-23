Project: mobile-expo-training-labs

Goal
This is an Expo React Native practice repository. The main purpose is to test practical skills around one theme, and convert learned theory into real mini-projects. Visual polish will be improved gradually; the primary focus is hands-on implementation.

Covered Topics (mostly theory, some implemented)

✅ Development Workflow
✅ Core Components & UI patterns
✅ Lists: FlatList / SectionList / Horizontal lists
✅ Platform-specific code (iOS/Android)
✅ Styling + NativeWind (Tailwind)
✅ Networking (fetch,axios)
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
4. Hobby List (FlatList & Multi-Column Layout): I created a dark-themed hobbies screen using View, Text, FlatList, and ActivityIndicator. I used FlatList with keyExtractor, numColumns, columnWrapperStyle, ListHeaderComponent, ItemSeparatorComponent, ListEmptyComponent, ListFooterComponent, onEndReached, and onEndReachedThreshold. I also used useState to simulate loading more items when scrolling to the bottom. The screen was styled with NativeWind (className) instead of StyleSheet, and the hobby cards were displayed in a clean 2-column layout adapted to the dark visual style of the previous screens.
5. Restaurant Menu (SectionList & Sectioned Layout): I created a dark-themed restaurant menu screen using View, Text, SectionList, and Pressable. I replaced the old numeric component naming with a clearer screen-based structure by moving the feature into RestaurantMenuScreen. I organized the menu into sectioned data (Drinks, Main Courses, Side Dishes, Salads, and Desserts) and rendered it with SectionList using sections, keyExtractor, renderItem, and renderSectionHeader. To keep the layout clean and controlled, I wrapped the list inside a fixed-height container instead of letting it take the full screen. I also added a navigation button to move to the next screen. The screen was styled with NativeWind (className) instead of StyleSheet, following the same dark visual direction as the previous screens, and the static menu data was extracted into a separate constants file for better structure and reusability.
6. Notes

This repo is work-in-progress; labs will be expanded step-by-step.
