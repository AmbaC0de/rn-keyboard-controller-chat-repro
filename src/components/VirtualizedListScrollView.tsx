import React, { forwardRef } from "react";
import type { ScrollViewProps } from "react-native";
import type { KeyboardChatScrollViewProps } from "react-native-keyboard-controller";
import { KeyboardChatScrollView } from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

type Ref = React.ComponentRef<typeof KeyboardChatScrollView>;

const BOTTOM_OFFSET = 20; // distance from safe area to input

const VirtualizedListScrollView = forwardRef<
  Ref,
  ScrollViewProps & KeyboardChatScrollViewProps
>((props, ref) => {
  const { bottom } = useSafeAreaInsets();

  // Android-only reproduction note:
  // If the chat list is already scrolled to the bottom and the keyboard is opened,
  // scrolling upward can get stuck (until the keyboard is dismissed).
  // Using `inverted` on the surrounding `FlatList` restores the expected behavior.
  return (
    <KeyboardChatScrollView
      ref={ref}
      automaticallyAdjustContentInsets={false}
      contentInsetAdjustmentBehavior="never"
      keyboardDismissMode="interactive"
      keyboardLiftBehavior="whenAtEnd"
      offset={bottom - BOTTOM_OFFSET}
      {...props}
    />
  );
});

export default VirtualizedListScrollView;
