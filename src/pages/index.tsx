import { Flex, Button, Stack, Box, Text } from "@chakra-ui/react";
import { useForm, SubmitHandler } from "react-hook-form";
import { Input } from "../components/Form/Input";
import { Logo } from "../components/Header/Logo";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

type SigninFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required().email(),
  password: yup.string().required(),
});

export default function SignIn() {
  const { register, handleSubmit, formState, errors } = useForm({
    resolver: yupResolver(signInFormSchema),
  });

  const handleSigIn: SubmitHandler<SigninFormData> = async (values) => {
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log(values);
  };

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex
        as="form"
        width="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSigIn)}
      >
        <Stack spacing="4">
          <Box align="center" mb="4">
            <Logo />
          </Box>
          <Input
            name="email"
            type="email"
            label="E-mail"
            placeholder="E-mail"
            {...register("email", { required: "required" })}
          />
          <Input
            name="password"
            type="password"
            label="Senha"
            placeholder="Senha"
            {...register("password", { required: "required" })}
          />
        </Stack>
        <Button
          type="submit"
          mt="6"
          colorScheme="red"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
