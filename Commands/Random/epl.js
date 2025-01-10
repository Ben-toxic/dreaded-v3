module.exports = async (context) => {

    const { client, m, text, fetchJson } = context;

    try {

        const data = await fetchJson('https://api.dreaded.site/api/standings/PL');

        const standings = data.data;

        const message = `EPL TABLE STANDINGS\n\n${standings}`;

        await m.reply(message);

    } catch (error) {
        m.reply('Something went wrong. Unable to fetch EPL standings.');
    }

}