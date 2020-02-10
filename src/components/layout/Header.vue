<template>
    <div :class="$style.main">
        <div>Logo</div>
        <ul>
            <li>菜单 1</li>
            <li>菜单 2</li>
            <li>菜单 3</li>
            <li>菜单 4</li>
            <li>菜单 5</li>
        </ul>
        <div>个人信息</div>
        <div>设置</div>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
    .main{
        display: flex;
       // align-items: center;
        ul{
            display: flex;
            align-items: center;
            list-style: none;
        }
    }
</style>
