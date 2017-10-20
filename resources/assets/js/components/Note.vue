<template>
    <div>
    <div class="container">
        <h2>{{ singleNote.title }}</h2>
        <p>{{ singleNote.note }}</p>
        <button type="submit" class="btn btn-default pull-left" @click="backToNotes">< Back To Overview</button>
        <button type="submit" class="btn btn-success pull-right">Add Additional Note ></button>
    </div>

    <additional-note v-if="showAdditionalNote" @showAdditionalNote="toggleShowAdditionalNote"></additional-note>
    </div>
</template>

<script>
    export default {
        props : ['singleNote'],
        data: {
            return() {
                showAdditionalNote: false
            }
        },
        methods: {
            backToNotes()
            {
                this.$emit('shownotes');
            }
        }
    }
</script>