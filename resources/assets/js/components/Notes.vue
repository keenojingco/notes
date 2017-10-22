<template>
    <div>
        <div class="container">
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
                            <td><a href="#" @click.prevent="showNote(note)">{{ note.title }}</a></td>
                            <td>{{ postedOn(note.created_at) }}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <button class="btn btn-success" @click="createNote">CREATE A NEW NOTE</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                notes: [],
                showList: true,
            }
        },

        mounted() {
            this.getNotes();
        },

        methods: {
            getNotes() {
                axios.get('/note').then(response => {
                    this.notes = response.data;
                });
            },

            showNote(note) {
                this.$emit('shownote', note);
            },

            createNote()
            {
                this.$emit('createnote');
            },

            postedOn(timestamp)
            {
                return moment().subtract(timestamp, 'days').calendar();
            }
        }
    }
</script>