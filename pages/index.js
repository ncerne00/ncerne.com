import Banner from "../components/banners/banner";
import Type from "../components/banners/Type";
import About from "../components/about";
import { Box, Flex, Heading, Image, useColorModeValue} from "@chakra-ui/react";

export default function Home() {
  const color_headshotbg = useColorModeValue("rgb(197, 209, 224, .50)", "rgb(55, 65, 87, .50)");
  const color_border = useColorModeValue("rgb(128, 141, 158, .50)", "rgb(128, 141, 158, .50)");
  return (
    <Box>
      <Banner>
      <Flex direction="column" p={{base: "25px", md: "0"}}>
                <Heading size="md">Hello!</Heading>
                <Heading size="xl">I'm <Box as="span" color="maroon">Nick Cerne</Box></Heading>
                <Flex color="maroon" fontSize={{base: "15px", md: "xl"}} py="6" w={{base: "275px", md: "365px"}}>
                    <Type/>
                </Flex>
            </Flex>
            <Flex align="center" bgColor={color_headshotbg} border="8px" borderColor={color_border}>
                <Image
                    src="./headshot.png"
                    boxSize="300px"></Image>
            </Flex>
      </Banner>
      <About/>
    </Box>
  );
}
