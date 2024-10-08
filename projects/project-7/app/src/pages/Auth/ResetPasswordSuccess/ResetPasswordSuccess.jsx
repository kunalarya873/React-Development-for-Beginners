import {
  Container,
  Center,
  Text,
  Button,
  Icon,
  
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import { RiCheckboxCircleFill } from "react-icons/ri";
const ResetPasswordSuccess = () => {
  return (
    <Container>
    <Center minH="100vh">
      <Card
      showCard={true}
      
      ><Center>
        <Icon as={RiCheckboxCircleFill} boxSize="47px" color="#059669"/>
        </Center>
        <Text textStyle="h1" fontSize="22px"
        textAlign="center" mt="16px">Password Reset Done</Text>{" "}
        <Text textStyle="p2" color="black.60" mt="4" fontSize="14px" 
        textAlign="center" >Now you can access you account. 
        </Text>
        <Button as={Link} to="/signin" mt="24px">
          Sign In
        </Button>
      </Card>
    </Center>
    </Container>
  )
}

export default ResetPasswordSuccess;