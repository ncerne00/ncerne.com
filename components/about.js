import React from "react";
import {
    Flex,
    Text,
    Image,
    Box,
    Heading,
    IconButton,
    Grid,
    GridItem,
    Center,
} from "@chakra-ui/react";
import {
    AiFillGithub,
    AiFillLinkedin,
    } from "react-icons/ai";
import NextLink from "next/link";

function About() {
    return (
        <Flex direction="column" gap={6}>
            <Flex justifyContent="Center" align="center" direction={{base: "column", md: "row"}}>
                <Flex direction="column" flexBasis={{base: "0px", md: "700px"}} gap={6} p="6">
                    <Center><Heading>whoami</Heading></Center>
                    <Text>I am a passionate Cybersecurity enthusiast and recent Virginia Tech Alumni.</Text>
                    <Text>At Virginia Tech I had the rewarding experience of serving as club President of CyberVT. This experience has helped me develop skills in both <Box as="span" color="maroon" fontStyle="italic" fontWeight="bold">leadership and mentoring.</Box></Text>
                    <Text>My experiences in Cybersecurity have helped me develop skills including but not limited to <Box as="span" color="maroon" fontStyle="italic" fontWeight="bold">Web Application Security, Network Security, Forensics, and Programming.</Box></Text>
                    <Text>I am currently continuing to nurture my passion for security by working for <Box as="span" color="#780ad1" fontStyle="italic" fontWeight="bold">Bishop Fox</Box> as a Security Consultant II.</Text>
                </Flex>
                <Flex align="center">
                    <Image
                        src="./dog_headshot.jpg"
                        boxSize="200px"
                        borderRadius="50%"></Image>
                </Flex>
            </Flex>
            <Flex direction="column" align="center" gap={4}>
                <Heading>Let's Connect</Heading>
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem h="16"><NextLink href="https://github.com/ncerne00" passHref><IconButton icon={<AiFillGithub />}></IconButton></NextLink></GridItem>
                    <GridItem h="16"><NextLink href="https://www.linkedin.com/in/nick-cerne" passHref><IconButton icon={<AiFillLinkedin />}></IconButton></NextLink></GridItem>
                </Grid>
            </Flex>
        </Flex>
    );
}

export default About