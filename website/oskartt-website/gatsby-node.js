/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fetch = require(`node-fetch`);

// USE process.env.GATSBY_... 

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  //Youtube 
  const resultYoutube = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC2tut2uPQ03NJuWt9vERSlw&key=AIzaSyCYQNff-B28PImGKYyjqBWdu3aYUhIoUY4`)
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
  const resultSoundcloud = await fetch(`https://api.soundcloud.com/users/oskarttofficial?consumer_key=8bcccc3476eaa137a084c9f0c041915f`)
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
    
    const clientID = 'fc847cbd8e6e43c995ef3c40843dcb12';
    const clientSecret = '3bbb9770daf6451a9118e776983f2679';


    const auth = await fetch("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            "Authorization": "Basic " + Buffer.from(`${clientID}:${clientSecret}`).toString('base64')
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



  const facebookToken = "EAADdqYWSffoBAIuZAHVRH6qFOJFq0kdgeGmDDwZCTjEfEsLCbQSfgvZCGSOdzs7ANH0NVDafi3wF4WFMNZBLbt0Q6YkcbosHUoO9B09xrjMgMqtyzivPnSj3FkxHl7gtnfFDMXqeUMvdM1G4VU9pf1xTBTeZAQLY1ZAowJ38IxOrVdzzNwSZAKgt7Xvsi6YAowZD";

  const fbLink = "https://graph.facebook.com/v7.0/556344861218935/?fields=fan_count&access_token=EAADdqYWSffoBAIuZAHVRH6qFOJFq0kdgeGmDDwZCTjEfEsLCbQSfgvZCGSOdzs7ANH0NVDafi3wF4WFMNZBLbt0Q6YkcbosHUoO9B09xrjMgMqtyzivPnSj3FkxHl7gtnfFDMXqeUMvdM1G4VU9pf1xTBTeZAQLY1ZAowJ38IxOrVdzzNwSZAKgt7Xvsi6YAowZD";

}