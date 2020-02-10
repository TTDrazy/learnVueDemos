<template>
    <div :class="$style.main">
        <el-aside width="200px">
            <el-menu :default-openeds="['1', '3']">
                <el-submenu index="1">
                    <template slot="title"
                        ><i class="el-icon-message"></i>导航一</template
                    >
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="1-1">选项1</el-menu-item>
                        <el-menu-item index="1-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
                <el-submenu index="3">
                    <template slot="title"
                        ><i class="el-icon-setting"></i>导航二</template
                    >
                    <el-menu-item-group>
                        <template slot="title">分组一</template>
                        <el-menu-item index="3-1">选项1</el-menu-item>
                        <el-menu-item index="3-2">选项2</el-menu-item>
                    </el-menu-item-group>
                </el-submenu>
            </el-menu>
        </el-aside>
    </div>
</template>

<script>
export default {};
</script>

<style lang="scss" module>
.main {
    width: 200px;
    //background: lightblue;
}
</style>
