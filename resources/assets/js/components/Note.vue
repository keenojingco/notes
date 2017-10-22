<template>
    <div>
        <div v-if="!showAdditionalNote" class="container">
            <h2>{{ note.title }}</h2>
            <p>{{ note.note }}</p>
            <button type="submit" class="btn btn-default pull-left" @click="backToNotes">< Back To Overview</button>
            <button type="submit" class="btn btn-success pull-right" @click="toggleShowAdditionalNote">Add Additional Note ></button>
        </div>

        <additional-note v-if="showAdditionalNote" :single-note="note" @addComment="addComment"></additional-note>

        <div class="container" v-for="comment in comments.comments">
            <div class="panel panel-primary">
                <div class="panel-heading" style="overflow:auto">
                    <h3 class="panel-title pull-left">{{ comment.user.name }}</h3>
                    <span class="pull-right">{{ postedOn(comment.created_at) }}</span>
                </div>
                <div class="panel-body">{{ comment.comment }}</div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        props : ['note'],
        data() {
            return {
                showAdditionalNote: false,
                comments: {}
            }
        },

        mounted() {
            this.getComments()
        },

        methods: {
            getComments() {
                axios.get('/comment/note/' + this.note.id).then(response => {
                    this.comments = response.data;
                });
            },

            addComment(){
                this.showAdditionalNote = false;
                this.getComments();
            },

            backToNotes()
            {
                this.$emit('shownotes');
            },

            toggleShowAdditionalNote()
            {
                this.showAdditionalNote = !this.showAdditionalNote;
            },

            postedOn(timestamp)
            {
                return moment().subtract(timestamp, 'days').calendar();
            }
        }
    }
</script>