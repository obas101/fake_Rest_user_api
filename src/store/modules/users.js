import axios from 'axios';

const state = {
    users: []
};

const getters = {
    allUsers: state => state.users
};

const actions = {
    async fetchNames({ commit }) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        commit('setNames', response.data);
    }, 
    async addUsers({ commit }, name) {
        const response = await axios.post('https://jsonplaceholder.typicode.com/users', name);
        commit('newName', response.data)
    }
};

const mutations = {
    setNames: (state, users) => (state.users = users),
    newName: (state, user) => state.users.unshift(user)
};

export default {
    state,
    getters,
    actions,
    mutations
}