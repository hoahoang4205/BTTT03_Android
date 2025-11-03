import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

export default function ProfileScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Hồ sơ cá nhân</ThemedText>
      <ThemedText>Họ tên: Hoà Hoàng</ThemedText>
      <ThemedText>Email: hoahoang@gmail.com</ThemedText>
      <Button title="Quay lại" onPress={() => router.back()} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
