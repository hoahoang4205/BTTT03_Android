import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";



/// bài 5
export default function AverageScore() {
  const [toan, setToan] = useState("");
  const [ly, setLy] = useState("");
  const [hoa, setHoa] = useState("");
  const [tb, setTb] = useState<number | null>(null);

  const tinhTB = () => {
    const avg = (Number(toan) + Number(ly) + Number(hoa)) / 3;
    setTb(avg);
  };

  return (
    <View style={styles.container}>
      <TextInput placeholder="Toán" style={styles.input} keyboardType="numeric" value={toan} onChangeText={setToan} />
      <TextInput placeholder="Lý" style={styles.input} keyboardType="numeric" value={ly} onChangeText={setLy} />
      <TextInput placeholder="Hóa" style={styles.input} keyboardType="numeric" value={hoa} onChangeText={setHoa} />
      <Button title="Tính điểm" onPress={tinhTB} />
      {tb !== null && <Text style={styles.result}>Điểm TB: {tb.toFixed(2)}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  input: { borderWidth: 1, padding: 10, marginVertical: 5, borderRadius: 8 },
  result: { marginTop: 15, fontSize: 18, fontWeight: "bold", textAlign: "center" },
});
