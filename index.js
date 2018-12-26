/*
Method Event Handlers

The logic for many event handlers will be more complex
though, so keeping your JavaScript in the value of the
v-on attribute isn't feasible. That's why v-on can also
accept the name of a method you'd like to call

For example:
*/

var example2 = new Vue({
	el: '#example-2',
	data: {
		name: 'Vue.js'
	},
	// define methods under the methods object
	methods: {
		greet: function(event){
			// this inside methods points to the Vue instance
			alert('Halo ' + this.name + '!')
			// event is the native DOM event
			if(event){
				alert(event.target.tagName)
			}
		}
	}
})

// you can invoke methods in JavaScript too
//example2.greet() // => 'Hello Vue.js!'