import React from 'react';
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
  Image
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
        {/* <p>Hello</p>
        <Box w='280px' h="280px" bg="gray.200" boxShadow="lg" rounded="lg">
          <p>helloooooo</p>
        </Box> */}

        <Box w="400px" rounded="20px" boxShadow="xl" bgColor="#D3B88C">
          <Box p={5}>
            <Text>hey</Text>
          </Box>
        </Box>
    </ChakraProvider>
  );
}

export default App;
