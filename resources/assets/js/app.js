require('./bootstrap');

window.Vue = require('vue');

import Moment from 'moment';
window.moment = Moment;

Vue.component('note', require('./components/Note.vue'));
Vue.component('notes', require('./components/Notes.vue'));
Vue.component('create-note', require('./components/CreateNote.vue'));
Vue.component('additional-note', require('./components/AdditionalNote.vue'));

const app = new Vue({
    el: '#app',
    data: {
        note: {}
    },
    methods: {
        // Show a note
        showNote(note)
        {
            this.note = note;
        },

        // Show all ntoes
        showNotes()
        {
            this.note = {};
        }
    }
});
