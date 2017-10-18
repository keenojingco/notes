<template>
    <div class="container">
        <div class="row">
            <div class="col-md-12">
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
                                <td>{{ note.title }}</td>
                                <td>{{ note.created_at }}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                notes: []
            }
        },
        mounted() {
            axios.get('/note').then(response => {
                this.notes = response.data;
            });
        }
    }
</script>