<template>
    <div :class="$style.main">
        <div :class="$style.top">
            <my-Header></my-Header>
        </div>
        <div :class="$style.middle">
            <my-Silder></my-Silder>
            <my-Content></my-Content>
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
        myContent:Content,
        myFooter: Footer
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
    .middle{
        display: flex;
    }
    .bottom {
        display: flex;
    }
}
</style>
