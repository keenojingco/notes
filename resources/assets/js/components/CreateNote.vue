<template>
    <div class="container">
        <form>
            <div class="form-group">
                <label>Title</label>
                <input type="text" class="form-control">
            </div>
            <div class="form-group">
                <label>Note</label>
                <textarea class="form-control"></textarea>
            </div>
            <button type="submit" class="btn btn-default pull-left">Cancel</button>
            <button type="submit" class="btn btn-success pull-right">Add Note</button>
        </form>
    </div>
</template>

<script>
    export default {
        mounted() {
            console.log('Component mounted.')
        }
    }
</script>