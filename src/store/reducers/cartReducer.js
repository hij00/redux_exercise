// 리듀서는 액션생성함수가 리턴한 액션객체를 dispatch 했을 때 들어오는 곳
// store를 업데이트 시켜주는 함수

// 리듀서는 switch문을 통해 action type에 따라 실행될 함수를 정의함
// 첫 번째 인자는 store의 state를 인자로 받고 두 번째 인자는 action을 받는다.
// 미리 정의해둔 목데이터를 초기 state(store) 값으로 넣는다.

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_ITEM":
      return [...state, action.payload];
    //불변성을 위해 ...state
    //여기서 리턴하는 action.payload는 추가한 아이템
    // { price : 10,000,
    //     product_name : "T-Shirt" }
    // 위와 같은 객체가 들어감
    case "DELETE_ITEM":
      return [...action.payload];
    //DELETE는 store에서 삭제하는 것이니 ...state를 하지 않음
    default:
      return state;
  }
};
export default cartReducer;

// state = INITIAL_STATE 했을때 에러남,, 왜? 이니셜 스테이트가 뭘까?
// state = [] 빈 배열 형식을 넣으니까 작동 됨! 왜?

// 에러내용
// Failed to compile
// ./src/store/reducers/cartReducer.js
//   Line 8:30:  'INITIAL_STATE' is not defined  no-undef

// Search for the keywords to learn more about each error.
