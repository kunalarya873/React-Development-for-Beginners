import { Container, Heading, Menu, MenuButton, MenuList, MenuItem, Button, HStack, Box, Icon } from '@chakra-ui/react';
import { FaBars, FaUserTie } from 'react-icons/fa';

const Topnav = ({ title, onOpen }) => {
  return (
    <Box>
      <HStack h="16" maxW="70rem" justifyContent="space-between" mx="auto" px={4}>
        <Icon 
          as={FaBars} 
          onClick={onOpen} 
          boxSize={6} 
          cursor="pointer" 
          color="black"
        />
        <Container display="flex" justifyContent="space-between" alignItems="center" maxW="100%">
          <Heading fontWeight="medium" fontSize="28px">{title}</Heading>
          <Menu>
            <MenuButton bg="transparent" as={Button} rightIcon={<Icon as={FaUserTie} fontSize="24px" color="black"/>}
            _hover={{ bg: "transparent" }}>
            </MenuButton>
            <MenuList>
              <MenuItem>Logout</MenuItem>
              <MenuItem>Support</MenuItem>
            </MenuList>
          </Menu>
        </Container>
      </HStack>
    </Box>
  );
};

export default Topnav;
