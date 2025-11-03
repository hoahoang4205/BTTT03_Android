import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

export default function HomeTwoScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Màn hình Home</ThemedText>
      <Link href="./profile" asChild>
        <Button title="Xem hồ sơ" />
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
