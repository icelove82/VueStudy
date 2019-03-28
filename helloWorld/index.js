var app = new Vue({
    el: '#app',
    data() {
        return {
            message: 'Hello Vue!'
        }
    },
})

var app2 = new Vue({
  el: "#app2",
  data: {
    message: "Hello Vue!",
    visible: true
  }
});

var app3 = new Vue({
  el: "#app3",
  data() {
    return {
      message: "Tooltip load on " + new Date().toLocaleString()
    };
  }
});

var app4 = new Vue({
  el: "#app4",
  data() {
    return {
      todos: [
        { id: 1, text: "HTML" },
        { id: 2, text: "CSS" },
        { id: 3, text: "JavaScript" },
        { id: 4, text: "Vue" }
      ]
    };
  }
});

var app5 = new Vue({
    el: '#app5',
    data() {
        return {
            message: 'If you click me, Then i will reverse!'
        }
    },
    methods: {
        reverseMessage() {
            this.message = this.message.split('').reverse().join('')
            this.alertMsg()
        },
        alertMsg() {
            alert(this.message)
        }
    },
})

var app6 = new Vue({
    el: '#app6',
    data() {
        return {
            message: 'Hello'
        }
    },
})


// app.message = "Value is change"
// app.visible = true

app3.todos.push({ id: 5, text: "React" });
