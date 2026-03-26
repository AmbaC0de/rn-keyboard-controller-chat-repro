# rn-chat-keyboard-scroll-repro

This repository is a minimal reproduction for a scroll issue observed when opening the keyboard on Android (using `KeyboardChatScrollView`).

## Get started

1. Install dependencies

   ```bash
   npm install
   ```

2. Prebuild the native project

   ```bash
   npx expo prebuild
   ```

3. Start the app

   ```bash
   npx expo start
   ```

## Scroll bug reproduction (Android only)

This repository is a minimal repro for a scroll issue observed with `KeyboardChatScrollView` from `react-native-keyboard-controller`.

Observed behavior (Android only): when you open the keyboard while the chat list is already scrolled to the bottom, it becomes impossible to scroll upward until the keyboard is dismissed. As a workaround, setting `inverted` on the surrounding `FlatList` makes scrolling work as expected.
