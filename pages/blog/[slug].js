import { useRouter } from 'next/router'
import Article from '../../components/blog/article'
import { Flex } from '@chakra-ui/react'
import { getArticle, getPosts } from '../../services'

const Post = ({ post }) => {
  const router = useRouter()
  return(
      <Flex justifyContent="space-around">
          <Article posts={post}/>
      </Flex>
  ) 
}

export default Post

export async function getStaticProps( { params } ) {
    const data = await getArticle(params.slug);
    return {
        props: {
            post: data,
        },
    };
}

export async function getStaticPaths() {
    const posts = await getPosts();
    return {
        paths: posts.map(({ slug }) => ({ params: { slug } })),
        fallback: false,
    };
}