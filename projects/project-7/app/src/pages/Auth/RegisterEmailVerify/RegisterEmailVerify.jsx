import Card from '../../../components/Card';
import {VStack, Icon, Text, Button, Box, Center} from '@chakra-ui/react';
import { IoMail } from "react-icons/io5";

const RegisterEmailVerify = () => {
  return (
    <Container>
    <Center minH="100vh">
      <Card showCard={true}>
        <VStack padding={6}>
            <Icon as={IoMail} boxSize="48px" color="p.purple"/>
            <Text fontWeight="medium" textStyle="h4" color="p.black">Email verification</Text>
            <Text fontWeight="medium" textStyle="p2" color="black.60" textAlign="center">We have sent you an email verification to {" "}<Box as="b" color="p.black">jenny.wilson@gmail</Box>. If you didn’t receive it, click the button below.</Text>
            <Button  w="full" variant="outline">Re-Send Email</Button>
        </VStack>
    </Card>
    </Center>
    </Container>
  )
}

export default RegisterEmailVerify;