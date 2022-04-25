import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import React from "react";
import { iUser } from "../Data/consts";
import { UserItem } from "./UserItem";

const UserList = styled("div")({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "100%",
});

interface iProps {
  currentUser: iUser;
  users: iUser[];
}

export const Approvals: React.FC<iProps> = ({ currentUser, users }: iProps) => {
  return (
    <div style={{ display: "flex" }}>
      <UserList>
        <Typography variant="h3">{`אישורים ${currentUser.role}`}</Typography>
        {users.map(
          (user) =>
            !user.approves?.find(
              (approve) => approve.responseFrom === currentUser.role
            ) && (
              <UserItem
                fullName={user.fullName}
                id={user.id}
              />
            )
        )}
      </UserList>
    </div>
  );
};
