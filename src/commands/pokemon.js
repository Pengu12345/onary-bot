const {SlashCommandBuilder} = require('discord.js')
const {getPokemonByName} = require('../util/pokemon')

module.exports = {
    data: new SlashCommandBuilder()
        .setName('pokemon_name')
        .setDescription("Retrieves a Pokemon from the PokeAPI database, by it's name")
        .addStringOption(option =>
            option.setName('name')
                .setDescription('The name of the Pokemon')
                .setRequired(true)),

    async execute(interaction) {
        let name = interaction.options.getString('name');
        name = name.toLowerCase()

        const res = await getPokemonByName(name)
        if(res === undefined) {
            await interaction.reply("Couldn't find the pokemon with name " + name + ".")
            return
        }

        const artwork = res.sprites.other["official-artwork"].front_default
        await interaction.reply(
            `Found Pokémon with the name ${name} ! \n${artwork}
        `)

    },
};
