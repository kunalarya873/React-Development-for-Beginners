import { Flex, Box, Container, useDisclosure } from "@chakra-ui/react";
import Topnav from "./Topnav";
import SideDrawer from "./SideDrawer";

const DashboardLayout = ({ title, children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Flex>
      <Box
        display={{
          base: "block",
          lg: "none", // Show on mobile
        }}
      >
        <SideDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
      </Box>
      <Box flexGrow={1}>
        <Topnav title={title} onOpen={onOpen} />
        <Container mt="6" maxW="70rem">
          {children}
        </Container>
      </Box>
    </Flex>
  );
};

export default DashboardLayout;
