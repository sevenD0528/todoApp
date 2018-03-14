<template>
  <div class="item">
    <input type="checkbox" name="">
    <label class="content">{{todo.content}}</label>
    <label class="del-btn" @click="del">x</label>
  </div>
</template>

<script>
export default {
  name: 'todoItem',
  props: {
    todo: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
    }
  },
  methods: {
    del () {
      var _this = this
      _this.$emit('del', _this.todo)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
.item {
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 10px;
  input[type="checkbox"] {
    position: relative;
    display: flex;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: none;
    appearance: none;
    -webkit-appearance: none;
    border: 1px solid #555;
    text-align: center;
    margin: 0;
    padding: 0;
  }
  input[type="checkbox"]:checked::before {
    content: "\2713";
    background-color: #fff;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .content {
    display: flex;
    flex: 1;
    margin-left: 30px;
  }
  .del-btn {
    position: relative;
    display: flex;
    width: 15px;
    height: 15px;
    color: #555;
  }
}

</style>
