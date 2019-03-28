var app = new Vue({
  el: "#app",
  data() {
    return {
      message: ""
    };
  }
});

var app2 = new Vue({
  el: "#app2",
  data() {
    return {
      message: ""
    };
  }
});

var app3 = new Vue({
  el: "#app3",
  data() {
    return {
      checked: true
    };
  }
});

var app4 = new Vue({
  el: "#app4",
  data: {
    checkedNames: []
  }
});

var app5 = new Vue({
  el: "#app5",
  data: {
    picked: ""
  }
});

var app6 = new Vue({
  el: "#app6",
  data() {
    return {
      selected: ""
    };
  }
});

var app7 = new Vue({
  el: "#app7",
  data() {
    return {
      selected: []
    };
  }
});

var app8 = new Vue({
  el: "#app8",
  data() {
    return {
      selected: "A",
      options: [
        { text: "One", value: "A" },
        { text: "Two", value: "B" },
        { text: "Three", value: "C" }
      ]
    };
  }
});