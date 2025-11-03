import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React, { useState } from 'react';
import { Alert, Button, FlatList, StyleSheet, Text, TextInput, TouchableOpacity } from 'react-native';



/// Bài 7
export default function TodoScreen() {
  const [task, setTask] = useState('');
  const [list, setList] = useState<string[]>([]);

  const addTask = () => {
    if (!task.trim()) return Alert.alert('Lỗi', 'Vui lòng nhập công việc!');
    setList([...list, task]);
    setTask('');
  };

  const deleteTask = (index: number) => {
    const newList = list.filter((_, i) => i !== index);
    setList(newList);
  };

  return (
    <ThemedView style={styles.container}>
      <ThemedText type="title">Bài 7: Danh sách công việc</ThemedText>
      <TextInput
        style={styles.input}
        placeholder="Nhập công việc..."
        value={task}
        onChangeText={setTask}
      />
      <Button title="Thêm" onPress={addTask} />
      <FlatList
        data={list}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            style={styles.item}
            onLongPress={() => deleteTask(index)}>
            <Text style={styles.text}>{item}</Text>
            <TouchableOpacity onPress={() => deleteTask(index)}>
              <Text style={styles.delete}>X</Text>
            </TouchableOpacity>
          </TouchableOpacity>
        )}
      />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16 },
  input: { borderWidth: 1, padding: 8, marginVertical: 10, borderRadius: 10 },
  item: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, backgroundColor: '#E3F2FD', marginTop: 8, borderRadius: 10 },
  text: { fontSize: 16 },
  delete: { color: 'red', fontWeight: 'bold' },
});
