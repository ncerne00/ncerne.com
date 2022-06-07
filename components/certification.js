import React from 'react';
import {
    Text,
    Flex,
    useColorModeValue,
    Image,
    Center,
} from '@chakra-ui/react';
import NextLink from 'next/link';

function Certification() {
    const color = useColorModeValue('blackAlpha.100', 'rgb(65, 73, 84, .50)')
    return (
        <Flex justifyContent="center" direction={{ base: 'column', md: 'row' }} textAlign="center">
            <Flex m={{ base: "", md: "20" }} justifyContent="center">
                <Flex>
                    <Flex direction="column" w="250px" bgColor={color} borderRadius="10%" p="5" my="5">
                        <NextLink href="https://ncerne.com/assets/Certs/CompTIA%20Security+%20ce%20certificate.pdf">
                            <Image
                                cursor="pointer"
                                src='./cert_logos/secplus.png'
                                boxSize='200px'>
                            </Image>
                        </NextLink>
                        <Text fontSize="12px" mt="10px">
                            View my issued Comptia Security+ certification.
                        </Text>
                    </Flex>
                </Flex>
            </Flex>
            <Flex m={{ base: "", md: "20" }} justifyContent="center">
                <Flex direction="column" w="250px" bgColor={color} borderRadius="10%" p="5" my="5">
                    <NextLink href="https://images.credential.net/embed/bbutduhv.png">
                        <Image
                            cursor="pointer"
                            src='./cert_logos/oscp.png'
                            boxSize='200px'>
                        </Image>
                    </NextLink>
                    <Text fontSize="12px" mt="10px">
                        View my issued Offensive Security Certified Professional certification.
                    </Text>
                </Flex>
                <Flex>
                </Flex>

            </Flex>
            <Flex m={{ base: "", md: "20" }} justifyContent="center">
                <Flex direction="column" w="250px" bgColor={color} borderRadius="10%" p="5" my="5">
                    <Center>
                        <NextLink href="https://verified.elearnsecurity.com/certificates/c0c4cc67-1ad3-49d4-abe1-873f6e0eb568">
                            <Image
                                cursor="pointer"
                                src='./cert_logos/eJPT.png'
                                boxSize='200px'>
                            </Image>
                        </NextLink>
                    </Center>
                    <Text fontSize="12px" mt="10px">
                        View my issued INE Junior Penetration Tester Certification.
                    </Text>
                </Flex>
                <Flex>

                </Flex>

            </Flex>
        </Flex>
    );
}

export default Certification