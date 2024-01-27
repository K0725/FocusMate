import React from 'react'
import { Flex, Box } from 'rebass'; // Add missing imports

const Card = ({ language }) => {
  return (
    <div style={{ border: "1px solid black" }}>
      <Flex>
        <Box> 
          <h2>Study Room 1</h2>
          <p>Language: {language}</p>
        </Box>
      </Flex>
    </div>
  )
}

export default Card
