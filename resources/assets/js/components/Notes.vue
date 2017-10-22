<template>
    <div>
        <div class="container" v-if="!showCreateNote">
            <h2>Notes Overview</h2>
            <div class="table-responsive">
                <table class="table">
                    <thead>
                        <tr>
                            <td>Created by</td>
                            <td>Title</td>
                            <td>Date</td>
                        </tr>
                    </thead>
                    <tbody>
                        <tr v-for="note in notes">
                            <td>{{ note.user.name }}</td>
                            <td><a href="#" @click.prevent="getNote(note)">{{ note.title }}</a></td>
                            <td>{{ postedOn(note.created_at) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button class="btn btn-success" @click="toggleShowCreateNote">CREATE A NEW NOTE</button>
        </div>

        <create-note v-if="showCreateNote" @showNotes="toggleShowCreateNote" @noteCreated="noteCreated"></create-note>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                notes: [],
                showCreateNote: false,
            }
        },

        mounted() {
            this.getNotes();
        },

        methods: {
            // Get all notes
            getNotes() {
                axios.get('/note').then(response => {
                    this.notes = response.data;
                });
            },

            // Listener for when the note is created
            noteCreated(){
                this.getNotes();
                this.toggleShowCreateNote();
            },

            // Toggle show and hide of Notes List and Create Note components
            toggleShowCreateNote()
            {
                this.showCreateNote = !this.showCreateNote;
            },

            // Emitter for when a note is selected for viewing
            getNote(note) {
                this.$emit('shownote', note);
            },

            postedOn(timestamp)
            {
                return moment(timestamp).subtract(timestamp, 'days').calendar();
            }
        }
    }
</script>