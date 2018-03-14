<template>
  <div class="main-body">
    <input type="text" class="todo-input" autofocus="autofocus" placeholder="What's next ?" @keyup.enter="createToDo" v-model="inputText">
    <todo-item v-for="todo in filteredToDos" :todo="todo" :key="todo.id" @del="deleteToDo(todo)"></todo-item>
    <tab-list :filter="filter" :todos="todos" @clearAll="clearAllCompleted" @triggerFilter="triggerFilter"></tab-list>
  </div>
</template>

<script>
import todoItem from '@/components/todo/item'
import tabList from '@/components/todo/tabs'
export default {
  name: 'todoApp',
  components: {
    'todo-item': todoItem,
    'tab-list': tabList
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
        completed: false
      },
      filter: 'all'
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
        completed: false
      })
      _this.inputText = ''
    },
    deleteToDo (todo) {
      var _this = this
      var index = _this.todos.indexOf(todo)
      _this.todos.splice(index, 1)
    },
    triggerFilter (state) {
      this.filter = state
    },
    clearAllCompleted () {
      this.todos = this.todos.filter(todo => !todo.completed)
    }
  },
  computed: {
    filteredToDos () {
      var _this = this
      if (_this.filter === 'all') {
        return _this.todos
      }
      const completed = _this.filter === 'completed'
      return _this.todos.filter(todo => completed === todo.completed)
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
    border-bottom: 1px rgba(0, 0, 0, 0.2) solid;
  }
  input:focus {
    outline: none;
    padding-left: 20px;
    font-size: 24px;
    color: #555;
  }
}
</style>
