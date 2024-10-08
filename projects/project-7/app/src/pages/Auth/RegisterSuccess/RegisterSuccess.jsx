import React from 'react'
import {VStack, Icon, Text, Button, Box, Center} from '@chakra-ui/react';
import Card from '../../../components/Card';
import { RiCheckboxCircleFill } from "react-icons/ri";


const RegisterSuccess = () => {
  return (
    <Container>
    <Center minH="100vh">
      <Card showCard={true}>
        <VStack padding={6}>
            <Icon as={RiCheckboxCircleFill} boxSize="48px" color="#059669"/> 
            <Text fontWeight="medium" textStyle="h4" color="p.black">Successfull Registration</Text>
            <Text fontWeight="medium" textStyle="p2" color="black.60" textAlign="center" fontSize='14px' mt="16px">Hurray! You have successfully created your account. Enter the app to explore all it’s features.</Text>
            <Button  w="full" mt="24px">Enter the App</Button>
        </VStack>
    </Card>
    </Center>
    </Container>
  )
}

export default RegisterSuccess;