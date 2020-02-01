import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    arr: [ [1, 2, 3],
           [4, 5, 6],
           [7, 8, 9]
          ]
  },
  mutations: {
    addDelta(state, delta){
      let brr = state.arr.map(v => v);
      for(let i = 0; i < brr.length; i++){
        for(let j = 0; j < brr.length; j++){
          if(!(i == j && j == 0))
            brr[i][j] += delta;
        }
      }
      state.arr = brr;
    },
    PushFst(state){
      let brr = state.arr.map(v => v);
      let sum = 0;
      for(let i = 1; i < brr.length; i++){
        sum += brr[i][i];
      }
      for(let i = 0; i < brr.length; i++){
        for(let j = 0; j < brr.length; j++){
          if(i + j == brr.length - 1)
            sum += brr[i][j];
        }
      }
      brr[0][0] = sum;
      state.arr = brr;
    },
    Swap1(state, arr){
      let brr = state.arr.map(v => v);
      let a;
      for(let i = 0; i < brr.length; i++){
        a = brr[arr[0]][i];
        brr[arr[0]][i] = brr[arr[1]][i];
        brr[arr[1]][i] = a;
      }
      state.arr = brr;
    },
    Swap2(state, arr){
      let brr = state.arr.map(v => v);
      let a;
      for(let i = 0; i < brr.length; i++){
        a = brr[i][arr[0]];
        brr[i][arr[0]] = brr[i][arr[1]];
        brr[i][arr[1]] = a;
      }
      state.arr = brr;
    }
  },
  actions: {
    addOne(ctx){
      ctx.commit('addDelta', 1)
    },
    PusH(ctx){
      ctx.commit("PushFst")
    },
    SwaP1(ctx, a){
      ctx.commit("Swap1", a)
    },
    SwaP2(ctx, a){
      ctx.commit("Swap2", a)
    }
  },
  getters:{
    getArr: (state) => state.arr
  }
})
