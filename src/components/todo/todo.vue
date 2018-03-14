<template>
  <div class="main-body">
    <input type="text" class="todo-input" autofocus="autofocus" placeholder="What's next ?" @keyup.enter="createToDo" v-model="inputText">
    <todo-item v-for="todo in todos" :todo="todo" :key="todo.id" @del="deleteToDo(todo)"></todo-item>
  </div>
</template>

<script>
import todoItem from '@/components/todo/item'
export default {
  name: 'todoApp',
  components: {
    'todo-item': todoItem
  },
  data () {
    return {
      msg: 'Welcome to Your ToDo App',
      todos: [],
      inputText: '',
      count: 0,
      todo: {
        id: 0,
        content: 'Have Lunch',
        status: 0 // 0 未完成 1 进行中 2 完成
      }
    }
  },
  methods: {
    createToDo () {
      var _this = this
      if (_this.inputText.trim() === '') {
        return
      }
      _this.todos.unshift({
        id: _this.count++,
        content: _this.inputText.trim(),
        status: 0
      })
      _this.inputText = ''
    },
    deleteToDo (todo) {
      var _this = this
      var index = _this.todos.indexOf(todo)
      _this.todos.splice(index, 1)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>

.main-body {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
  background-color: #fff;
  .todo-input {
    position: relative;
    width: 600px;
    height: 50px;
    border: 0;
    box-sizing: border-box;
    padding: 0;
    font-size: 24px;
    padding-left: 20px;
    color: #555;
  }
  input:focus {
    outline: none;
    padding-left: 20px;
    font-size: 24px;
    color: #555;
  }
}
</style>
