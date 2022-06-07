import { Text, Flex, Box, Image, UnorderedList, Center, Divider, Code } from "@chakra-ui/react";
import { ReactMarkdown } from "react-markdown/lib/react-markdown";
import Toc from "react-toc"
import { CalendarIcon } from "@chakra-ui/icons"
import React, {useEffect, useState} from "react";
import moment from "moment";
import slugify from "slugify";
import Link from "next/link"

function Article({ posts }) {
    const unparsedMarkdown = JSON.parse(JSON.stringify(posts.postContents.markdown))
    const markdown = unparsedMarkdown.replace(/\\/g, "")

    useEffect(() => {
        var shiftWindow = function() { scrollBy(0, 1) };
        if (location.hash) shiftWindow();
        window.addEventListener("hashchange", shiftWindow())
    })   
      
    return(
        <Flex>
            <Flex w={{base: "100%", md: "60%"}} justifyContent="center">
                <Flex w={{base: "90%", md: "70%"}} boxShadow="dark-lg" justifyContent="center">      
                        <Flex direction="column" p="8">
                            <Flex justifyContent="center"><Image src={posts.featuredImage.url} boxSize="350px"></Image></Flex>
                            <Flex direction="column">
                                <Flex justifyContent="center" p="3"><Image src={posts.author.headshot.url} boxSize="25px" borderRadius="100%" mx="3" bgColor="blackAlpha.300"></Image><Text>{posts.author.name}</Text><Flex direction="column" justifyContent="center"><CalendarIcon mr="1" ml="3"/></Flex><Text>{moment(posts.createdAt).format("MMM DD yyyy")}</Text></Flex>
                                <Flex justifyContent="center"><Text fontWeight="bold" fontSize="2xl" mb="10px">{posts.title}</Text></Flex>
                                </Flex>
                            <ReactMarkdown components={{
                                h1({ children }) {
                                    /* Gets text contents of h1 node and creates a slug */ 
                                    let slug = slugify( {children}.children[0].toString().toLowerCase());
                                    return <Flex direction="column"><Text id={slug} fontSize="30px" style={{scrollMarginTop: 100}}>{children}</Text> <Divider /> </Flex>
                                },
                                code({ children }) {
                                    return <Text fontFamily="mono" display="inline">{children}</Text>
                                },
                                pre({ children }) {
                                    return <Code p="5px"  display="block" borderRadius="5px" whiteSpace="pre" m="10px">{children}</Code>
                                },
                                p({ children }) {
                                    return <Center><Box justifyContent="center"><Text>{children}</Text> <br/></Box></Center>
                                }


                            }}>{markdown}</ReactMarkdown>
                        </Flex>
                </Flex>
            </Flex>
            <Flex >
                <Flex direction="column" position="sticky" top="200px" left="100px" h="70vh" display={{base: 'none', md: 'flex'}}>
                    <Toc markdownText={markdown} className={"customClassName"} ></Toc>
                </Flex>
            </Flex>
        </Flex>
    )
}

export default Article
