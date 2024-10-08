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
  import {object, string, ref} from 'yup';
  import React from "react";
  import { Link } from "react-router-dom";
  import Card from "../../../components/Card";
  import { FaArrowLeft } from "react-icons/fa";
  
  
  
  const ResetPassword = () => {
    const resetPasswordValidationSchema = object({
      
      password: string().required("Password is required")
      .min(6, "Password must be at least 6 characters")
      .max(40, "Password must not exceed 40 characters"),
      repeatPassword: string().oneOf([ref('password'), null], "Password must match").required("Repeat password is required")

      
    });
    return (
      <Container>
      <Center minH="100vh">
        <Card
        showCard={true}
        >
          
          <Text textStyle="h1" fontSize="32px" 
          mt="16px">Reset Password</Text>{" "}
          <Text textStyle="p2" color="black.60" mt="4" fontSize="14px">Enter your new password.
          </Text>
          <Formik
            initialValues={{
              email: ""
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={resetPasswordValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="40px" spacing="24px">
                  <Field name="password">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel>Password</FormLabel>
                          <Input
                            {...field}
                            name="password"
                            type="password"placeholder="Enter Your Password..."
                          /><FormErrorMessage>
                          {meta.error}
                        </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="password">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel>Repeat Password</FormLabel>
                          <Input
                            {...field}
                            name="repeatpassword"
                            type="password"placeholder="Repeat your Password..."
                          /><FormErrorMessage>
                          {meta.error}
                        </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  <FormControl >
                    <Link to="/reset-password-success">
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
  
  export default ResetPassword;