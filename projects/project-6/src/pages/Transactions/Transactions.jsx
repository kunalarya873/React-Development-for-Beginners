import DashboardLayout from "../../components/DashboardLayout";
import {
  Card,
  Button,
  Flex,
  Icon,
  Tabs,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tag,
  InputGroup,
  InputLeftElement,
  Input,
} from "@chakra-ui/react";
import { AiOutlineDownload } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import TransactionTable from "./components/TransactionTable";
const Transactions = () => {
  const tabs = [
    {
      name: "All",
      count: 349,
    },
    {
      name: "Deposit",
      count: 114,
    },
    {
      name: "Widthdraw",
      count: 55,
    },
    {
      name: "Trade",
      count: 50,
    },
  ];
  return (
    <DashboardLayout title="Transactions">
      <Flex justify="end" mt="6">
        <Button
          leftIcon={<Icon as={AiOutlineDownload} />}
          bg="p.purple"
          textColor="white"
          variant="outline"
          size={{ base: "sm", md: "md" }}
          _hover={{
            borderColor:"black",
            bg:"white",
            textColor:"black",
          }}
        >
          Export CSV
        </Button>
      </Flex>
      <Card mt="3" borderRadius="16px">
        <Tabs>
          <TabList 
          p="4" gap="6"
          display="flex"
          w="full"
          justifyContent="space-between">
            {tabs.map((tab) => (
              <Tab key={tab.name} display="flex" gap="2">
                {tab.name}
                <Tag colorScheme="gray" borderRadius="full">
                  {tab.count}
                </Tag>
              </Tab>
            ))}
            <InputGroup 
            justifySelf="end" w="fit-content">
    <InputLeftElement pointerEvents='none'>
      <Icon as={CiSearch} />
      
    </InputLeftElement>
    <Input placeholder='Search by ID or destination' />
  </InputGroup>
          </TabList>

          <TabPanels>
            <TabPanel>
              <TransactionTable />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Card>
    </DashboardLayout>
  );
};

export default Transactions;
