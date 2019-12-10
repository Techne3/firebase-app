import React from "react";
import { combineReducers } from "redux";

//reducers
import createUser from './Signin'

const Reducers = combineReducers({
    signIn: createUser
});

export default Reducers;
