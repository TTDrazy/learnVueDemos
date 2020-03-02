import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const moduleA = {
    state: {},
    mutations: {},
    actions: {},
    getters: {}
};

const moduleB = {
    state: {},
    mutations: {},
    actions: {}
};

export default new Vuex.Store({
    state: {
        count: 0
    },
    getters: {
        doubleIncrement: state => {
            return state.count + 2;
        },
        doubleDecrement: state => {
            return state.count - 2;
        }
    },
    mutations: {
        increment(state) {
            state.count++;
        },
        decrement(state) {
            state.count--;
        }
    },
    actions: {
        incrementAsync({ commit }) {
            setTimeout(() => {
                commit("increment");
            }, 1000);
        }
    },
    modules: {
        a: moduleA,
        b: moduleB
    }
});
