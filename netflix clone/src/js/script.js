let myVue = new Vue({
    el: '#myVueItem',
    data: {
      myModel: "Look for movies here",
      newItem: "",
      newItem: "",
      newItem: "",
    },

    methods: {
      function() {
        console.log('The value of myData is ' + this.myData);
        document.getElementById("output").innerHTHML = myVue.$data.myModel;
        console.log('The value of myData is ' + this.myData);
      }

    }
  })