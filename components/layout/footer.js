import React from "react";
import {
    Text,
    Flex,
    Grid,
    GridItem,
    useColorModeValue,
    IconButton,
} from "@chakra-ui/react";
import {
     AiFillGithub,
     AiFillLinkedin,
     } from "react-icons/ai";
import { FcLike } from "react-icons/fc";
import NextLink from "next/link";

function Footer() {
    const color = useColorModeValue("#ebf2fc", "#12161f")
    return (
        <Flex justifyContent="space-around" bgColor={color} py="3" direction={{ base: "column", md: "row"}} align="center">
            <Flex w={{base: "", md: "33.33%"}} align="center" justifyContent="center">
                <Text mr="1">Designed and Developed with </Text>
                <FcLike/>
            </Flex>
            <Flex w={{base: "", md: "33.33%"}} justifyContent="center">
                <Text>Nick Cerne © 2022</Text>
            </Flex>
            <Flex w={{base: "", md: "33.33%"}} justifyContent="center">
                <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                    <GridItem h="10"><NextLink href="https://github.com/ncerne00" passHref><IconButton variant="ghost" icon={<AiFillGithub />}></IconButton></NextLink></GridItem>
                    <GridItem h="10"><NextLink href="https://www.linkedin.com/in/nick-cerne" passHref><IconButton variant="ghost" icon={<AiFillLinkedin/>}></IconButton></NextLink></GridItem>
                </Grid>
            </Flex>
        </Flex>
    );
}

export default Footer