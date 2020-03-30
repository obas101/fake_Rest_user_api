<template>
    <div>
        
            <form @submit="onSubmit">
                <input class="textI" type="text" placeholder="Add Names..." v-model="name">
                <input class="btnI" type="submit" value="ADD">
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
form {
    display: flex;
}
.textI {
    flex: 8;
}
.btnI {
    flex: 2
}
</style>