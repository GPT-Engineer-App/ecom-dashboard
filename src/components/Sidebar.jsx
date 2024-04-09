import { Box, VStack, Link } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <Box bg="gray.100" w={64} p={4}>
      <VStack spacing={4} align="stretch">
        <Link as={RouterLink} to="/">
          Dashboard
        </Link>
        <Link as={RouterLink} to="/inventory">
          Inventory
        </Link>
        <Link as={RouterLink} to="/orders">
          Orders
        </Link>
        <Link as={RouterLink} to="/delivery">
          Delivery
        </Link>
        <Link as={RouterLink} to="/categories">
          Categories
        </Link>
        <Link as={RouterLink} to="/brands">
          Brands
        </Link>
        <Link as={RouterLink} to="/product-types">
          Product Types
        </Link>
        <Link as={RouterLink} to="/discounts">
          Discounts
        </Link>
        <Link as={RouterLink} to="/analytics">
          Analytics
        </Link>
        <Link as={RouterLink} to="/settings">
          Settings
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;
