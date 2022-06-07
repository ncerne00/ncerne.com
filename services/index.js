import { gql, GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.NEXT_PUBLIC_GRAPHCMS_URL, {
  headers: {
    "Authorization" : process.env.NEXT_PUBLIC_GRAPH_CMS_TOKEN
  }
});

export const getPosts = async () => {
  const query = gql`
  query MyQuery {
    posts {
      postContents {
        markdown
      }
      title
      excerpt
      author {
        headshot {
          url
        }
        name
      }
      featuredImage {
        url
      }
      slug
      createdAt
    }
  }
`;
const data = await client.request(query)
const posts = data.posts
return posts
}

export const getArticle = async (slug) => {
  const query = gql`
  query MyQuery($slug : String!) {
    post(where: {slug: $slug}) {
      author {
        name
        bio
        headshot {
          url
        }
      }
      featuredImage {
        url
      }
      createdAt
      slug
      postContents {
        markdown
      }
      title
    }
  }
  
  `;
  const result = await client.request(query, { slug });
  return result.post;

};