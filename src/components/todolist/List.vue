<template>
    <ul>
        <li
            v-for="(item, index) in todoList"
            :key="index"
            :class="[item.isFinished ? 'finished' : '']"
        >
            <input type="checkbox" v-model="item.isFinished"/>
            {{ item.todo }}
            <button v-if="!item.isFinished" @click="removeClick(item.todo)">
                删除
            </button>
        </li>
    </ul>
</template>

<script>
export default {
    name: "list",
    props: {
        todoList:[]
    },
    methods: {
        removeClick(todo) {
            this.todoList = this.todoList.filter(item => item.todo != todo);
            console.log("删除成功！");
        },
        //checkChange(){}
    }
};
</script>

<style>
ul {
    list-style: none;
}
.finished {
    color: #888;
    text-decoration: line-through;
}
</style>
