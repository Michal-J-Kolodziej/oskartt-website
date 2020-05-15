/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

console.log(process.env.GATSBY_SPOTIFY_API_KEY);

const getYoutubeData = async () => {

    const oskarID = "UC2tut2uPQ03NJuWt9vERSlw";
    const link = `https://www.googleapis.com/youtube/v3/channels?part=statistics&id=${oskarID}&key=${process.env.GATSBY_YOUTUBE_API_KEY}`;
    return await (await fetch(link)).json();
}

console.log(getYoutubeData);