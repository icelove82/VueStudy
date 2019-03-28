// Component 1
Vue.component("button-counter", {
  data() {
    return {
      count: 0
    };
  },
  methods: {
    show() {
      alert("The value is " + this.count);
    }
  },
  template: `
  <button v-on:click='count++'>You clicked me {{count}} times.</button>
  `
});

// Component 2
Vue.component("blog-post", {
  props: ["post"],
  template: `
  <div class="blog-post">
      <h3>{{ post.title }}</h3>
      
      <button v-on:click="$emit('enlarge-text', 0.1)">
        Enlarge text
      </button>

      <div>{{post.comments}}</div>
  </div>
  `
});

// Component 3
Vue.component("custom-input", {
  props: ["value"],
  template: `
    <input
      v-bind:value='value'
      v-on:input="$emit('input', $event.target.value)">`
});

var app = new Vue({
  el: "#app"
});

var app2 = new Vue({
  el: "#app2",
  data() {
    return {
      posts: [
        { id: 1, title: "My journey with Vue", comments: "contents1" },
        { id: 2, title: "Blogging with Vue", comments: "contents2" },
        { id: 3, title: "Why Vue is so fun", comments: "contents3" }
      ],
      postFontSize: 1
    };
  },
  methods: {
    onEnlargeText(enlargeAmount) {
      this.postFontSize += enlargeAmount;
    }
  }
});

var app3 = new Vue({
  el: "#app3",
  data() {
    return {
      searchText: ""
    };
  }
});
