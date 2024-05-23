import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
  StyleSheet,
} from 'react-native';
import React, {useState} from 'react';
import {IconButton} from 'react-native-paper';
import Fallback from '../components/Fallback';

const TodoScreen = () => {
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);
  const [editedTodo, setEditedTodo] = useState(null);

  const renderTodos = ({item, index}) => {
    return (
      <View style={styles.card}>
        <Text style={styles.cardtxt}>{item.title}</Text>
        <IconButton
          icon="pencil"
          iconColor="#fff"
          onPress={() => {
            handleEditTodo(item);
          }}
        />
        <IconButton
          icon="trash-can"
          iconColor="#fff"
          onPress={() => {
            handleDeleteTodo(item.id);
          }}
        />
      </View>
    );
  };

  const handleAddTodo = () => {
    setTodoList([...todoList, {id: Date.now().toString(), title: todo}]);
    setTodo('');
  };
  const handleDeleteTodo = id => {
    const updatedTodoList = todoList.filter(e => e.id !== id);
    setTodoList(updatedTodoList);
  };
  const handleEditTodo = item => {
    setEditedTodo(item);
    setTodo(item.title);
  };
  const handleUpdateTodo = () => {
    const updatedTodos = todoList.map(item => {
      if (item.id === editedTodo.id) {
        return {...item, title: todo};
      }
      return item;
    });
    setTodoList(updatedTodos);
    setEditedTodo(null);
    setTodo('');
  };

  return (
    <View style={{margin: 16}}>
      <TextInput
        style={styles.textInput}
        placeholder="Add a task"
        value={todo}
        onChangeText={txt => setTodo(txt)}
      />
      {editedTodo ? (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            handleUpdateTodo();
          }}>
          <Text style={styles.btntxt}>Save</Text>
        </TouchableOpacity>
      ) : (
        <TouchableOpacity
          style={styles.btn}
          onPress={() => {
            todo ? handleAddTodo() : Alert.alert('Please add a task');
          }}>
          <Text style={styles.btntxt}>Add</Text>
        </TouchableOpacity>
      )}
      <FlatList data={todoList} renderItem={renderTodos} />
      {todoList.length <= 0 && <Fallback />}
    </View>
  );
};

export default TodoScreen;

const styles = StyleSheet.create({
  textInput: {
    borderWidth: 3,
    borderColor: '#965199',
    borderRadius: 13,
    paddingVertical: 12,
    paddingHorizontal: 16,
    backgroundColor: '#f7ebf7',
    fontSize: 16,
    fontWeight: '500',
  },
  btn: {
    backgroundColor: '#000',
    borderRadius: 13,
    paddingVertical: 12,
    marginVertical: 40,
    alignItems: 'center',
  },
  btntxt: {color: '#fefefe', fontWeight: 'bold', fontSize: 20},
  card: {
    backgroundColor: '#965199',
    borderRadius: 13,
    paddingHorizontal: 12,
    paddingVertical: 12,
    marginBottom: 12,
    flexDirection: 'row',
    alignItems: 'center',
    shadowColor: '#52006A',
    elevation: 15,
  },
  cardtxt: {fontWeight: 'bold', color: '#fefefe', fontSize: 20, flex: 1},
});
