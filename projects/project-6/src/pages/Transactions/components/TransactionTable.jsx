import {
    TableContainer,
    Table,
    Thead,
    Tr,
    Th,
    TableCaption,
    Tbody,
    Td,
    Tag,
    Stack,
    Text,
  } from "@chakra-ui/react";
  
  const TransactionTable = () => {
    const tableData = [
      {
        id: "HD82NA2H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: {
          name: "INR Deposit",
          tag: "E-Transfer",
        },
        amount: "+₹81,123",
        status: "pending",
      },
      {
        id: "HD82NA2H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: {
          name: "INR Deposit",
          tag: "E-Transfer",
        },
        amount: "+₹81,123",
        status: "completed",
      },
      {
        id: "HD82NA2H",
        date: "2023-06-20",
        time: "07:00 AM",
        type: {
          name: "INR Deposit",
          tag: "E-Transfer",
        },
        amount: "+₹81,123",
        status: "processing",
      },
    ];
  
    const getTagColor = (status) => {
      switch (status) {
        case "pending":
          return "#797E82";
        case "completed":
          return "#059669";
        case "Cancelled":
          return "#DC2626";
        case "processing":
          return "#F5A50B";
        default:
          return "#797E82";
      }
    };
  
    return (
      <div>
        <TableContainer>
          <Table variant="simple">
            <TableCaption>Transaction History</TableCaption>
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Date & Time</Th>
                <Th>Type</Th>
                <Th isNumeric>Amount</Th>
                <Th isNumeric>Status</Th>
              </Tr>
            </Thead>
            <Tbody fontWeight="500" fontSize="14px">
              {tableData.map((data) => (
                <Tr key={data.id}>
                  <Td>{data.id}</Td>
                  <Td>
                    <Stack>
                      <Text>{data.date}</Text>
                      <Text fontWeight="400" color="#797E82">
                        {data.time}
                      </Text>
                    </Stack>
                  </Td>
                  <Td>
                    <Stack>
                      <Text>{data.type.name}</Text>
                      <Text fontSize="12px" fontWeight="400" color="#797E82">
                        {data.type.tag}
                      </Text>
                    </Stack>
                  </Td>
                  <Td isNumeric>{data.amount}</Td>
                  <Td isNumeric>
                    <Tag
                      bg={getTagColor(data.status)}
                      color="white"
                      p="2"
                      gap="2px"
                      borderRadius="20px"
                    >
                      {data.status}
                    </Tag>
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </div>
    );
  };
  
  export default TransactionTable;
  