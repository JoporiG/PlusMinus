<template>
  <div id="app">
    <div :key="key" v-for="(arr, key) in $store.getters.getArr">
      <div v-for="(value, index) in arr" :key="index" class = "array-line">
        {{value}} 
      </div>
    </div>
    <button @click="addOne">Add</button>
    <button @click="Push">Push</button>
    <br/>
    строчка
    <input type="text" v-model="line1">
    <input type="text" v-model="line2">
    <button @click="Swap1">Swap</button>
    <br/>
    столбики
    <input type="text" v-model="table1">
    <input type="text" v-model="table2">
    <button @click="Swap2">Swap</button>
  </div>
</template>

<script>

export default {
  name: 'app',
  data(){
    return {
      line1: '',
      line2: '',
      table1: '',
      table2: '',
    }
  },
  components: {

  },
  methods: {
    addOne(){
      this.$store.dispatch("addOne");
    },
    Push(){
      this.$store.dispatch("PusH");
    },
    Swap1(){
      this.$store.dispatch("SwaP1", [this.line1 - 1, this.line2 - 1]);
    },
    Swap2(){
      this.$store.dispatch("SwaP2", [this.table1 - 1, this.table2 - 1]);
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.array-line{
  display: inline;
}
</style>
