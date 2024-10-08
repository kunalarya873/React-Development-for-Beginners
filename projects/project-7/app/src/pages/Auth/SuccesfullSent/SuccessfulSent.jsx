import Card from '../../../components/Card';
import {VStack, Icon, Text, Box, Center, Container} from '@chakra-ui/react';
import { RiCheckboxCircleFill } from "react-icons/ri";
const SuccessfulSent = () => {
  return (
    <Container>
    <Center minH="100vh">
      <Card
      showCard={true}
      >
        <VStack padding={6}>
        <Icon as={RiCheckboxCircleFill} boxSize="44px" color="#059669"/>
            <Text mt="24px" fontWeight="medium" textStyle="h4" color="p.black">Successfully Sent</Text>
            <Text mt="14px" fontWeight="400" textStyle="p2" color="black.60" textAlign="center">We have sent instructions on how to reset your password to {" "}<Box as="b" color="p.black" fontWeight="500">jenny.wilson@gmail</Box>. Please follow the instructions from the email.</Text>
        </VStack>
    </Card>
    </Center>
    </Container>
  )
}

export default SuccessfulSent;