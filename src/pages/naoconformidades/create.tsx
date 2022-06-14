import {
  Box,
  Flex,
  Heading,
  Divider,
  VStack,
  HStack,
  SimpleGrid,
  Button,
  Text,
} from "@chakra-ui/react";
import Link from "../../../node_modules/next/link";
import { Input } from "../../components/Form/Input";
import RadioBox3 from "../../components/Form/Radiobox3";
import RadioBox4 from "../../components/Form/Radiobox4";
import { Textarea } from "../../components/Form/Textarea";
import Header from "../../components/Header/index";
import Sidebar from "../../components/sidebar/index";

export default function CreateUser() {
  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.800" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Criar Não conformidades
          </Heading>
          <Divider my="6" borderColor="gray.700" />
          <Text
            mb="4"
            fontSize="22"
            color="red.500"
            align="center"
            fontWeight="bold"
          >
            Dados
          </Text>
          <VStack spacing="8">
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="product" label="Descrição do produto" />
              <Input name="desenho" label="Nº do desenho" type="text" />
              <Input name="cliente" label="Cliente" type="text" />
            </SimpleGrid>
            <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
              <Input name="op" label="Nº OP" type="text" placeholder="" />
              <Input name="pi" label="Pedido Interno" type="text" />
              <Input name="nf" label="Nota Fiscal" type="text" placeholder="" />
            </SimpleGrid>

            <Divider my="1" borderColor="gray.700" />
            <Text fontSize="22" color="red.500" fontWeight="bold">
              Causa
            </Text>
            <Textarea name="causa" label="Motivo" h="40"></Textarea>
            <Divider my="6" borderColor="gray.700" />
            <Text fontSize="22" color="red.500" fontWeight="bold">
              Ação Imediata
            </Text>
            <RadioBox3 one="Retrabalhar" two="Refugar" three="Liberar" />
            <Textarea name="acao" label="O que fazer?" h="40"></Textarea>
            <Box align="left">
              <Text fontSize="16" color="gray.50" justify="left" mb="3">
                Grau de atenção
              </Text>
              <RadioBox4
                one="Alto"
                two="Moderado"
                three="Baixo"
                four="Melhoria"
              />
            </Box>
            <SimpleGrid minChildWidth="240px" w="100%" spacing={["6", "8"]}>
              <Input
                name="pd"
                label="Processo que detectou"
                type="text"
                placeholder=""
              />
              <Input
                name="pc"
                label="Processo causador"
                type="text"
                placeholder=""
              />
              <Input name="ep" label="Emitido por" type="text" placeholder="" />
              <Input
                name="ap"
                label="Aprovado por"
                type="text"
                placeholder=""
              />
            </SimpleGrid>
          </VStack>
          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Link href="/naoconformidades" passHref>
                <Button as="a" colorScheme="whiteAlpha">
                  Cancelar
                </Button>
              </Link>
              <Button as="a" colorScheme="red">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
