<template>
  <div class="tab-list">
    <span class="left">{{remainCount}} items left</span>
    <ul class="tabs">
      <li v-for="state in status" :key="state" :class="[state, filter === state ? 'actived': '']" @click="triggerFilter(state)">{{state}}</li>
    </ul>
    <span class="clear" @click="clearAll">Clear Completed</span>
  </div>
</template>

<script>
export default {
  name: 'tabList',
  props: {
    filter: {
      type: String,
      required: true
    },
    todos: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      status: ['all', 'active', 'completed']
    }
  },
  methods: {
    triggerFilter (state) {
      var _this = this
      _this.$emit('triggerFilter', state)
    },
    clearAll () {
      var _this = this
      _this.$emit('clearAll')
    }
  },
  computed: {
    remainCount () {
      return this.todos.filter(todo => !todo.completed).length
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.tab-list {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px 10px 10px 20px;
  font-size: 14px;
  .left {
    display: flex;
  }
  .tabs {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  .tabs li {
    position: relative;
    display: flex;
    border: 1px solid #555;
    border-radius: 10px;
    color: #555;
    padding: 5px 10px;
    margin: 0 5px;
    cursor: pointer;
  }
  .tabs li.actived {
    background-color: #eee;
  }
  .clear {
    display: flex;
    border: 1px solid #555;
    border-radius: 10px;
    color: #555;
    padding: 5px 10px;
    cursor: pointer;
    // margin: 0 5px;
  }
}

</style>
