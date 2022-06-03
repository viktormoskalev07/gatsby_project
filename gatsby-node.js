const crypto = require("crypto");
const axios = require("axios");
exports.createPages = async ({ actions }) => {
  const { createPage } = actions
  createPage({
    path: "/using-dsg",
    component: require.resolve("./src/templates/using-dsg.js"),
    context: {},
    defer: true,
  })
}

exports.sourceNodes = async ({ actions,  createNodeId,createContentDigest  ,getCache}) => {
  const { createNode } = actions;
  const fetchData = () => axios.get('http://backend.i-project.by/results.json');


  const field = await fetchData();
  const fieldData = {
    id:  createNodeId(`PageCounter`),
    data:JSON.stringify( field.data) ,
    parent: `__SOURCE__`,
    internal: {
      type:  "pageCounter",
    },
  }
  fieldData.internal.contentDigest = crypto
    .createHash(`md5`)
    .update(JSON.stringify(fieldData))
    .digest(`hex`);
  createNode(fieldData);
}
