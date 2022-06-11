import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getUser } from "../../api/user";
import { AppThunk } from "../store";

interface UserState {
  id: string;
  name: string;
  email: string;
  isLoading: boolean;
  error: string | null;
}

const initialState: UserState = {
  id: "0x",
  name: "",
  email: "",
  isLoading: false,
  error: null
};

const startLoading = (state: UserState) => {
  state.isLoading = true;
};

const loadingFailed = (state: UserState, action: PayloadAction<string>) => {
  state.isLoading = false;
  state.error = action.payload;
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserStart: startLoading,
    getUserSuccess(state, { payload }: PayloadAction<any>) {
      const { _id, name, email } = payload;
      state.id = _id;
      state.name = name;
      state.email = email;
      state.isLoading = false;
      state.error = null;
    },
    getUserFailure: loadingFailed
  }
});

export const { getUserStart, getUserSuccess, getUserFailure } = userSlice.actions;

export default userSlice.reducer;

export const fetchUser = (userId: string): AppThunk => async (dispatch) => {
  try {
    dispatch(getUserStart());
    const user = await getUser(userId);
    dispatch(getUserSuccess(user));
  } catch (err: any) {
    dispatch(getUserFailure(err.toString()));
  }
};
