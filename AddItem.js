'use strict';
Vue.component('add-item', {
	methods: {
		add() {
			this.$emit('add', this.value);
			this.value = '';
		}
	},

	data() {
		return {
			value: ''
		};
	},

	render(createElement) {
		var self = this;
		return createElement('div', [
			createElement('input', {
				attrs: {
					type: 'text',
					placeholder: 'new Item'
				},
				// v-model functionality has to be implemented manually
				domProps: {
					value: self.value
				},
				on: {
					input: function(event) {
						self.value = event.target.value;
						// self.$emit('input', event.target.value)
					}
				}
			}),
			createElement('input', {
				attrs: {
					type: 'submit',
					value: 'add'
				},
				on: {
					click: this.add
				}
			})
		]);
	}
});
