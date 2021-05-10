exports.createPages = async ({ graphql }) => {
  await graphql(/* GraphQL */ `
    query MyQuery {
      allWpPost(
        filter: {
          terms: { nodes: { elemMatch: { termTaxonomyId: { eq: 1 } } } }
        }
      ) {
        nodes {
          title
        }
      }
    }
  `)
}
