const { QueryType } = require("discord-player");
const player = require("../../client/player");

module.exports = {
    name: "play",
    description: "Add a song to queue and plays it.",
    options: [
        {
            name: "song",
            description: "Song to search for or the link of the song.",
            type: "STRING",
            required: true,
        },
    ],
    run: async (client, interaction) => {
        const songTitle = interaction.options.getString("song");

        if (!interaction.member.voice.channel)
            return interaction.followUp({
                content: "<a:emoji_126:978847047140659250> **You must join a voice channel to use that <a:iHeart_Red:987786796299603988>**",
            });
        if (interaction.guild.me.voice?.channel && interaction.member.voice.channel.id !== interaction.guild.me.voice.channel.id)
            return interaction.followUp({
                content: `:no_entry_sign: You must be listening in **${interaction.guild.me.voice.channel.name}** to use that!`
            })
        const queue = await player.createQueue(interaction.guild, {
            leaveOnEnd: true,
			leaveOnStop: true,
            metadata: {
                channel: interaction.channel,
                voice: interaction.member.voice.channel
            }
        });
        try {
            if (!queue.connection) await queue.connect(interaction.member.voice.channel);
        } catch {
            queue.destroy();
            return await interaction.reply({ content: `<a:emoji_126:978847047140659250> **Couldn't join your voice channel!**`})
        }
        interaction.followUp({ content: `<a:loading:978343209593888838> Searching ... <a:kind:987780537169104946> (\`${songTitle}\`)`, fetchReply: true }).then(async m => {
                    const searchResult = await player.search(songTitle, {
            requestedBy: interaction.user,
            searchEngine: QueryType.AUTO,
        });
            if (!searchResult.tracks.length) return m.edit({content: `**<a:yahya_false:982713113092689983> Not found.**`})
            m.edit({content: `<a:music_2:975012306633240576> **${searchResult.tracks[0].title}** Added to **Queue** (${searchResult.tracks[0].duration})! <a:kind:987780537169104946>`})
            searchResult.playlist
            ? queue.addTracks(searchResult.tracks)
            : queue.addTrack(searchResult.tracks[0]);

        if (!queue.playing) await queue.play();
        })
    },
};
