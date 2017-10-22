<template>
    <div>
        <div v-if="!showAdditionalNote" class="container">
            <h2>{{ note.title }}</h2>
            <p>{{ note.note }}</p>
            <button type="submit" class="btn btn-default pull-left" @click="backToNotes">< Back To Overview</button>
            <button type="submit" class="btn btn-success pull-right" @click="toggleShowAdditionalNote">Add Additional Note ></button>
        </div>

        <additional-note v-if="showAdditionalNote" :note="note" @addComment="addComment" @showNote="toggleShowAdditionalNote"></additional-note>

        <div id="comments" class="container">
            <div class="panel panel-primary" v-for="comment in comments.comments">
                <div class="panel-heading">
                    <h3 class="panel-title pull-left">{{ comment.user.name }}</h3>
                    <span class="pull-right">{{ timestamp.postedOn(comment.created_at) }}</span>
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
                comments: {},
                timestamp: new timestamp()
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
            }
        }
    }
</script>

<style lang="scss">
    #comments {
        margin-top:30px;

        .panel-heading {
            overflow: auto;
        }
    }
</style>