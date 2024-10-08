import {
  Container,
  Center,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Button,
  FormErrorMessage,
  Icon,
  
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import {object, string} from 'yup';
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import { FaArrowLeft } from "react-icons/fa";



const ForgotPassword = () => {
  const ForgotPasswordValidationSchema = object({
    
    email: string().email("Email is not valid").required("Email is required")
    
  })
  return (
    <Container>
    <Center minH="100vh">
      <Card
      showCard={true}
      >
        <Link to="/signin">
        <Icon as={FaArrowLeft} mt="14px" fontSize="24px" />
        </Link>
        <Text textStyle="h1" fontSize="32px" 
        mt="16px">Forgot Pasword</Text>{" "}
        <Text textStyle="p2" color="black.60" mt="4" fontSize="14px">Enter your email address for which account you want to reset your password.
        </Text>
        <Formik
          initialValues={{
            email: ""
          }}
          onSubmit={(values) => {
            console.log(values);
          }}
          validationSchema={ForgotPasswordValidationSchema}
        >
          {() => (
            <Form>
              <Stack mt="40px" spacing="24px">
                <Field name="email">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel>Email</FormLabel>
                        <Input
                          {...field}
                          name="email"
                          type="email"placeholder="Enter Your Email.."
                        /><FormErrorMessage>
                        {meta.error}
                      </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  
                 
                <FormControl >
                  <Link to="/reset-password">
                  <Button type="submit"
                 w="full"
                  mt="4"
                  fontWeight="500">
                    Reset Passsword
                  </Button>
                  </Link>
                </FormControl>
              </Stack>
            </Form>
          )}
        </Formik>
      </Card>
    </Center>
    </Container>
  )
}

export default ForgotPassword;