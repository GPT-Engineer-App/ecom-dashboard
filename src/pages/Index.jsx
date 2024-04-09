import React, { useState } from "react";
import { Box, Flex, Heading, Text, Button, Stat, StatLabel, StatNumber, StatHelpText, StatArrow, Table, Thead, Tbody, Tr, Th, Td, Avatar, Select, Spacer, Grid, GridItem, Image } from "@chakra-ui/react";
import { FaShoppingCart, FaChartLine, FaUsers, FaDollarSign } from "react-icons/fa";

const Index = () => {
  const [selectedPeriod, setSelectedPeriod] = useState("weekly");

  const data = {
    revenue: 42000,
    orders: 1200,
    customers: 800,
    topProducts: [
      { id: 1, name: "Product 1", revenue: 12000, quantity: 500 },
      { id: 2, name: "Product 2", revenue: 8000, quantity: 300 },
      { id: 3, name: "Product 3", revenue: 6000, quantity: 200 },
    ],
  };

  return (
    <Box p={8}>
      <Flex align="center" mb={8}>
        <Heading as="h1" size="xl" mr={4}>
          Ecommerce Dashboard
        </Heading>
        <Spacer />
        <Select value={selectedPeriod} onChange={(e) => setSelectedPeriod(e.target.value)} w={40}>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </Select>
      </Flex>

      <Grid templateColumns="repeat(4, 1fr)" gap={8} mb={8}>
        <GridItem>
          <Stat>
            <StatLabel>Total Revenue</StatLabel>
            <StatNumber>${data.revenue.toLocaleString()}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              12% {selectedPeriod}
            </StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
            <StatLabel>Total Orders</StatLabel>
            <StatNumber>{data.orders.toLocaleString()}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              8% {selectedPeriod}
            </StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
            <StatLabel>Total Customers</StatLabel>
            <StatNumber>{data.customers.toLocaleString()}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              5% {selectedPeriod}
            </StatHelpText>
          </Stat>
        </GridItem>
        <GridItem>
          <Stat>
            <StatLabel>Avg. Order Value</StatLabel>
            <StatNumber>${(data.revenue / data.orders).toFixed(2)}</StatNumber>
            <StatHelpText>
              <StatArrow type="increase" />
              3% {selectedPeriod}
            </StatHelpText>
          </Stat>
        </GridItem>
      </Grid>

      <Grid templateColumns="repeat(2, 1fr)" gap={8}>
        <GridItem>
          <Box borderWidth={1} borderRadius="lg" p={4}>
            <Heading as="h2" size="lg" mb={4}>
              Top Products
            </Heading>
            <Table>
              <Thead>
                <Tr>
                  <Th>Product</Th>
                  <Th isNumeric>Revenue</Th>
                  <Th isNumeric>Quantity Sold</Th>
                </Tr>
              </Thead>
              <Tbody>
                {data.topProducts.map((product) => (
                  <Tr key={product.id}>
                    <Td>{product.name}</Td>
                    <Td isNumeric>${product.revenue.toLocaleString()}</Td>
                    <Td isNumeric>{product.quantity.toLocaleString()}</Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
          </Box>
        </GridItem>
        <GridItem>
          <Box borderWidth={1} borderRadius="lg" p={4}>
            <Heading as="h2" size="lg" mb={4}>
              Sales Chart
            </Heading>
            <Image src="https://images.unsplash.com/photo-1639389016237-85a1a16f76d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxsaW5lJTIwY2hhcnQlMjBzaG93aW5nJTIwaW5jcmVhc2luZyUyMHNhbGVzfGVufDB8fHx8MTcxMjcwMzU3NHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Sales Chart" />
          </Box>
        </GridItem>
      </Grid>
    </Box>
  );
};

export default Index;
