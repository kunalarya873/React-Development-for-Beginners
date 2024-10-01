import { Drawer, DrawerContent, DrawerOverlay } from '@chakra-ui/react';
import Sidenav from './Sidenav';

const SideDrawer = ({ isOpen, onClose }) => {
  return (
    <Drawer
      isOpen={isOpen}
      placement='left'
      onClose={onClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <Sidenav />
      </DrawerContent>
    </Drawer>
  );
}

export default SideDrawer;
