import { Box, Flex, Image, Heading } from "@chakra-ui/react";
import Certification from "../components/certification";
import Banner from "../components/banners/banner";

export default function Certifications() {
  return (
    <Box>
        <Banner>
          <Flex direction="column" p={{base: "25px", md: "0"}}>
                <Heading textAlign="center" size="xl">List of Completed <Box as="span" color="maroon">Certifications</Box></Heading>
          </Flex>
          <Flex align="center">
            <Image
              src="./cert_logos/banner2_img.png"
              boxSize="400px"></Image>
          </Flex>
        </Banner>
        <Certification />
    </Box>
  );
}
