import Vues from "vue";
// import _ from 'lodash';
// import axios from 'axios';

var app = new Vue({
  el: "#app",
  data() {
    return {
      message: "Hello"
    };
  },
  computed: {
    reversedMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  },
  methods: {
    reverseMessage() {
      return this.message
        .split("")
        .reverse()
        .join("");
    }
  }
});

var app2 = new Vue({
  el: "#app2",
  data() {
    return {
      firstName: "Yun",
      lastName: "Myeonghun"
    };
  },
  computed: {
    fullName() {
      return this.firstName + " " + this.lastName;
    }
  }
});

var app3 = new Vue({
  el: "#app3",
  data() {
    return {
      question: "",
      answer: "I cannot give you an answer until you ask a question!"
    };
  },
  watch: {
    // 如果 `question` 发生改变，这个函数就会运行
    question(newQuestion, oldQuestion) {
      this.answer = "Waiting for you stop typing...";
      this.debouncedGetAnswer();
    }
  },
  created() {
    this.debouncedGetAnswer = _.debounce(this.getAnswer, 500);
  },
  methods: {
    getAnswer() {
      if (this.question.indexOf("?") === -1) {
        this.answer = "Questions usually contain a question mark. ;-)";
        return;
      }
      this.answer = "Thinking...";
      var vm = this;

      axios
        .get("https://yesno.wtf/api")
        .then(function(response) {
          vm.answer = _.capitalize(response.data.answer);
        })
        .catch(function(error) {
          vm.answer = "Error! Could not reach the API. " + error;
        });
    }
  }
});
