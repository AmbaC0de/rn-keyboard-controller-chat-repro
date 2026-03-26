import { View, Text, StyleSheet } from "react-native";

type MessageProps = {
  id: string;
  text: string;
  sender: "me" | "other";
};

export function Message({ text, sender }: MessageProps) {
  const isMe = sender === "me";

  return (
    <View
      style={[
        styles.bubble,
        isMe ? styles.bubbleMe : styles.bubbleOther,
      ]}
    >
      <Text style={isMe ? styles.textMe : styles.textOther}>{text}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  bubble: {
    maxWidth: "75%",
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 18,
    marginVertical: 4,
    marginHorizontal: 12,
  },
  bubbleMe: {
    alignSelf: "flex-end",
    backgroundColor: "#007AFF",
  },
  bubbleOther: {
    alignSelf: "flex-start",
    backgroundColor: "#E5E5EA",
  },
  textMe: {
    color: "#fff",
    fontSize: 16,
  },
  textOther: {
    color: "#000",
    fontSize: 16,
  },
});
