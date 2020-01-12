# 更新日志

## 1.0.0(2020.01.12)

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
           也可以简写为：
           <br>
           <code> @click="changeRender </code>
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
