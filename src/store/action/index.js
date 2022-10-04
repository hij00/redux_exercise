export const addCart = (item) => {
  return {
    type: "ADD_ITEM",
    payload: item,
  };
};

export const deleteCart = (items) => {
  return {
    type: "DELETE_ITEM",
    payload: items,
  };
};

// 장바구니에서는 카트에 상품추가(ADD_CART)와 카트에서 상품제거(DELETE_CART) 액션이 있음
// addCart와 deleteCart는 액션 그 자체가 아닌 액션생성함수
// 액션생성함수가 return하는 객체가 바로 액션객체

// payload가 뭐지?
// type을 정하는 이유?
