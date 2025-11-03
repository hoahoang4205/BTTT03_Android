import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { router, useLocalSearchParams } from 'expo-router';
import { Button, StyleSheet } from 'react-native';

export default function StudentDetail() {
  const { name } = useLocalSearchParams();

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Chi tiết sinh viên</ThemedText>
      <ThemedText>Tên: {name}</ThemedText>
      <Button title="Quay lại" onPress={() => router.back()} />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', justifyContent: 'center' },
});
