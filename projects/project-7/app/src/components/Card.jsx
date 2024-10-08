import React from 'react'
import { Card as ChakraCard } from '@chakra-ui/react'
const Card = ({children}) => {
  return (
    <ChakraCard
    bg={{
        base: "transparent",
        md: "white"
      }}
       p={{
        base: "0",
        md: "24px"
      }}
       borderRadius={{
         base: "none",
         md: "1rem"
       }} boxShadow={{
         base: "none",
         md: "xl"
       }}
       
       maxW="456px">
        {children}
    </ChakraCard>
  )
}

export default Card