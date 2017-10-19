<template>
    <div class="container">
        <div>
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="note.title">
            </div>
            <div class="form-group">
                <label>Note</label>
                <textarea class="form-control" v-model="note.note"></textarea>
            </div>
            <button type="submit" class="btn btn-default pull-left" @click="toggleShowList">Cancel</button>
            <button type="submit" class="btn btn-success pull-right" @click="createNote">Add Note</button>
        </div>
    </div>
</template>

<script>
    import Store from '../store';
    export default {
        data() {
            return {
                shared: Store,
                note: {
                    title : '',
                    note: ''
                },
                errors: []
            }
        },

        methods: {
            createNote() {
                axios.post('/note', {
                    title: this.note.title,
                    note: this.note.note,
                }).then(response => {
                    this.note.title = '';
                    this.note.note = '';
                    this.getNotes();
                });
            }
        }
    }
</script>