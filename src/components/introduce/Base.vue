<template>
    <div class="container">
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
        <div>{{message+data}}</div>
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
        //改变渲染
        changeRender() {
            this.isRender = !this.isRender;
        }
    },
    // 生命周期
    created() {
        alert("我是 created 生命周期！");
    },
    updated() {
        alert("我是 updated 生命周期！");
    },
    destroyed() {
        alert("我是 destroyed 生命周期！");
    }
};
</script>

<style scoped lang="less">
.container {
    width: 1190px;
    margin: 0 auto;
}
</style>
