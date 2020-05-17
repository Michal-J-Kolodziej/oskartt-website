process.env.NODE_ENV != 'production' ? require('dotenv').config({path: `./.env.development`}) : null; 
const fetch = require(`node-fetch`);


exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  //Youtube 
  const resultYoutube = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC2tut2uPQ03NJuWt9vERSlw&key=${process.env.GATSBY_YOUTUBE_API_KEY}`)
  const resultDataYoutube = await resultYoutube.json();

  createNode({
    subscribers: resultDataYoutube.items[0].statistics.subscriberCount,
    // required fields
    id: `youtube`,
    parent: null,
    children: [],
    internal: {
      type: `Youtube`,
      contentDigest: createContentDigest(resultDataYoutube),
    },
  });

  //Instagram
  const resultInstagram = await fetch(`https://www.instagram.com/oskarttofficial/?__a=1`)
  const resultDataInstagram = await resultInstagram.json()

  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    followers: resultDataInstagram.graphql.user.edge_followed_by.count,
    // required fields
    id: `instagram`,
    parent: null,
    children: [],
    internal: {
      type: `Instagram`,
      contentDigest: createContentDigest(resultDataInstagram),
    },
  })

  //Soundcloud
  const resultSoundcloud = await fetch(`https://api.soundcloud.com/users/oskarttofficial?consumer_key=${process.env.GATSBY_SOUNDCLOUD_API_KEY}`)
  const resultDataSoundcloud = await resultSoundcloud.json()

  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    followers: resultDataSoundcloud.followers_count,
    // required fields
    id: `soundcloud`,
    parent: null,
    children: [],
    internal: {
      type: `Soundcloud`,
      contentDigest: createContentDigest(resultDataSoundcloud),
    },
  })



  //Spotify

    const auth = await fetch("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + Buffer.from(`${process.env.GATSBY_SPOTIFY_CLIENT_ID}:${process.env.GATSBY_SPOTIFY_CLIENT_SECRET}`).toString('base64')
        },
        body: `grant_type=client_credentials`
    });

  const token = await auth.json();

  const resultSpotify = await fetch("https://api.spotify.com/v1/artists/2OVetJ63mx7fvwt2xKPfYY", {
    headers: {
      Authorization: "Bearer " + token.access_token
    }
  })
  const resultDataSpotify = await resultSpotify.json();

  // create node for build time data example in the docs
  createNode({
    followers: resultDataSpotify.followers.total,
    // required fields
    id: `spotify`,
    parent: null,
    children: [],
    internal: {
      type: `Spotify`,
      contentDigest: createContentDigest(resultDataSpotify),
    },
  })


  //Facebook
  const resultFacebook = await fetch(`https://graph.facebook.com/v7.0/556344861218935/?fields=fan_count&access_token=${process.env.GATSBY_FACEBOOK_API_KEY}`)
  const resultDataFacebook = await resultFacebook.json()

  // create node for build time data example in the docs
  createNode({
    // nameWithOwner and url are arbitrary fields from the data
    likes: resultDataFacebook.fan_count,
    // required fields
    id: `facebook`,
    parent: null,
    children: [], 
    internal: {
      type: `Facebook`,
      contentDigest: createContentDigest(resultDataFacebook),
    },
  })

}