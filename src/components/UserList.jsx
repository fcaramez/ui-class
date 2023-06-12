import React, { useEffect, useState } from "react";
import { getUserList } from "../utils/axios";
import SocialProfileSimple from "./Card";
import { Center, Grid, GridItem, Spinner } from "@chakra-ui/react";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUserList().then((users) => {
      console.log(users);
      setUsers(users);
    });
  }, []);
  return users.length ? (
    <Grid
      templateColumns={{ md: "repeat(4, 1fr)", sm: "repeat(1, 1fr)" }}
      gap={4}
    >
      {users.map((user) => {
        return (
          <GridItem m={4}>
            <SocialProfileSimple user={user} />
          </GridItem>
        );
      })}
    </Grid>
  ) : (
    <Center h="100vh" w="100vw">
      <Spinner
        thickness="4px"
        speed="0.65s"
        emptyColor="gray.200"
        color="blue.500"
        size="2xl"
      />
    </Center>
  );
}

export default UserList;
