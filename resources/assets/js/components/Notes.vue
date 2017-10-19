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
                            <tr v-for="note in shared.notes">
                                <td>{{ note.user.name }}</td>
                                <td>{{ note.title }}</td>
                                <td>{{ note.created_at }}</td>
                            </tr>
                        </tbody>
                    </table>
                    <button class="btn btn-success" @click="toggleShowList">CREATE A NEW NOTE</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import Store from '../store';
    export default {
        data() {
            return {
                shared: Store
            }
        },
        mounted() {
            this.getNotes();
        },
        methods: {
            getNotes() {
                axios.get('/note').then(response => {
                    this.shared.notes = response.data;
                });
            },
            toggleShowList(){
                this.shared.showList = !this.shared.showList
            }
        }
    }
</script>