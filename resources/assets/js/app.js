require('./bootstrap');

window.Vue = require('vue');

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
        singleNote : {}
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
            this.singleNote = note;
            this.showNotes = false;
            this.showCreateNote = false;
            this.showNote = true;
        }
    }
});
