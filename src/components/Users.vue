<template>
    <div class="stylus">
<b-list-group>
  <b-list-group-item v-bind:key="user.id" v-for="user in allUsers">{{user.name}}</b-list-group-item>
</b-list-group>

</div>

</template>

<script>
import { mapGetters, mapActions } from 'vuex';

export default {
    name: 'Users',
    methods: {
        ...mapActions(['fetchNames'])
    },
    computed: mapGetters(['allUsers']),
    created() {
        this.fetchNames();
    }
}
</script>

<style scoped>
    .mb-2{
        display: inline-block;
    }
</style>