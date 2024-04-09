import { Box, Flex } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const Layout = () => {
  return (
    <Flex>
      <Sidebar />
      <Box flex={1} p={8}>
        <Outlet />
      </Box>
    </Flex>
  );
};

export default Layout;
