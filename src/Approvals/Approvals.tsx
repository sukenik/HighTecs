import styled from "@emotion/styled";
import React from "react";
import { UserItem } from "./UserItem";

const UserList = styled("div")({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  width: "100%"
});
export const Approvals: React.FC = () => {
  return (
    <div style={{ display: "flex" }}>
      <UserList>
        <UserItem fullName="אליק" id="s1" />
        <UserItem fullName="שריקי" id="s9028699" />
      </UserList>
    </div>
  );
};
