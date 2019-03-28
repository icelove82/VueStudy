var app = new Vue({
  el: "#app",
  data: {
    awesome: true
  }
});

var app2 = new Vue({
  el: "#app2",
  data: {
    ok: true,
    code: "b"
  }
});

var app3 = new Vue({
  el: "#app3",
  data: {
    loginType: "username"
  }
});

var app4 = new Vue({
    el: "#app4",
    data: {
        loginType: "username"
    }
});

//*   v-if vs v-show
// v-show 肯定会渲染，之后修改CSS，初始渲染压力大
// v-if 遇到条件为真是，才渲染，频繁切换时渲染压力大

//*   v-if and v-for 一起使用
// 不推荐同时使用
// 同时使用时，v-for 具有比 v-if 更高的优先级