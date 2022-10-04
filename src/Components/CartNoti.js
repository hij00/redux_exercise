import React, { useEffect } from "react";
import styled from "styled-components";
import { useHistory } from "react-router-dom";
import CartIcon from "./CartIcon";
import { useSelector } from "react-redux";

export default function CartNoti({ itemCount }) {
  const history = useHistory();
  const items = useSelector((store) => store.cartReducer);

  console.log(items);
  // 콘솔창에 장바구니 담기 버튼 클릭하면 상품 찍힘
  // 근데 장바구니 숫자는 안 바뀜
  return (
    <Icon onClick={() => history.push("/cart")}>
      <ItemCount>
        <span>{itemCount}</span>
      </ItemCount>
      <CartIcon width="32" height="32" />
    </Icon>
  );
}

const Icon = styled.div`
  position: relative;
`;

const ItemCount = styled.div`
  position: absolute;
  top: -7px;
  right: -7px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 19px;
  height: 20px;
  border-radius: 2px;
  background-color: #e82c23;
  font-size: 11px;
`;
