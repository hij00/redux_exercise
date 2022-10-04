import React from "react";
import styled from "styled-components";
import CartIcon from "./CartIcon";
import { useDispatch } from "react-redux";
import { addCart } from "../store/action";

export default function ProductCard({ addToCart, item }) {
  const dispatch = useDispatch();
  const onClick = () => {
    dispatch(addCart(item));
  };
  return (
    <Card>
      <Img src={item.product_img} />
      <Title>{item.product_name}</Title>
      <Price>{item.price.toLocaleString()} 원</Price>
      <AddCartBtn onClick={onClick}>
        <CartIcon width="16" height="16" />
        <span>장바구니 담기</span>
      </AddCartBtn>
    </Card>
  );
}

const Card = styled.div`
  width: 250px;
  height: 390px;
  margin-right: 32px;
  margin-bottom: 50px;

  &:nth-child(4n) {
    margin-right: 0;
  }
`;

const Img = styled.div`
  width: 250px;
  height: 250px;
  margin-bottom: 20px;
  border-radius: 3px;

  background: url(${({ src }) => src});
`;

const Title = styled.p`
  margin-bottom: 12px;
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: 900;
  font-size: 15px;
  line-height: 130%;
`;

const Price = styled.span`
  font-family: Noto Sans KR;
  font-style: normal;
  font-weight: bold;
  font-size: 15px;
  color: #e82c23;
`;

const AddCartBtn = styled.button`
  all: unset;
  display: flex;
  align-items: center;

  width: 122px;
  height: 30px;
  margin-top: 24px;
  padding-left: 12px;
  background: #000000;
  border-radius: 3px;

  span {
    padding-left: 14px;
    font-family: Noto Sans KR;
    font-weight: bold;
    font-size: 13px;
    color: #ffffff;
  }
`;
