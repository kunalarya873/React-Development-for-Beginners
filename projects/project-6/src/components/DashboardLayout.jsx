import { Flex, Box, Container, useDisclosure } from '@chakra-ui/react';
import Topnav from './Topnav';
import Sidenav from './Sidenav';
import SideDrawer from './SideDrawer';

const DashboardLayout = ({ title, children }) => {
    const {isOpen, onClose, onOpen} = useDisclosure();
  return (
    <Flex>
        <SideDrawer isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        <Box flexGrow={1}
        >
        <Topnav title={title} onOpen={onOpen}/>
        <Container bg="red" maxW="70rem">
            {children}
        </Container>
        </Box>
    </Flex>
  )
}

export default DashboardLayout;