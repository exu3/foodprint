import React from 'react';
import {
  ChakraProvider,
  Box,
  Container,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  GridItem,
  Flex,
  Spacer,
  theme,
  Image,
  Center,
  SimpleGrid
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { FaLeaf, FaCar, FaCarrot, FaSlideshare } from 'react-icons/fa';
import { RiPlantLine } from "react-icons/ri";

function App() {
  return (
    <ChakraProvider theme={theme}>
    {/* Top Section */}
      <Box p={8} h="27vh" bgColor="#9EBC9F" w="100%">
        <Text decoration="underline" fontWeight="bold" fontSize="6xl" align="center" textShadow="2px 2px 8px #e5e5e5">The Food Loop</Text>
        <Text fontSize="xl" align="center">Understanding how your food choices can affect the environment around you.</Text>
      </Box>
    {/* Problem section */}
    <Box mx="5rem" pt={10}>
      <Text>Cupidatat laborum amet est ut ad ut consequat laboris enim duis velit. Cupidatat laborum amet est ut ad ut consequat laboris enim duis velit. Cupidatat laborum amet est ut ad ut consequat laboris enim duis velit.</Text>
    </Box>
    
    <Box py={10} mx="5rem">
      <Text>Cupidatat laborum amet est ut ad ut consequat laboris enim duis velit. Cupidatat laborum amet est ut ad ut consequat laboris enim duis velit. Cupidatat laborum amet est ut ad ut consequat laboris enim duis velit.</Text>
    </Box>

    {/* Statistics section */}

    <Box paddingBottom={3} mx="5rem">
      <Text fontWeight="bold" fontSize="3xl" align="center" textTransform="uppercase" color="#656256">The Numbers</Text>
      <Text marginTop="-1rem" fontWeight="bold" fontSize="4xl" align="center" color="#000000">putting it into context</Text>
    </Box>

    <Box mx="5rem" paddingBottom={5}>
      <Grid h="400px" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem rowSpan={2} colSpan={1} bg="tomato" />
        <GridItem rowSpan={1} colSpan={2} bg="papayawhip" />
        <GridItem rowSpan={1} colSpan={2} bg="papayawhip" />
        <GridItem rowSpan={1} colSpan={4} bg="tomato" />
      </Grid>
    </Box>
    
    {/* Action cards section */}

    <Box py={3} mx="5rem">
      <Text fontWeight="bold" fontSize="3xl" align="center" textTransform="uppercase" color="#656256">Next steps</Text>
      <Text marginTop="-1rem" fontWeight="bold" fontSize="4xl" align="center" color="#000000">taking action</Text>
    </Box>

    <Flex w="100%" justify="center" align="center">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaCar size="3em" />
              <Text align="center" fontSize="xl" px={5}>Consume produce over packaged or processed foods.</Text>
            </VStack>
          </Center>
        </Box>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaCar size="3em" />
              <Text align="center" fontSize="xl" px={5}>Consume produce over packaged or processed foods.</Text>
            </VStack>
          </Center>
        </Box>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaCar size="3em" />
              <Text align="center" fontSize="xl" px={5}>Consume produce over packaged or processed foods.</Text>
            </VStack>
          </Center>
        </Box>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaCar size="3em" />
              <Text align="center" fontSize="xl" px={5}>Consume produce over packaged or processed foods.</Text>
            </VStack>
          </Center>
        </Box>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaCar size="3em" />
              <Text align="center" fontSize="xl" px={5}>Consume produce over packaged or processed foods.</Text>
            </VStack>
          </Center>
        </Box>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaCar size="3em" />
              <Text align="center" fontSize="xl" px={5}>Consume produce over packaged or processed foods.</Text>
            </VStack>
          </Center>
        </Box>
      </Grid>
    </Flex>

    {/* Footer */}
    <Box p={5} marginTop="2rem" bgColor="#9EBC9F">
      <Text align="center">Made by Ella © 2021</Text>
      <Text align="center">Always <a href="https://github.com/eilla1/food-loop">open source</a>.</Text>
    </Box>

    </ChakraProvider>
  );
}

export default App;
