import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    status:false,
    userData:null    
};

const authSlice=createSlice({
    name:"auth",
    initialState,
    reducers:{
        login:(state,action)=>{
            
        },
        logout:()=>{}
    }
})

export default authSlice.reducer;