import React from "react";
import {
    useColorMode,
    useColorModeValue,
    Flex,
    Button,
    Heading,
    IconButton,
    Divider,
    Box,
    Icon,
} from "@chakra-ui/react";
import {
    HamburgerIcon,
    CloseIcon,
    MoonIcon,
    SunIcon,
} from "@chakra-ui/icons";
import { useState } from "react";
import { BiNews, BiCertification, BiFileBlank, BiHome } from "react-icons/bi";
import NextLink from "next/link";

function Nav() {
    const { colorMode, toggleColorMode } = useColorMode()
    const [display, changeDisplay] = useState("none")
    const colormode_icon = colorMode === "light" ? <MoonIcon /> : <SunIcon />
    const color = useColorModeValue("white", "#262e40")
    return (
        <Box
            position="sticky"
            top="0"
            bgColor={color}
            zIndex="1">
            <Flex justifyContent="space-between">
                <Flex
                align="center">
                    <Heading size="lg" pl="5">
                        <NextLink href="/" passHref>Nick Cerne</NextLink>
                    </Heading>
                </Flex>
                <Flex
                    align="center">
                    <Flex
                        display={["none", "none", "flex", "flex"]}>
                        <NextLink href="/blog" passHref>
                            <Button
                                leftIcon={<Icon as={BiNews} w={5} h={5} />}
                                as="a"
                                variant="ghost"
                                aria-label="Blog"
                                my={2.5}
                                w="100%">Blog
                            </Button>
                        </NextLink>
                        <NextLink href="/certifications" passHref>
                            <Button
                                leftIcon={<Icon as={BiCertification} w={5} h={5} />}
                                as="a"
                                variant="ghost"
                                aria-label="Certifications"
                                my={2.5}
                                w="150%">Certifications
                            </Button>
                        </NextLink>
                        <NextLink href="/resume" passHref>
                            <Button
                                leftIcon={<Icon as={BiFileBlank} w={5} h={5} />}
                                as="a"
                                variant="ghost"
                                aria-label="Resume"
                                my={2.5}
                                w="100%">Resume
                            </Button>
                        </NextLink>
                    </Flex>
                    <IconButton
                        aria-label="Open Menu"
                        size="lg"
                        variant="ghost"
                        mr={2}
                        icon={<HamburgerIcon />}
                        display={["flex", "flex", "none", "none"]}
                        onClick={() => changeDisplay("flex")} />

                    <IconButton
                        icon={colormode_icon}
                        onClick={toggleColorMode}
                        variant="ghost"
                    ></IconButton>
                </Flex>
                <Flex
                    w="100%"
                    bgColor="gray.50"
                    zIndex={1}
                    h="45vh"
                    pos="fixed"
                    top="0"
                    left="0"
                    overflowY="auto"
                    flexDir="column"
                    display={display}>
                    <Flex justify="flex-end">
                        <IconButton
                            mt={2}
                            mr={2}
                            color="black"
                            aria-label="Close Menu"
                            variant="ghost"
                            size="lg"
                            icon={<CloseIcon />}
                            onClick={() => changeDisplay("none")}/>
                    </Flex>
                    <Flex
                        flexDir="column"
                        align="center">
                        <NextLink href="/" passHref>
                            <Button
                                leftIcon={<Icon as={BiHome} w={5} h={5} />}
                                as="a"
                                variant="ghost"
                                aria-label="Home"
                                my={5}
                                textColor="black"
                                w="100%">Home
                            </Button>
                        </NextLink>
                        <NextLink href="/blog" passHref>
                            <Button
                                leftIcon={<Icon as={BiNews} w={5} h={5} />}
                                as="a"
                                variant="ghost"
                                aria-label="Blog"
                                my={5}
                                textColor="black"
                                w="100%">Blog
                            </Button>
                        </NextLink>
                        <NextLink href="/certifications" passHref>
                            <Button
                                leftIcon={<Icon as={BiCertification} w={5} h={5} />}
                                as="a"
                                variant="ghost"
                                aria-label="Certifications"
                                my={5}
                                textColor="black"
                                w="100%">Certifications
                            </Button>
                        </NextLink>
                        <NextLink href="/resume" passHref>
                            <Button
                                leftIcon={<Icon as={BiFileBlank} w={5} h={5} />}
                                as="a"
                                variant="ghost"
                                aria-label="Resume"
                                my={5}
                                textColor="black"
                                w="100%">Resume
                            </Button>
                        </NextLink>
                    </Flex>
                </Flex>
            </Flex>
            <Divider boxShadow="lg"/>
        </Box>
    );
}

export default Nav