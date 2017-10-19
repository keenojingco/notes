
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

require('./bootstrap');

window.Vue = require('vue');

import Store from './store';

Vue.component('notes', require('./components/Notes.vue'));
Vue.component('create-note', require('./components/CreateNote.vue'));

const app = new Vue({
    el: '#app',
    data: {
        shared: Store
    }
});
