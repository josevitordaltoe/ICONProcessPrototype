import Header from "../components/Header/index";
import dynamic from "next/dynamic";
import Sidebar from "../components/sidebar/index";
import { Flex, SimpleGrid, Box, Text, theme } from "@chakra-ui/react";
const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    zoom: {
      enabled: false,
    },
  },
  grid: {
    show: false,
  },
  tooltip: {
    enabled: false,
  },
};

const series = [{ name: "series1", data: [31, 36, 18, 45, 24, 17, 40] }];

export default function Dashboard() {
  return (
    <Flex direction="column" h="100vh">
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <SimpleGrid flex="1" gap="4" minChildWidth="320px" align="flex-start">
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8} pb={4}>
            <Text fontSize="lg" mb="4">
              Não conformidades
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
          <Box p={["6", "8"]} bg="gray.800" borderRadius={8}>
            <Text fontSize="lg" mb="4">
              RNC's Tratadas
            </Text>
            <Chart options={options} series={series} type="area" height={160} />
          </Box>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
