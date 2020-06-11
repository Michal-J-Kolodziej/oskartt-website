process.env.NODE_ENV != 'production' ? require('dotenv').config({path: `./.env.development`}) : null; 
const fetch = require(`node-fetch`);
const cheerio = require('cheerio');
const puppeteer = require('puppeteer');


exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {

  //Facebook
  const resultFacebook = await fetch(`https://graph.facebook.com/v7.0/556344861218935/?fields=fan_count&access_token=${process.env.GATSBY_FACEBOOK_API_KEY}`)
  const resultDataFacebook = await resultFacebook.json()

  createNode({
    likes: resultDataFacebook.fan_count,
    
    id: `facebook`,
    parent: null,
    children: [], 
    internal: {
      type: `Facebook`,
      contentDigest: createContentDigest(resultDataFacebook),
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

  createNode({
    followers: resultDataSpotify.followers.total,
    
    id: `spotify`,
    parent: null,
    children: [],
    internal: {
      type: `Spotify`,
      contentDigest: createContentDigest(resultDataSpotify),
    },
  })
  

  //Soundcloud
  const resultSoundcloud = await fetch(`https://api.soundcloud.com/users/oskarttofficial?consumer_key=${process.env.GATSBY_SOUNDCLOUD_API_KEY}`)
  const resultDataSoundcloud = await resultSoundcloud.json()

  createNode({
    followers: resultDataSoundcloud.followers_count,
    
    id: `soundcloud`,
    parent: null,
    children: [],
    internal: {
      type: `Soundcloud`,
      contentDigest: createContentDigest(resultDataSoundcloud),
    },
  })
  

  //Instagram
  // // const instagramEndpoint = "https://www.instagram.com/oskarttofficial/?__a=1";
  const instagramEndpoint = "https://www.instagram.com/oskarttofficial/";
  // const resultInstagram = await fetch(instagramEndpoint)
  const resultInstagram = await fetch(instagramEndpoint)
  const resultDataInstagram = await resultInstagram.text()

  const browser = await puppeteer.launch( {headless: true});
  const page = await browser.newPage();

  await page.goto('https://www.instagram.com/oskarttofficial/');

  await page.waitFor(5000);

  const data = await page.evaluate( () => {
      const igFollowers = document.querySelectorAll('li > a.-nal3 > span.g47SY ')[1].textContent;
      return igFollowers;
  });
  console.log("-----------------------------");
  console.log(data);
  await browser.close();
  createNode({
    followers: data,
    
    id: `instagram`,
    parent: null,
    children: [],
    internal: {
      type: `Instagram`,
      contentDigest: createContentDigest(resultDataInstagram),
    },
  })
  

  //Youtube 
  const resultYoutube = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC2tut2uPQ03NJuWt9vERSlw&key=${process.env.GATSBY_YOUTUBE_API_KEY}`)
  const resultDataYoutube = await resultYoutube.json();

  createNode({
    subscribers: resultDataYoutube.items[0].statistics.subscriberCount,
    
    id: `youtube`,
    parent: null,
    children: [],
    internal: {
      type: `Youtube`,
      contentDigest: createContentDigest(resultDataYoutube),
    },
  });
  

}