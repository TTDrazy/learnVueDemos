<template>
    <div class="todoList">
        <input type="text" placeholder="请输入待做任务" v-model="todo" />
        <button @click="addClick">添加</button>
        <list :todoList="todoList"></list>
        <hr />
        <h3>已完成</h3>
        <list :todoList="finishedTodoList"></list>
        <hr />
        <h3>未完成</h3>
        <list :todoList="unFinishedTodoList"></list>
    </div>
</template>
<script>
import List from "../components/todolist/List";
export default {
    name: "todoList",
    data() {
        return {
            todo: "",
            todoList: [
                {
                    todo: "写作业",
                    isFinished: false
                },
                {
                    todo: "打豆豆",
                    isFinished: false
                }
            ],
            finishedTodoList: [],
            unFinishedTodoList: []
        };
    },
    watch: {
        todoList:function() {
            console.log(this.finishedTodoList, this.unFinishedTodoList);
            this.todoList.map(item => {
                if (item.isFinished) {
                    this.finishedTodoList.push(item);
                } else {
                    this.unFinishedTodoList.push(item);
                }
            });
            console.log(this.finishedTodoList, this.unFinishedTodoList);
        },
        deep:true
    },
    methods: {
        addClick() {
            console.log("添加成功！");
            //添加 todo 至首部
            this.todoList.unshift({
                todo: this.todo,
                isFinished: false
            });
            //清空 input
            this.todo = "";
        }
    },
    components: {
        list: List
    },
    mounted() {
        this.todoList.map(item => {
            if (item.isFinished) {
                this.finishedTodoList.push(item);
            } else {
                this.unFinishedTodoList.push(item);
            }
        });
    }
};
</script>
<style scoped lang="less">
.container {
    width: 1190px;
    margin: 0 auto;
}
ul {
    list-style: none;
}
.finished {
    color: #888;
    text-decoration: line-through;
}
</style>
