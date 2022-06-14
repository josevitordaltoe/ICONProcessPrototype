import {
  Box,
  Flex,
  Heading,
  Button,
  Icon,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Checkbox,
  Tbody,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
import Header from "../../components/Header/index";
import Sidebar from "../../components/Sidebar/index";
import { RiAddLine, RiPencilLine } from "react-icons/ri";
import Pagination from "../../components/Pagination/index";
import Link from "../../../node_modules/next/link";
import SearchBox from "../../components/Header/SearchBox";

export default function Userlist() {
  const isWide = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size="lg" fontWeight="normal">
              Não Conformidades
            </Heading>
            <Link href="/naoconformidades/create" passHref>
              <Button
                as="a"
                size="sm"
                fontSize="sm"
                colorScheme="red"
                leftIcon={<Icon as={RiAddLine} fontSize={20} />}
              >
                Abri RNC
              </Button>
            </Link>
          </Flex>
          <Table colorScheme="whiteAlpha">
            <Thead>
              <Tr>
                <Th px="6" color="gray.300" width="8">
                  <Checkbox colorScheme="red" />
                </Th>
                <Th>Número</Th>
                <Th>Pedido interno</Th>
                <Th>Equipamento</Th>
                {isWide && <Th>Data de Abertura</Th>}
                <Th width="8"></Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td px="6">
                  <Checkbox colorScheme="red" />
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">RNC-0012/2022</Text>
                    <Text fonSize="sm" color="gray.300">
                      Desvio dimensional
                    </Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">3532/2021</Text>
                  </Box>
                </Td>
                <Td>
                  <Box>
                    <Text fontWeight="bold">Secador</Text>
                  </Box>
                </Td>
                {isWide && <Td>07 de Junho de 2022</Td>}
                <Td>
                  <Button
                    as="a"
                    size="sm"
                    fontSize="sm"
                    colorScheme="purple"
                    leftIcon={<Icon as={RiPencilLine} />}
                  >
                    Editar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
          <Pagination />
        </Box>
      </Flex>
    </Box>
  );
}
