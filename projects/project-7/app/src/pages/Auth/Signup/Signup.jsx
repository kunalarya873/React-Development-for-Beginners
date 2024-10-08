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
  Flex,
  FormErrorMessage,
} from "@chakra-ui/react";
import { Formik, Form, Field } from "formik";
import {object, string, ref, boolean} from 'yup';
import React from "react";
import { Link } from "react-router-dom";
import Card from "../../../components/Card";

const Signup = () => {
    const signupValidationSchema = object({
    name: string().required("Name is required"),
    surname: string().required("Surname is required"),
    email: string().email("Email is not valid").required("Email is required"),
    password: string().min(6, "Password must be at least 6 characters").required("Password is required"),
    repeatPassword: string().oneOf([ref('password'), null], "Password must match").required("Repeat password is required"),
    checkbox: boolean().oneOf([true], "You must accept terms and conditions")
})

  return (
    <Container>
      <Center minH="100vh">
        <Card>
          <Text textStyle="h1">Welcome to Crypto App</Text>{" "}
          <Text textStyle="p2" color="black.60" mt="4">
            Create a free account by filling data below.
          </Text>
          <Formik
            initialValues={{
              name: "",
              surname: "",
              email: "",
              password: "",
              repeatPassword: "",
            }}
            onSubmit={(values) => {
              console.log(values);
            }}
            validationSchema={signupValidationSchema}
          >
            {() => (
              <Form>
                <Stack mt="10" spacing="24px">
                  <Flex gap="4">
                    <Field name="name">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel htmlFor="name">Name</FormLabel>
                          <Input
                            {...field}
                            name="name"
                            placeholder="Enter Your Name.."
                          />
                          <FormErrorMessage>
                            {meta.error}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>


                    <Field name="surname">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel>Surname</FormLabel>
                          <Input
                            {...field}
                            name="surname"
                            placeholder="Enter Your Surname.."
                          /><FormErrorMessage>
                          {meta.error}
                        </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                  </Flex>
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
                    <Field name="repeatPassword">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                          <FormLabel>Repeat Password</FormLabel>
                          <Input
                            {...field}
                            name="repeatPassword"
                            type="password"
                      placeholder="Repeat Your Password.."
                          />
                          <FormErrorMessage>
                            {meta.error}
                          </FormErrorMessage>
                        </FormControl>
                      )}
                    </Field>
                    <Field name="checkbox">
                      {({ field, meta }) => (
                        <FormControl isInvalid={!!(meta.error && meta.touched)}>
                        <Checkbox name="checkbox">
                        <Text textStyle="p3">
                        I agree with
                        <Text as="span" color="p.purple">
                          {" "}
                          Terms & Conditions.
                        </Text>
                      </Text>
                      <FormErrorMessage>
                            {meta.error}
                          </FormErrorMessage>
                        </Checkbox>
                        </FormControl>
                      )}
                    </Field>
                  <FormControl>
                    <Button type="submit" w="full" colorScheme="purple">
                      Sign Up
                    </Button>
                    <Link to="/signin">
                    <Text textStyle="p3" color="black.60" textAlign="center">
                      Already have an account?
                      <Text as="span" color="p.purple">
                        {" "}
                        Login In
                      </Text>
                    </Text>
                    </Link>
                  </FormControl>
                </Stack>
              </Form>
            )}
          </Formik>
        </Card>
      </Center>
    </Container>
  );
};
export default Signup;
