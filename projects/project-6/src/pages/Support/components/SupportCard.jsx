import {
  Stack,
  Flex,
  Icon,
  Text,
} from "@chakra-ui/react";
import { MdEmail } from "react-icons/md";
import ContactCard from "./ContactCard";
const SupportCard = () => {
  return (
    <Flex display="flex"
      flexDir={{
        base: "column",
        xl: "row",
      }}
     gap="6">
      <Stack maxW="24rem">
        <Icon color="p.purple" as={MdEmail} boxSize="24px" />
        <Text as="h1" textStyles="h1" fontSize="32px" fontWeight="500">
          Contact Us
        </Text>
        <Text fontSize="14px" color="black.60" fontWeight="400">
          Have a question or just want to know more? Feel free to reach out to
          us.
        </Text>
      </Stack>
      <ContactCard />
    </Flex>
  );
};

export default SupportCard;
