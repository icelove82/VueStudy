Vue.component("todo-item", {
  props: ["todo"],
  template: "<li>{{ todo.text }}</li>"
});

var app7 = new Vue({
  el: "#app7",
  created() {
      alert('I am created.')
  },
  updated() {
      alert("The data is updated.")
  },
  data() {
    return {
      groceryList: [
        { id: 0, text: "hello" },
        { id: 1, text: "안녕" },
        { id: 2, text: "你好" }
      ]
    };
  }
});

app7.groceryList[0].text="hello3"