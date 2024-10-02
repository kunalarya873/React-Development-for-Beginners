/* eslint-disable react/jsx-key */
import {HStack, Stack, Icon, Text, Heading, Box} from '@chakra-ui/react';
import { RxDashboard } from 'react-icons/rx';
import { BsArrowDownUp } from 'react-icons/bs';
import {BiSupport} from 'react-icons/bi';
const Sidenav = () => {
  const navLinks = [
    {
      icon: RxDashboard,
      text: "Dashboard",
      link: "/"
    },
    {
      icon: BsArrowDownUp,
      text: "Transactions",
      link: "/transactions"
    }
  ];
  return (
    <Stack 
    justifyContent="space-between" 

    boxShadow = {{
      base: "none",
      lg: "lg"
    }}
    w={{
      base: "100%",
      lg: "16rem"
    }}
    h="100vh"
    display={{
      base: "none",
      lg: "flex"
    }}
    >
      <Box >
      <Heading textAlign="center" fontSize="20px" marginTop="3.5rem">@DoSomeCoding</Heading>
      <Box mt="6" mx="3">
      {
      navLinks.map((nav) =>(
        <HStack 
        borderRadius="md"
        mx="3" 
        key={nav.text} 
        py="3" 
        px="4" 
        _hover={{
          bg: "#f3f3f7",
          color: "#171717",
        }}
        color="#797E82">
          <Icon 
          as={nav.icon}
          />
          <Text fontSize="14px" fontWeight="medium">{nav.text}</Text>
        </HStack>
      ))
      }
      </Box>
      </Box>
      <Box mt="6" mx="3" mb="6">
      <HStack 
        borderRadius="md"
        mx="3" 
        py="3" 
        px="4" 
        _hover={{
          bg: "#f3f3f7",
          color: "#171717",
        }}
        color="#797E82">
          <Icon as={BiSupport}
          />
          <Text fontSize="14px" fontWeight="medium">Support</Text>
        </HStack>
        </Box>
      </Stack>
  )
}

export default Sidenav;