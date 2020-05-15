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
  // get data from GitHub API at build time
  const result = await fetch(`https://www.googleapis.com/youtube/v3/channels?part=statistics&id=UC2tut2uPQ03NJuWt9vERSlw&key=AIzaSyCYQNff-B28PImGKYyjqBWdu3aYUhIoUY4`)
  const resultData = await result.json()

console.log("EEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
console.log(resultData);

  // create node for build time data example in the docs
//   createNode({
//     // nameWithOwner and url are arbitrary fields from the data
//     nameWithOwner: resultData.full_name,
//     url: resultData.html_url,
//     // required fields
//     id: `example-build-time-data`,
//     parent: null,
//     children: [],
//     internal: {
//       type: `Example`,
//       contentDigest: createContentDigest(resultData),
//     },
//   })
}