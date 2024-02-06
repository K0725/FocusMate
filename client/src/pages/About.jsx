import React from 'react'
import { Flex, Container, Box, Text, Heading, UnorderedList, ListItem } from '@chakra-ui/react'
import NavBar from '../components/NavBar'

const About = () => {
  return (
    <div>
      <NavBar/>
      <Flex minH={1} direction="column" align="center" justify="center">
        
        <Container maxW="container.md">
          <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md">
            <Text fontSize="xl" fontWeight="bold" mb={5}>
              Welcome to FocusMate!
            </Text>
            <Text fontSize="lg" mb={4}>
              In this website, you can join and find the projects that you are interested in.
            </Text>
            <Heading as="h3" size="md" mb={4} >
              Benefits of working on projects:
            </Heading>
            <UnorderedList>
              <ListItem>
                <Text fontSize="lg">Learn By Doing</Text>
              </ListItem>
              <ListItem>
                <Text fontSize="lg">Build Your Portfolio</Text>
              </ListItem>
              <ListItem>
                <Text fontSize="lg">Build your experience</Text>
              </ListItem>
              <ListItem>
                <Text fontSize="lg">Learn from others</Text>
              </ListItem>
              <ListItem>
                <Text fontSize="lg">Networking</Text>
              </ListItem>
              <ListItem>
                <Text fontSize="lg">AND MORE!</Text>
              </ListItem>
            </UnorderedList>
          </Box>
        </Container>
      </Flex>
    </div>
  )
}
 export default About
