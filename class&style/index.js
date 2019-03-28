var app = new Vue({
  el: "#app",
  data: {
    message: "Hello Vue!",
    isActive: true,
    hasError: true
  }
});

var app2 = new Vue({
  el: "#app2",
  data: {
    message: "Setting class from object.",
    message2: "Setting class from computed object.",
    classObject: {
      active: true,
      "text-dange": false
    }
  },
  computed: {
    computedObject() {
      return {
        active: false,
        "text-dange": true
      };
    }
  }
});

var app3 = new Vue({
  el: "#app3",
  data: {
    message: "Bind style",
    message2: "Bind by style object",
    activeColor: "red",
    fontSize: "20px",
    styleObject: {
      color: "red",
      fontSize: "30px"
    }
  }
});
