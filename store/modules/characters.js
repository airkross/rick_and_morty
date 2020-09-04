export default {
    state: {
        characters: []
    },
    mutations: {
        setCharacters(state, characters) {
            state.characters = characters;
            console.log(characters)
        }
    },
    actions: {
        async getFetchCharacters({
            commit
        }) {
            await fetch('https://rickandmortyapi.com/api/character')
                .then(resp => resp.json())
                .then(respJSON => commit('setCharacters', respJSON))
                .catch(e => console.log(e))
        }
    },
    getters: {
        getCharacters(state) {
            return state.characters
        }
    }

}