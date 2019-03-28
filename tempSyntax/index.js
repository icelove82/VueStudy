var app = new Vue({
  el: "#app",
  data() {
    return {
      msg: "Hello Vue!",
      btnYes: "OK",
      btnCancel: "Cancel",
      disabled: false,
      visible: true,
      placeholderMsg: "You must input",
      inputTxt: ""
    };
  },
  methods: {
    showAlert() {
      var value = document.getElementById("input1").value;
      if (value.length <= 3) {
        alert("Please input more than 3 characters.");
      } else {
        alert("Are you sure to OK?");
      }
    },
    initInputTxt() {
      this.inputTxt = "";
    }
  }
});

//app.disabled=false'
