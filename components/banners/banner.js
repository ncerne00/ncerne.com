import React from "react";
import {
    Flex,
    Text,
    Image,
    Box,
    Heading,
    useColorModeValue,
} from "@chakra-ui/react";

function Banner(props) {
    const color_bg = useColorModeValue("rgb(235, 242, 252, .50)", "rgb(29, 36, 51, .50)")
    return (
        <Flex justifyContent="space-evenly" align="center" direction={{ base: "column", md: "row" }} bgColor={color_bg} pt="5" h={{base: "", md: "500px"}} mb="10">
            { props.children }
        </Flex>
    );
}

export default Banner