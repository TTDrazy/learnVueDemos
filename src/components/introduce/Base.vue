<template>
    <div class="container">
        <button @click="goToMain">go to Main</button>
        <hr />
        <h3>{{ message }}</h3>
        <hr />
        <button v-bind:title="title">v-bind</button>
        <button :title="title" :disabled="isDisabled">v-bind</button>
        <hr />
        <p v-if="isRender">我来啦我来啦~</p>
        <button v-on:click="changeRender">改变渲染</button>
        <button @click="changeRender">改变渲染</button>
        <hr />
        <ul>
            <li v-for="item in persons" v-bind:key="item">
                {{ item.name }},{{ item.age }}
            </li>
        </ul>
        <hr />
        <p>{{ data }}</p>
        <input v-model="data" />
        <hr />
        <div>{{ htmlPage }}</div>
        <div v-html="htmlPage">v-html:{{ htmlPage }}</div>
        <hr />
        <div>{{ message + data }}</div>
        <hr />
        <h3>VueX</h3>
        <div>现在 store 中的 count 为：{{ this.$store.state.count }}</div>
        <div>现在 count + 2 后为：{{ doubleIncrement }}</div>
        <div>现在 count - 2 后为：{{ doubleDecrement }}</div>
        <button @click="increment">count + 1</button>
        <button @click="actionIncrement">count</button>
    </div>
</template>

<script>
export default {
    name: "Base",
    data() {
        return {
            message: "声明式渲染",
            title: `页面加载于${new Date().toLocaleString()}`,
            isRender: true,
            persons: [
                {
                    name: "mayige",
                    age: 20
                },
                {
                    name: "Drazy",
                    age: 21
                }
            ],
            data: "我是 v-model 绑定的数据",
            htmlPage: `<div>我是 html </div>`,
            isDisabled: true
        };
    },
    methods: {
        goToMain() {
            this.$router.push("/main");
        },
        //改变渲染
        changeRender() {
            this.isRender = !this.isRender;
        },
        //给 vueX 的 count + 1
        increment() {
            this.$store.commit("increment");
        },

        actionIncrement() {
            this.$store.dispatch("incrementAsync");
        }
    },
    computed: {
        doubleIncrement() {
            return this.$store.getters.doubleIncrement;
        },
        doubleDecrement() {
            return this.$store.getters.doubleDecrement;
        }
    }
    // 生命周期
    // created() {
    //     alert("我是 created 生命周期！");
    // },
    // updated() {
    //     alert("我是 updated 生命周期！");
    // },
    // destroyed() {
    //     alert("我是 destroyed 生命周期！");
    // }
};
</script>

<style scoped lang="less">
.container {
    width: 1190px;
    margin: 0 auto;
}
</style>
