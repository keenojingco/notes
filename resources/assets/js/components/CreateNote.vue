<template>
    <div class="container">
        <div>
            <h2>New Note</h2>
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control" v-model="note.title">
            </div>
            <div class="form-group">
                <label>Note</label>
                <textarea class="form-control" v-model="note.note"></textarea>
            </div>
            <button type="submit" class="btn btn-default pull-left" @click="backToNotes">Cancel</button>
            <button type="submit" class="btn btn-success pull-right" @click="createNote">Add Note</button>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                note: {
                    title: '',
                    note: ''
                },
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
                    this.$emit('noteCreated');
                });
            },

            backToNotes()
            {
                this.$emit('showNotes');
            }
        }
    }
</script>