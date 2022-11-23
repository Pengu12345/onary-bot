const {fetch} = require("cross-fetch")

module.exports = {
    getPokemonByName: async (name) => {
        try {
            const res = await fetch("https://pokeapi.co/api/v2/pokemon/" + name);

            if(res.status >= 400 ) throw new Error("Bad response from server");
            const json = res.json()

            return json

        } catch(error) {
            return undefined
        }

    }

}