<template>
    <div>
        
            <form @submit="onSubmit">
                <input type="text" placeholder="Add Names..." v-model="name">
                <input type="submit" value="Submit">
            </form>
    
    </div>
</template>

<script>
import {mapActions} from 'vuex';
export default {
    name: 'AddName',
    data(){
        return{
            name: ''
        }
    },
    methods: {
        ...mapActions(['addUsers']),
        onSubmit(e) {
            e.preventDefault();
                let user = { 
            name: this.name
                }

this.addUsers(user)
}
    }
}
</script>

<style scoped>
</style>