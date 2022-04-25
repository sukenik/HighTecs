import React, { useState } from "react";
import { Collapse, styled, Typography, Checkbox, Button } from "@mui/material";
import { KeyboardArrowDown } from "@mui/icons-material";

interface iProps {
  id: string;
  fullName: string;
}

const DropDownArrow = styled(KeyboardArrowDown)(
  (props: { isOpen: boolean }) => ({
    transform: props.isOpen ? "rotate(180deg)" : "",
    cursor: "pointer",
    margin: "4px",
  })
);

const UserBox = styled("div")((props: { isOpen: boolean }) => ({
  display: "flex",
  flexDirection: "row",
  backgroundColor: "#FDE75F",
  direction: "rtl",
  alignItems: "center",
  textAlign: "start",
  padding: "15px",
  margin: props.isOpen ? "5px 0 0 0" : "5px 0",
  borderRadius: props.isOpen ? '5px 5px 0 0' : '5px'
}));

const ApprovalButton = styled(Button)({
  backgroundColor: "#0a0",
  borderRadius: "25px",
  marginRight: "15%",
  "&:hover": {
    backgroundColor: "#0a0",
  },
});

export const UserItem: React.FC<iProps> = ({ fullName, id }: iProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div style={{ width: "600px" }}>
      <UserBox isOpen={isOpen}>
        <DropDownArrow isOpen={isOpen} onClick={handleClick} />
        <Typography style={{ width: "30%", textOverflow: "ellipsis" }}>
          {fullName}
        </Typography>
        <Typography style={{ width: "10%", textOverflow: "ellipsis" }}>
          {id}
        </Typography>
        <ApprovalButton variant={"contained"}>אישור</ApprovalButton>
        <ApprovalButton
          variant={"contained"}
          style={{ backgroundColor: "red" }}
        >
          סירוב
        </ApprovalButton>
      </UserBox>
      <Collapse in={isOpen}>
        <div
          style={{
            backgroundColor: "#B2D0F7",
            height: "110px",
            width: "-webkit-fill-available",
            borderRadius: ' 0 0 5px 5px'
          }}
        ></div>
      </Collapse>
    </div>
  );
};
