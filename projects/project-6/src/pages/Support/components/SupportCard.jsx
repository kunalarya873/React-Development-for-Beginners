import {
  Stack,
  Flex,
  Icon,
  Text,
  Card,
  HStack,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Checkbox,
  Box,
  Button

} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";

const SupportCard = () => {
  return (
    <Flex>
      <Stack>
        <Icon color="p.purple" as={MdEmail} boxSize="24px" />
        <Text as="h1" textStyles="h1" fontSize="32px" fontWeight="500">
          Contact Us
        </Text>
        <Text fontSize="14px" color="black.60" fontWeight="400">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <Card>
        <Text fontSize="14px" fontWeight="500" p="6" borderRadius="1rem">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack p="4">
          <FormControl>
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter your name" />
          </FormControl>
          <FormLabel>Surname</FormLabel>
            <Input placeholder="Enter your surname" />
        </HStack>
        <FormControl>
        <FormLabel>Email</FormLabel>
            <Input placeholder="Enter your email" />
            <FormLabel>Message</FormLabel>
            <Textarea placeholder="Enter your message" />
        </FormControl>
        <Checkbox defaultChecked>
            I agree with <Box as="span" color="p.purple">
                {" "}
                Terms & Conditions.</Box></Checkbox>
                <Stack><Button>Send a Message</Button>
                
                <Button colorScheme="gray">Book a Meeting</Button></Stack>

      </Card>
    </Flex>
  );
};

export default SupportCard;
