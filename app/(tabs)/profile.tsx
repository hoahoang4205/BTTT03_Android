import { Image, StyleSheet, Text, View } from "react-native";


/// Bài 4
export default function ProfileCard() {
  return (
    <View style={styles.card}>
      <Image
        source={require("@/assets/images/avatar.png")}
        style={styles.avatar}
      />
      <Text style={styles.name}>Hoà Hoàng</Text>
      <Text style={styles.job}>Business Analyst</Text>
      <Text style={styles.email}>hoahoang@gmail.com</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    margin: 20,
    padding: 20,
    borderRadius: 10,
    backgroundColor: "#70eeffff",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    elevation: 3,
  },
  avatar: { width: 100, height: 100, borderRadius: 50, marginBottom: 10 },
  name: { fontSize: 20, fontWeight: "bold" },
  job: { fontSize: 16, color: "gray" },
  email: { fontSize: 14, marginTop: 5 },
});
