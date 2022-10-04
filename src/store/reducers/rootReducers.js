// 이번 예의 경우 리듀서를 하나만 작성하지만 대부분의 프로젝트에서는 하나 이상의 리듀서를 만드는 경우가 많다.
// 이때 여러개의 리듀서를 합쳐서 스토어와 연결시켜줘야 한다.

import { combineReducers } from "redux";
import cartReducer from "./cartReducer";

export default combineReducers({
  cartReducer,
});

// 하나 이상의 리듀서를 합쳐줘야 할 때
// export default combineReducers({
//     cartReducer, asdadReducer
//   })
