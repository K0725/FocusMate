import React from 'react';
import { Link } from 'react-router-dom';
import { Flex, LinkBox } from '@chakra-ui/react';

const NavBar = () => {
    return (
        <div>
            
            <Flex as="nav" px={4} py={2} align="center" justify="space-between">
                
                <Flex>
                    <LinkBox as={Link} to="/" mr={4} color="blue">Home</LinkBox>
                    <LinkBox as={Link} to="/about" mr={4} color="blue">About</LinkBox>
                    <LinkBox as={Link} to="/create" color="blue">Create</LinkBox>
                </Flex>
            </Flex>
        </div>
    );
};

export default NavBar;