import {
  Container,
  Center,
  Text,
  Stack,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Button,
  FormErrorMessage,
  HStack,
  VStack,
  useToast
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import {object, string, ref, boolean} from 'yup';
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";
import { useMutation } from "react-query";
import signinUser from "../../../api/query/userQuery";

const Signin = () => {

  
  const signinValidationSchema = object({
    
    email: string().email("Email is not valid").required("Email is required"),
    password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
    checkbox: boolean().oneOf([true], "You must accept terms and conditions")
    
  });



  const toast= useToast();
  const { mutate, isLoading } = useMutation({
    mutationKey: ["signin"],
    mutationFn: signinUser,
    onSuccess: (data) => {
      toast({
        title: "Sign-in Successful",
        description: "You have successfully signed in.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
      console.log(data);
    },
    onError: (error) => {
      toast({
        title: "An error occurred",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    },
  });
  return (
    <Container>
    <Center minH="100vh">
      <Card showCard={true}>
        <VStack padding={6}>
        <Text textStyle="h1" fontSize="32px">Welcome to Crypto App</Text>{" "}
        <Text textStyle="p2" color="black.60" mt="4" fontSize="14px">
        Enter your credentials to access the account.
        </Text>
        <Formik
          initialValues={{
            email: "",
            password: ""
          }}
          onSubmit={(values) => {
            mutate({
              email: values.email,
              password: values.password
            })
            console.log(values);
          }}
          validationSchema={signinValidationSchema}
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
                  <Field name="password">
                    {({ field, meta }) => (
                      <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <FormLabel>Password</FormLabel>
                        <Input
                          {...field}
                          name="password"
                          type="password"
                    placeholder="Enter Your Password.."
                        />
                        <FormErrorMessage>
                          {meta.error}
                        </FormErrorMessage>
                      </FormControl>
                    )}
                  </Field>
                  <HStack justifyContent="space-between">
                      <Checkbox name="checkbox">
                      <Text textStyle="p3">
                        Remeber me
                    </Text>
                    </Checkbox>
                      <Link to="/forgot-password">
                        <Text textStyle="p3" color="p.purple" as="span">Forgot Password?</Text></Link>
                  </HStack>
                <FormControl >
                  <Button isLoading={isLoading} type="submit" w="full" >
                    Sign in
                  </Button>
                  <Link to="/signup">
                  <Button type="submit"
                  variant="outline" w="full"
                  mt="4"
                  fontWeight="500">
                    Create New Account
                  </Button>
                  </Link>
                </FormControl>
              </Stack>
            </Form>
          )}
        </Formik>
        </VStack>
      </Card>
    </Center>
  </Container>
  )
}

export default Signin;