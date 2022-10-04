import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CartNoti from "./CartNoti";

export default function Nav({ itemCount }) {
  const history = useHistory();

  useEffect(() => {
    // console.log("Nav render");
  });

  return (
    <NavContainer>
      <NavWrapper>
        <NavTitle onClick={() => history.push("/")}>wemarkettt</NavTitle>
        <CartNoti itemCount={itemCount} width="32" height="32" />
      </NavWrapper>
    </NavContainer>
  );
}

const NavContainer = styled.nav`
  display: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: black;
  color: white;
`;

const NavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1096px;
  margin: 0 auto;
`;

const NavTitle = styled.span`
  font-family: Noto Sans;
  font-style: italic;
  font-weight: 900;
  font-size: 28px;
  color: #fffef8;
`;
