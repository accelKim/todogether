import { createSlice } from "@reduxjs/toolkit";

let user = createSlice({
  name: "user", // 사용할 변수의 이름을 등록
  initialState: {
    // 변수 리스트 등록
    username: "김원호",
    age: 27,
  },

  reducers: {
    changeName: (state, action) => {
      state.username = action.payload;
    },
    changeAge: (state, action) => {
      state.age += action.payload;
    },
  },
});

export const { changeName, changeAge } = user.actions;
export default user;
