<template>
    <div class="stylus">
<b-list-group>
  <b-list-group-item v-bind:key="user.id" v-for="user in allUsers" class="inline">{{user.name}}
      <i class="fas fa-trash-alt"></i>
  </b-list-group-item>
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
    .inline{
        display: inline-block;
    }
    i {
        position: absolute;
        margin-left: 5rem;
    }
</style>