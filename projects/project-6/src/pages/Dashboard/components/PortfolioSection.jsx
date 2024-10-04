import { HStack, Stack, Icon, Text, Tag, Button} from "@chakra-ui/react";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AiOutlineArrowDown , AiOutlineArrowUp} from "react-icons/ai";
const PortfolioSection = () => {
  return (
    <HStack 
    bg="white" 
    borderRadius="xl" 
    p="6" 
    justifyContent="space-between"
    align="center"
    spacing={{
      base: 6,
      xl: 16,
    }}
    flexDirection={{
      base: "column",
      xl: "row",
    }}
    >
      <Stack>
        <HStack color="black.80">
          <Text fontSize="14px" fontWeight="500" color="#535D66">
            Total Portfolio Value
          </Text>
          <Icon as={AiOutlineInfoCircle} />
        </HStack>
        <Text textStyle="h2" fontSize="24px" fontWeight="500">
          ₹ 112,312.24
        </Text>
      </Stack>
      <Stack >
        <HStack color="black.80">
          <Text fontSize="14px" fontWeight="500" color="#535D66">
            Wallet Balances
          </Text>
        </HStack>
        <HStack>
          <Text textStyle="h2" fontSize="24px" fontWeight="500">
            22.39401000
          </Text>
          <Tag bg="#F3F3F7" color="#797E82">BTC</Tag>
          <Text textStyle="h2" fontSize="24px" fontWeight="500"  >
            ₹ 1,300.00
          </Text>
          <Tag bg="#F3F3F7" color="#797E82">INR</Tag>
        </HStack>
      </Stack>
      <HStack justifyContent="space-between" alignItems="end">

        <Button
        leftIcon={
            <Icon as={AiOutlineArrowDown
            }/>
        }
        >
            Deposit
        </Button>
        <Button leftIcon={
            <Icon as={AiOutlineArrowUp
            }/>
        }>
            Withdraw
        </Button>
      </HStack>
    </HStack>
  );
};

export default PortfolioSection;
