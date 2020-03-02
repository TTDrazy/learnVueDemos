<template>
    <div :class="$style.main">
       <slot>
           <!-- 我是类似于 this.props.children 的东西 -->
        </slot>  
    </div>
</template>

<script>

</script>

<style lang="scss" module>
.main {
    width: 100%;
    height: 500px;
    background: lightgreen;
}
</style>
