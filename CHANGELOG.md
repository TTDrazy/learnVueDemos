# 更新日志

## 1.2(2020.03.02)

---

1. VueX 介绍  
    - VueX 是一种类似于 mobx 的**状态管理模式**，用于管理多组件的共享状态
    - 它是单项数据流的<img width="400px" src="https://vuex.vuejs.org/flow.png">
2. VueX 的 state
    - VueX 的 state 是它的一个被全局保存的属性，所有的显示和操作都是它或操作它的方法
3. VueX 的 getter
    - 可以认为是 store 的**计算属性**
    - getter 的返回值会根据它的 state 中的依赖被缓存起来，且只有当它的 state 中的依赖值发生了改变才会重新计算
4. VueX 的 mutations
    - 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation , Vuex 中的 mutation 非常类似于**事件**
    - 每个 mutation 都有一个字符串的 事件类型 (type) 和一个回调函数 (handler)。
        - 这个回调函数就是我们实际进行状态更改的地方，并且它会接受 state 作为第一个参数
    - 一条重要的原则就是要记住 mutation 必须是**同步**函数 
        - 因为当 mutation 触发的时候，回调函数还没有被调用，实质上任何在回调函数中进行的状态的改变都是不可追踪的
5. VueX 的 actions
    - action 类似于 mutation，但是**不同**在于：
        - action 提交的是 mutation，而不是直接变更状态
        - action 可以包含**任意异步**操作
5. VueX 的 modules
    - Vuex 允许我们将 store 分割成**模块**
        - 每个模块拥有自己的 state、mutation、action、getter、甚至是嵌套子模块——从上至下进行同样方式的分割
            - 调用时：<code>store.state.a // -> moduleA 的状态
                    store.state.b // -> moduleB 的状态
                </code>


## 1.1(2020.02.10)

---

1. 增添了自动导入的 element-ui
2. 自己实现了 element 的布局

## 1.0(2020.01.12)

---

### 安装 Vue 脚手架

<ol>
    <li>确保安装 node ，淘宝镜像，webpack </li>
    <li>全局安装 @vue/cli</li>
    <code> npm install -g @vue/cli</code>
    <li>创建项目并进行自定义配置 </li>
     <code> vue create xxx</code>
    <li>运行项目 <code>yarn serve</code> ,并在 http://localhost:8080/ 下查看</li>
    
</ol>

### 介绍

<ol>
    <li>
       构成 
       <ul>
           <li>
            在 Vue 中，分 template , script 和 style 三部分组成。
           </li>
           <li>
            template 负责 html 的标签 ; script 负责数据和方法的实现 ; style 负责利用 css 美化页面
           </li>
       </ul>
    </li>
    <li>
       声明式渲染
       <ul>
           <li>
           在 Vue 中，在 template 中的 html 内容里可以用 {{data}} 来表示数据
           <br>
           <code> {{ message }} </code>
           </li>
           <li>
           v-bind 用来单向的绑定数据（只展示，不能直接对数据源进行修改）
           <br>
           <code> v-bind:title="title" </code>
           <br>
           也可以简写为：
           <br>
           <code> :title="title"  </code>
           </li>
       </ul>
    </li>
    <li>
       条件与循环
       <ul>
           <li>
           v-if 可以用来控制元素是否显示
           <br>
           <code>  v-if="isRender" </code>
           </li>
           <li>
           v-for 可以用来循环显示数据（替代了 map）
           <br>
           <code> &lt;li v-for=&quot;item in persons&quot; v-bind:key=&quot;item&quot;&gt;
                {{ item.name }},{{ item.age }}
            &lt;/li&gt;
            </code>
           </li>
           <li>
           v-on 是对 DOM 添加事件
           <br>
           <code> v-on:click="changeRender" </code>
           <br>
           也可以简写为：
           <br>
           <code> @click="changeRender </code>
           </li>
           <li>
           v-model 是对表单和展示数据之间的双向绑定
           <br>
           <code> &lt;p&gt;{{ data }}&lt;/p&gt;
&lt;input v-model=&quot;data&quot; /&gt;</code>
           <br>
           </li>
       </ul>
    </li>
    <li>
    生命周期
    <br>
        <img width="400px" src="https://cn.vuejs.org/images/lifecycle.png">
    </li>
    <li>
    原始 html
         <ul>
           <li>
           v-html 用来识别并响应渲染 html
           <br>
           <code> v-html="htmlPage" </code>
           </li>
       </ul>
    </li>
</ol>
