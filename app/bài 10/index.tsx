import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Button, FlatList, StyleSheet, TextInput, TouchableOpacity } from 'react-native';

export default function StudentList() {
  const [students, setStudents] = useState<string[]>(['Nguyễn Văn A', 'Trần Thị B']);
  const [name, setName] = useState('');

  const addStudent = () => {
    if (name.trim()) {
      setStudents([...students, name]);
      setName('');
    }
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Danh sách sinh viên</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Nhập tên sinh viên mới"
        value={name}
        onChangeText={setName}
      />
      <Button title="Thêm sinh viên" onPress={addStudent} />

      <FlatList
        data={students}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Link href={{ pathname: './detail', params: { name: item } }} asChild>
            <TouchableOpacity style={styles.item}>
              <ThemedText>{item}</ThemedText>
            </TouchableOpacity>
          </Link>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 10, marginVertical: 10, borderRadius: 10 },
  item: { padding: 12, backgroundColor: '#BBDEFB', borderRadius: 10, marginTop: 8 },
});
