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
import { FaLeaf, FaCar, FaCarrot, FaSlideshare, FaListAlt } from 'react-icons/fa';
import { RiPlantFill } from "react-icons/ri";
import './app.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
    {/* Top Section */}
      <Box className="big-title" p={8} h="27vh" bgColor="#9EBC9F" w="100%">
        <Text decoration="underline" fontWeight="bold" fontSize="6xl" align="center" textShadow="2px 2px 8px #e5e5e5">The Food Loop</Text>
        <Text fontSize="xl" align="center">Understanding how your food choices can affect the environment around you.</Text>
      </Box>
    {/* Problem section */}
    <Box mx="5rem" pt={10}>
      <Text textDecoration="unset">Whether you’re munching on a sandwich, eating cookies from your grandma’s house, or drinking fruit juice, your 
        food choices affect many aspects of society including workers in the food industry, the environment, food policy and economics, 
        and animals. One of the biggest concerns currently is climate change. Everything we consume comes with a carbon footprint, or <a href="https://www.greeneatz.com/foods-carbon-footprint.htm">foodprint</a> in this case, which is the amount of greenhouse gas emissions produced before getting to your home. A few ways to reduce your carbon foodprint are to 
      source food locally, eat seasonally, and avoid buying too much at the grocery store to reduce food waste.</Text>
    </Box>
    
    <Box py={10} mx="5rem" textDecoration="unset">
      <Text>Choosing to buy one food product over another can be influenced by many factors including <a href="https://www.ethicalconsumer.org/food-drink/shopping-guide/fast-food-chains">ethics</a>. Welfare of workers has become a growing issue in wake of COVID-19 as risk increases and employers do not take adequate precaution. Learn more about how you can increase awareness of your food choices below.</Text>
    </Box>

    {/* Statistics section */}

    <Box paddingBottom={3} mx="5rem">
      <Text fontWeight="bold" fontSize="3xl" align="center" textTransform="uppercase" color="#656256" textDecoration="underline">The Numbers</Text>
      <Text marginTop="-1rem" fontWeight="bold" fontSize="4xl" align="center" color="#000000">putting it into context</Text>
    </Box>

    <Box mx="5rem" paddingBottom={5}>
      <Grid h="auto" templateRows="repeat(2, 1fr)" templateColumns="repeat(5, 1fr)" gap={4}>
        <GridItem p={5} rowSpan={2} colSpan={1} bg="papayawhip">
          <VStack>
            <Text fontSize="6xl" align="center" color="tomato" fontWeight="bold">80 billion</Text>
            <Text fontSize="lg" align="center">is the amount of food in pounds thrown away each year in America (equivalent to 1,000 Empire State buildings)</Text>
            <Text fontSize="sm" fontStyle="italic">Source: <a href="https://www.rts.com/resources/guides/food-waste-america/">RTS</a></Text>
          </VStack>
        </GridItem>
        <GridItem p={5} rowSpan={1} colSpan={2} bg="papayawhip">
          <VStack>
            <Text fontSize="lg" align="center">The <a href="https://www.edf.org/climate/methane-other-important-greenhouse-gas">methane</a> emitted by rotting food in a landfill is</Text>
            <Text fontSize="4xl" align="center" color="tomato" fontWeight="bold">28 to 36 times</Text>
            <Text fontSize="lg" align="center">more potent than carbon emitted from passenger vehicles.</Text>
            <Text fontSize="sm" fontStyle="italic">Source: <a href="https://rubicon.com">rubicon.com</a></Text>
          </VStack>
        </GridItem>
        <GridItem p={5} rowSpan={1} colSpan={2} bg="papayawhip">
          <VStack>
            <Text fontSize="lg" align="center">Out of all human-produced greenhouse gases,</Text>
            <Text fontSize="6xl" align="center" color="tomato" fontWeight="bold">⅕</Text>
            <Text fontSize="lg" align="center">of emissions come from livestock farming.</Text>
            <Text fontSize="sm" fontStyle="italic">Source: <a href="https://www.greeneatz.com/1/post/2013/04/earth-day-livestock-and-greenhouse-gas.html">www.greeneatz.com</a></Text>
          </VStack> 
        </GridItem>
        <GridItem p={5} rowSpan={1} colSpan={4} bg="papayawhip">
          <VStack>
            <Text fontSize="lg" align="center">Out of all human-produced greenhouse gases,</Text>
            <Text fontSize="6xl" align="center" color="tomato" fontWeight="bold">70%</Text>
            <Text fontSize="lg" align="center">of clearing the Amazon in South America, which spans over 2 million square miles, is for the purpose of farming beef.</Text>
            <Text fontSize="sm" fontStyle="italic">Source: <a href="https://www.greeneatz.com/1/post/2013/04/earth-day-livestock-and-greenhouse-gas.html">www.greeneatz.com</a></Text>
          </VStack>  
        </GridItem>
      </Grid>
    </Box>
    
    {/* Action cards section */}

    <Box py={3} mx="5rem">
      <Text fontWeight="bold" fontSize="3xl" align="center" textTransform="uppercase" color="#656256" textDecoration="underline">Next steps</Text>
      <Text marginTop="-1rem" fontWeight="bold" fontSize="4xl" align="center" color="#000000">taking action</Text>
    </Box>

    <Flex w="100%" justify="center" align="center">
      <Grid templateColumns="repeat(3, 1fr)" gap={6}>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaCarrot size="3em" />
              <Text align="center" fontSize="xl" px={5}>Consume produce over packaged or processed foods.</Text>
            </VStack>
          </Center>
        </Box>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaCar size="3em" />
              <Text align="center" fontSize="xl" px={5}>Source your food locally.</Text>
            </VStack>
          </Center>
        </Box>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaLeaf size="3em" />
              <Text align="center" fontSize="xl" px={5}>Eat in-season fruits and vegetables.</Text>
            </VStack>
          </Center>
        </Box>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaListAlt size="3em" />
              <Text align="center" fontSize="xl" px={5}>Make a list when you shop for groceries to avoid overbuying.</Text>
            </VStack>
          </Center>
        </Box>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <RiPlantFill size="3em" />
              <Text align="center" fontSize="xl" px={5}>Compost food waste to keep it out of landfills.</Text>
            </VStack>
          </Center>
        </Box>
        <Box p={5} w="23vw" h="40vh" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Center h="100%">
            <VStack>
              <FaSlideshare size="3em" />
              <Text align="center" fontSize="xl" px={5}>Encourage friends and family to be mindful of their food choices.</Text>
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
