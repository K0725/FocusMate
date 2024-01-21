import React from 'react'
import { Flex, Box } from 'rebass'; // Add missing imports

const Card = ({ title, language }) => {
  return (
    <div>
      <Flex>
        <Box border={"1px solid black"}> 
          <h2>Study Room 1</h2>
          <p>Language: {language}</p>
        </Box>
      </Flex>
    </div>
  )
}

export default Card
