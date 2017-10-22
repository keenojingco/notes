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
        showNote: false,
        showNotes: true,
        showCreateNote: false,
    },
    methods: {
        toggleShowNotes()
        {
            this.showNote = false;
            this.showNotes = true;
            this.showCreateNote = false;
        },

        toggleCreateNote()
        {
            this.showNotes = false;
            this.showCreateNote = true;
            this.showNote = false;
        },

        toggleShowNote(note)
        {
            this.note = note;
            this.showNotes = false;
            this.showCreateNote = false;
            this.showNote = true;
        }
    }
});
