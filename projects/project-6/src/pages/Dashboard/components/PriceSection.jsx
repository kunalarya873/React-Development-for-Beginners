import { CustomCard } from "../../../chakra/CustomCard";
import { HStack, Stack, Tab, Tabs, TabList, TabPanels, TabPanel, Text, Icon, Button, Flex, Image } from "@chakra-ui/react";
import { BsArrowUpRight } from "react-icons/bs";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";

const PriceSection = () => {
  const timestamps = [
    "7:15 PM", "7:55 PM", "8:55 PM", "9:55 PM", "10:55 PM"
  ]
  return (
    <CustomCard h="full">
      <Flex justify="space-end" align="start">
        <Stack>
          <HStack color="black.80">
            <Text fontSize="14px" fontWeight="500" color="#535D66">
              Wallet Balances
            </Text>
          </HStack>
          <HStack
            spacing={2}
            align={{
              base: "flex-start",
              sm: "center",
            }}
            flexDir={{
              base: "column",
              sm: "row",
            }}
          >
            <Text textStyle="h2" fontSize="24px" fontWeight="500">
              22.39401000
            </Text>
            <HStack fontWeight="medium" color="green.500">
              <Icon as={BsArrowUpRight} />
              <Text fontSize="sm">22%</Text>
            </HStack>
          </HStack>
        </Stack>

        {/* Button Container */}
        <Flex flexDirection="row" align="flex-end" gap={2}>
          <Button leftIcon={<Icon as={AiFillPlusCircle} />}>Buy</Button>
          <Button leftIcon={<Icon as={AiFillMinusCircle} />}>Sell</Button>
        </Flex>
      </Flex>
      <Tabs variant='soft-rounded' bg='white'>
        <Flex justify="end">
  <TabList bg='black.5' borderRadius='6px' p="3">
    {['1H', '1D', '1W', '1M', '1Y'].map((tab)=>(
      <Tab key={tab} borderRadius='6px'
      _selected={{
        bg: 'white'
      }}
      >{tab}</Tab>))
    }
  </TabList>
  </Flex>
  <TabPanels>
    <TabPanel>
    <Image src="Graph2.svg" mt="12"/>
      <HStack justify="space-between">
        {timestamps.map((timestamp, index) => (
          <Text
            key={index}
            color="#797E82"
          >
            {timestamp}
          </Text>
        ))}
      </HStack>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
  </TabPanels>
</Tabs>
    </CustomCard>
  );
};

export default PriceSection;
