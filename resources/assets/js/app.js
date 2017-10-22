require('./bootstrap');


import Vue from 'vue';
import Moment from 'moment';
import Errors from './errors';
import Timestamp from './timestamp';

window.vue = Vue;
window.moment = Moment;
window.errors = Errors;
window.timestamp = Timestamp;

Vue.component('note', require('./components/Note.vue'));
Vue.component('notes', require('./components/Notes.vue'));
Vue.component('create-note', require('./components/CreateNote.vue'));
Vue.component('additional-note', require('./components/AdditionalNote.vue'));

const app = new vue({
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
