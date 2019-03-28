var app = new Vue({
  el: "#app",
  data: {
    counter: 0
  }
});

var app2 = new Vue({
  el: "#app2",
  data: {
    name: "Vue.js"
  },
  // 在 `methods` 对象中定义方法
  methods: {
    greet() {
      // `this` 在方法里指向当前 Vue 实例
      alert("Hello " + this.name + "!");

      // `event` 是原生 DOM 事件
      if (event) {
        alert(event.target.tagName);
      }
    }
  }
});

var app3 = new Vue({
  el: "#app3",
  methods: {
    say(message) {
      alert(message);
    }
  }
});

var app4 = new Vue({
  el: "#app4",
  methods: {
    warn(message, event) {
      // 现在我们可以访问原生事件对象
      if (event) {
        event.preventDefault();
        alert(message);
      }
    }
  }
});

var app5 = new Vue({
  el: "#app5",
  methods: {
    submit() {
      alert("I am activited.");
    }
  }
});
