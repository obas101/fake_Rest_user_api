<template>
    <div class="stylus">
<b-list-group>
  <b-list-group-item v-bind:key="user.id" v-for="user in allUsers" class="inline">{{user.name}}
      <i @click="deleteUser(user.id)" class="fas fa-trash-alt icon"></i>
  </b-list-group-item>
</b-list-group>

</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Users',
    methods: {
        ...mapActions(['fetchNames', 'deleteUser']),
    },
    computed: mapGetters(['allUsers']),
    created() {
        this.fetchNames();
    }
}
</script>

<style scoped>
    .inline{
        display: flex
    }
    .icon {
        /* position: absolute; */
        flex: 10rem;
        position: absolute;
        margin-left: 80%; 
        cursor: pointer;       

    }
    
</style>