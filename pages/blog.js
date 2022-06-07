import { Flex, Text, Box, Center } from '@chakra-ui/react'
import PostPreview from "../components/blog/postPreview"
import { getPosts } from '../services';

export default function Home({ posts }) {
  return (
    <Flex direction="column" minHeight="100vh" w="100%">
      <Flex justifyContent="center">
        <Flex>
          <Text fontSize={{ base: "25px", md: "50px" }}>Nick's Security Corner</Text>
        </Flex>
      </Flex>
      <Flex justifyContent="center">
        <Text fontSize="20px" fontStyle="oblique">All things related to Cybersecurity</Text>
      </Flex>
      <Flex justifyContent="center">
        <PostPreview posts={posts} />
      </Flex>
    </Flex>
  )
}

export const getStaticProps = async () => {
  const posts = await (getPosts()) || [];
  return {
    props: {
      posts
    }
  }
}
