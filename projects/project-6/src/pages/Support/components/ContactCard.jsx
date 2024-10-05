import { Card, Stack, Text, HStack, FormControl, FormLabel, Input, Textarea, Button, Checkbox, Box } from "@chakra-ui/react";
const ContactCard = () => {
  return (
    <>
          <Card p="6" borderRadius="1rem" flexGrow="1">
        <Stack>
        <Text fontSize="14px" fontWeight="500" p="6" borderRadius="1.5rem">
          You will receive response within 24 hours of time of submit.
        </Text>
        <HStack flexGrow={2} >
            <Stack>
          <FormControl >
            <FormLabel>Name</FormLabel>
            <Input placeholder="Enter your name" />
          </FormControl>
          </Stack>
          <Stack>
          <FormLabel >Surname</FormLabel>
            <Input placeholder="Enter your surname" />
            </Stack>
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
                <Stack gap="4"><Button>Send a Message</Button>
                
                <Button colorScheme="gray">Book a Meeting</Button></Stack>
                </Stack>
      </Card>
    </>
  )
}

export default ContactCard;