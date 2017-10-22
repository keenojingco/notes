<template>
	<div class="container">
		<h2>Additional Note</h2>
		<div class="form-group">
            <label>Note</label>
            <textarea class="form-control" v-model="comment"></textarea>
        </div>
        <button class="btn btn-default pull-left" @click="backToNote">Cancel</button>
        <button class="btn btn-success pull-right" @click="addComment">Add Note ></button>
	</div>
</template>

<script>
	export default {
        props: ['note'],

		data() {
			return {
				comment: ''
			}
		},

		methods: {
            addComment() {
                axios.post('/comment', {
                    comment: this.comment,
                    note_id: this.note.id
                }).then(response => {
                    this.$emit('addComment');
                });
            },

            backToNote() {
                this.$emit('showNote');
            }
        }
	}
</script>