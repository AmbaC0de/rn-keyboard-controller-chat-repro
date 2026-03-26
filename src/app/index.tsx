import { Message } from "@/components/Message";
import VirtualizedListScrollView from "@/components/VirtualizedListScrollView";
import { messages } from "@/data/dummy-messages";
import { useCallback } from "react";
import {
  FlatList,
  ScrollViewProps,
  StyleSheet,
  TextInput,
  View,
} from "react-native";
import {
  KeyboardGestureArea,
  KeyboardStickyView,
} from "react-native-keyboard-controller";
import { useSafeAreaInsets } from "react-native-safe-area-context";

function Index() {
  const insets = useSafeAreaInsets();
  const renderScrollComponent = useCallback(
    (props: ScrollViewProps) => <VirtualizedListScrollView {...props} />,
    [],
  );

  return (
    <View style={styles.container}>
      <KeyboardGestureArea
        interpolator="ios"
        style={{ flex: 1 }}
        textInputNativeID="chat-input"
      >
        <FlatList
          data={messages}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Message {...item} />}
          renderScrollComponent={renderScrollComponent}
        />
        <KeyboardStickyView>
          <View
            style={[styles.inputContainer, { paddingBottom: insets.bottom }]}
          >
            <TextInput
              style={styles.input}
              placeholder="Type a message..."
              placeholderTextColor="#999"
              nativeID="chat-input"
            />
          </View>
        </KeyboardStickyView>
      </KeyboardGestureArea>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  inputContainer: {
    padding: 8,
    backgroundColor: "#F6F6F6",
    borderTopWidth: StyleSheet.hairlineWidth,
    borderTopColor: "#ccc",
  },
  input: {
    backgroundColor: "#fff",
    borderRadius: 20,
    paddingHorizontal: 16,
    paddingVertical: 10,
    fontSize: 16,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: "#ddd",
  },
});

export default Index;
