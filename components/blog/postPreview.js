import { Text, Flex, Box, Heading, Image, Center } from "@chakra-ui/react";
import { CalendarIcon } from "@chakra-ui/icons"
import moment from "moment";
import NextLink from "next/link"

function PostPreview({posts}) {
    return(
        <Flex direction={{base: "column", md: "row"}}>
            {posts.map((post, index) => (
                <Flex key={index} direction="column" bgColor="blackAlpha.200" borderRadius="5" mx={{base: "", md: "10px"}} my={{base: "10px", md: "0"}}>
                    <NextLink href={`/blog/${encodeURIComponent(post.slug)}`}><Image src={post.featuredImage.url} boxSize="250px" cursor="pointer"></Image></NextLink>
                    <Center mb="15px"><Text fontWeight="bold" fontSize="20px">{post.title}</Text></Center>
                    <Flex justifyContent="center"><Image src={post.author.headshot.url} boxSize="25px" borderRadius="100%" bgColor="blackAlpha.300"></Image><Text>{post.author.name}</Text></Flex>
                    <Flex justifyContent="center"><Flex direction="column" justifyContent="center"><CalendarIcon mx="2"/></Flex><Text fontStyle="oblique" fontSize="">{moment(post.createdAt).format("MMM DD YYYY")}</Text></Flex>
                </Flex>
            ))}
        </Flex>
    )
}

export default PostPreview