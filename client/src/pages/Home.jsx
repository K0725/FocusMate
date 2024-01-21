import React from 'react'
import { Container, Flex, Box, Input, Button } from '@chakra-ui/react'
import NavBar from '../components/NavBar';
import Card from '../components/Card';


const Home = () => {
  return (
    
   
    <Flex minH={1} direction="column" align="center" justify="center">
      {/* maxW="container.md" ensures that the flexbox takes up the entire width of the screen */}
      <Container maxW="container.md">
        <Flex justify="space-between" align="center" py={4}>
          <Box><strong>FocusMate</strong></Box>
          <NavBar />
          <Flex>            
            <Input placeholder="Search..." mr={2} />
            <Button colorScheme="blue">Search</Button>
          </Flex>
        </Flex>
      </Container>
      <Container>
        <Card/>
      </Container>
    </Flex>
  )
}

export default Home
