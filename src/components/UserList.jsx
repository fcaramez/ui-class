import React, { useEffect, useState } from "react";
import { getUserList } from "../utils/axios";
import SocialProfileSimple from "./Card";
import { Grid, GridItem, HStack } from "@chakra-ui/react";

function UserList() {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUserList().then(users => {
      console.log(users);
      setUsers(users);
    });
  }, []);
  return users.length ? (
    <>
      <Grid
        templateColumns={"repeat(4, 1fr)"}
        gap={4}
      >
        {users.map(user => {
          return (
            <GridItem m={4}>
              <SocialProfileSimple user={user} />
            </GridItem>
          );
        })}
      </Grid>
    </>
  ) : (
    <>not hello</>
  );
}

export default UserList;
