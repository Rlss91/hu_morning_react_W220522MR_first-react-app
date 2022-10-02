import { createSlice } from "@reduxjs/toolkit";

//create variable that we want redux to store for us
//this object configure the redux "state"
const initialAuthState = {
  loggedIn: false,
  userData: null,
  userInfo: null,
};

const authSlice = createSlice({
  //for redux use
  name: "auth",
  //initial state
  initialState: initialAuthState,
  //functions to munipulate the state
  //the functions inside the reducers called actions
  reducers: {
    /*
        we will call this function when we logged in
        to update redux "state" that the user logged in
    */
    login(state, action) {
      state.loggedIn = true;
      // better to verify the payload
      state.userData = action.payload;
    },
    /*
        we will call this function when we logged out
        to update redux "state" that the user logged out.
        if we need to reset the state this is the simpler way
    */
    logout: (state) => initialAuthState,
    // logout(state) {
    //   state.loggedIn = false;
    //   state.userData = null;
    // },
    updateUserInfo(state, action) {
      // better to verify the payload
      state.userInfo = action.payload;
    },
  },
});

/*
    export the actions (the functions that will munipulate the "state"),
    so we can use them from other components/pages.
    this is how we can get access to this actions to update/munipulate the "state".
*/
export const authActions = authSlice.actions;

/*
    export the actions, the state and the other configurations to redux (index.js) of redux
    so redux can configure the "big state"
*/
export default authSlice.reducer;
