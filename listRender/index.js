//import Vue from "vue";

var app = new Vue({
  el: "#app",
  data: {
    items: [{ message: "Foo" }, { message: "Bar" }]
  }
});

var app2 = new Vue({
  el: "#app2",
  data: {
    parentMessage: "Parent",
    items: [{ message: "Foo" }, { message: "Bar" }]
  }
});

//* 给数组对象添加 item
Vue.set(app2.items, 2, { message: "Bar1" });

//* 通过 filter 修改数据
// app2.items = app2.items.filter((item) => item.message === 'Fos')

Vue.set(app2.items[1], "add", "Add by dynamic");

//不改变原始数据 过滤
var app3 = new Vue({
  el: "#app3",
  data: {
    numbers: [1, 2, 3, 4, 5, 6, 7]
  },
  computed: {
    evenNumbers() {
      return this.numbers.filter(it => it % 2 === 0);
    }
  }
});

// v-for on <template>
var app4 = new Vue({
  el: "#app4",
  data() {
    return {
      items: [
        { id: 1, msg: "Hello" },
        { id: 2, msg: "안녕" },
        { id: 3, msg: "你好" }
      ]
    };
  }
});

// v-for & v-if
var app5 = new Vue({
  el: "#app5",
  data() {
    return {
      todos: [
        { id: 1, title: "Mission 1", task: "Learn Vue", isComplete: true },
        {
          id: 2,
          title: "Mission 2",
          task: "Learn SpringBoot",
          isComplete: true
        },
        { id: 3, title: "Mission 3", task: "Learn Kotlin", isComplete: true },
        {
          id: 4,
          title: "Mission 4",
          task: "Learn JavaScript",
          isComplete: true
        },
        { id: 5, title: "Mission 5", task: "Learn Tomcat", isComplete: true }
      ]
    };
  }
});

// v-for & v-if in 2 depth
var app6 = new Vue({
  el: "#app6",
  data() {
    return {
      visible: false,
      todos: [
        { id: 1, title: "Mission 1", task: "Learn Vue", isComplete: true },
        {
          id: 2,
          title: "Mission 2",
          task: "Learn SpringBoot",
          isComplete: true
        },
        { id: 3, title: "Mission 3", task: "Learn Kotlin", isComplete: true },
        {
          id: 4,
          title: "Mission 4",
          task: "Learn JavaScript",
          isComplete: true
        },
        { id: 5, title: "Mission 5", task: "Learn Tomcat", isComplete: true }
      ]
    };
  }
});
