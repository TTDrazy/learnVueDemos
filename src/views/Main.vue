<template>
    <div :class="$style.main">
        <div :class="$style.top">
            <my-Header></my-Header>
        </div>
        <div :class="$style.middle">
            <my-Silder></my-Silder>
            <!-- 最好还是加上 ref ，虽然不影响类似于 this.props.children 的使用-->
            <my-Content ref="myContent">
                <button @click="goToHome">go to Home</button>
                <div>
                    现在 store 中的 count 为：{{ this.$store.state.count }}
                </div>
                <button @click="decrement">count - 1</button>
            </my-Content>
        </div>
        <div :class="$style.bottom">
            <my-Footer></my-Footer>
        </div>
    </div>
</template>

<script>
import Header from "../components/layout/Header";
import Silder from "../components/layout/Silder";
import Content from "../components/layout/Content";
import Footer from "../components/layout/Footer";

export default {
    components: {
        myHeader: Header,
        mySilder: Silder,
        myContent: Content,
        myFooter: Footer
    },
    methods:{
        goToHome(){
            this.$router.push('/');
        },
        decrement(){
            this.$store.commit('decrement');
        }
    }
};
</script>

<style lang="scss" module>
.main {
    display: flex;
    flex-direction: column;
    .top {
        width: 100%;
        height: 50px;
        background: pink;
    }
    .middle {
        display: flex;
    }
    .bottom {
        display: flex;
    }
}
</style>
