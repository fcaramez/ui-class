import {
  Heading,
  Avatar,
  Box,
  Center,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

export default function SocialProfileSimple({ user }) {
  const navigate = useNavigate();
  const { first_name, last_name, avatar, email, id } = user;
  return (
    <Center
      key={id}
      py={6}
    >
      <Box
        w={"full"}
        boxShadow={"xl"}
        rounded={"lg"}
        p={6}
        textAlign={"center"}
      >
        <Avatar
          size={"xl"}
          src={avatar}
          alt={"Avatar Alt"}
          mb={4}
        />
        <Heading fontSize={"2xl"}>
          {first_name} {last_name}
        </Heading>
        <Text
          fontWeight={600}
          color={"gray.500"}
          mb={4}
        >
          <a href={`mailto:${email}`}>@{email}</a>
        </Text>

        <Stack
          mt={8}
          direction={"row"}
          spacing={4}
        >
          <Button
            flex={1}
            fontSize={"sm"}
            rounded={"full"}
            bg={"blue.400"}
            color={"white"}
            boxShadow={
              "0px 1px 25px -5px rgb(66 153 225 / 48%), 0 10px 10px -5px rgb(66 153 225 / 43%)"
            }
            _hover={{
              bg: "blue.500",
            }}
            _focus={{
              bg: "blue.500",
            }}
            onClick={() => {
              navigate(`/user/${id}`);
            }}
          >
            Details
          </Button>
        </Stack>
      </Box>
    </Center>
  );
}
