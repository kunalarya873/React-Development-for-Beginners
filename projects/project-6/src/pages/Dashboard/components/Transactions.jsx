import { CustomCard } from "../../../chakra/CustomCard";
import { Flex, Stack, Text, Icon, Grid, Divider, Button } from "@chakra-ui/react";
import { BsCurrencyRupee } from "react-icons/bs";
import { FaBtc } from "react-icons/fa";
import { Fragment } from "react";
const Transactions = () => {
    const transactions = [
        {
            id: 1,
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM"
        },
        {
            id: 2,
            icon: FaBtc,
            text: "BTC Sell",
            amount: "- 12.48513391 BTC",
            timestamp: "2022-05-27 12:32 PM"
        },
        {
            id: 3,
            icon: BsCurrencyRupee,
            text: "INR Deposit",
            amount: "+ ₹81,123.10",
            timestamp: "2022-06-09 7:06 PM"
        },

    ]
  return (
    <CustomCard h="full">
        <Text mb="6" fontSize='sm' color='black.80'>
        Recent Transactions
        </Text>
        <Stack>
            {transactions.map((transaction, i) => (
                <Fragment key={transaction.id} >
                    {i != 0 && <Divider mt="1"/>}
                    <Flex spacing="0" gap="4" w="full">
                    <Grid placeItems="center" 
                    bg='black.5' h="40px" w="40px" borderRadius="40px">
                    <Icon as={transaction.icon}/>
                    </Grid>
                    <Flex w="full" justify="space-between">
                        <Stack>
                            <Text textStyle="h6" color="black.80">{transaction.text}</Text>
                            <Text fontSize="sm" color="black.40">{transaction.amount}</Text>
                        </Stack>
                        <Text textStyle="h6">{transaction.amount}</Text>
                    </Flex>
                </Flex>
                </Fragment>
            ))}
        </Stack>
        <Button w="full" colorScheme="gray" mt="12">View All</Button>
    </CustomCard>
  )
}

export default Transactions;