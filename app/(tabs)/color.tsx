import { useState } from "react";
import { Button, StyleSheet, View } from "react-native";



/// Bài 6
export default function ColorChanger() {
  const [color, setColor] = useState("lightblue");

  const changeColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <View style={[styles.container, { backgroundColor: color }]}>
      <Button title="Đổi màu" onPress={changeColor} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
