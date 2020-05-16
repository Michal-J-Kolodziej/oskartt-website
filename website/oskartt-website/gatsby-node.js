/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const fetch = require(`node-fetch`);

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
    
    const clientID = Buffer.from('fc847cbd8e6e43c995ef3c40843dcb12').toString('base64');
    const clientSecret = Buffer.from('3bbb9770daf6451a9118e776983f2679').toString('base64');
    console.log(clientID);
    const auth = await fetch("https://accounts.spotify.com/api/token", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
            'Authorization': "Basic " + clientID +  Buffer.from(':').toString('base64') + clientSecret
        },
        body: {
            'grant_type': 'client_credentials'
        }
    });

    console.log(auth);
//   const resultSoundcloud = await fetch(`https://api.soundcloud.com/users/oskarttofficial?consumer_key=8bcccc3476eaa137a084c9f0c041915f`)
//   const resultDataSoundcloud = await resultSoundcloud.json()

//   // create node for build time data example in the docs
//   createNode({
//     // nameWithOwner and url are arbitrary fields from the data
//     followers: resultDataSoundcloud.followers_count,
//     // required fields
//     id: `soundcloud`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `Soundcloud`,
//       contentDigest: createContentDigest(resultDataSoundcloud),
//     },
//   })
}