'use strict';
Vue.component('list-item', {
	template: `<div class="checkbox-wrapper" @click="check">
    <h1>{{checked ? 'checked' : 'noChecked'}} {{ title }}</h1>
    <input type="checkbox" :checked="checked ? true : false"  />
  </div>`,
	props: ['title', 'checked'],
	methods: {
		check() {
			this.$emit('change', !this.checked);
		}
	}
});
