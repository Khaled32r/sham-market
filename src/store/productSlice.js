import { createSlice,createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getProductFu=createAsyncThunk('get',async(id='')=>{
    try{
    const response= await axios.get(`https://fakestoreapi.com/products/${id}`)
    return response.data
    }catch(error){
        alert(error)
    }
})

export const loginFu = createAsyncThunk('login', async ({ username, password }) => {
    try {
        const response = await axios.post('https://fakestoreapi.com/auth/login', {
        username,
        password
        });

        
        localStorage.setItem('token', response.data.token);

        localStorage.setItem('username', username);

        const usersRes = await axios.get('https://fakestoreapi.com/users');

        const user = usersRes.data.find(u => u.username === username);

        if (user) {
        localStorage.setItem('userId', user.id);
        }

        return response.data;

    } catch (error) {
        alert(error);
    }
    });


export const registerFu=createAsyncThunk('register',async({ name, username,email, password })=>{

    try{
        const response=await axios.post('https://fakestoreapi.com/users',{
            username,email,password
        })
        console.log(response)
        loginFu({username,password})
    }catch(error){
        alert(error)
    }


})

export const getUserCartFu=createAsyncThunk('getUserCartFu',async(id)=>{
    try{
        const response=await axios.get(`https://fakestoreapi.com/carts/user/${id}`)
        console.log(response,"ampkamsmfkdm")
        return response.data
    }catch(error){
        alert(error)
    }
})

export const productSlice=createSlice({
    name:"product",
    initialState:{
        isLoading:false,
        data:[],
        islogin:false,
        userCart:[]
    },
    extraReducers(bulider){
        bulider
        .addCase(getProductFu.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getProductFu.fulfilled,(state,action)=>{
            state.isLoading=false
            state.data=action.payload
            // console.log(action)
        })

        .addCase(loginFu.fulfilled,(state)=>{
            state.islogin=true
        })

        .addCase(getUserCartFu.pending,(state)=>{
            state.isLoading=true
        })
        .addCase(getUserCartFu.fulfilled,(state,action)=>{
            state.isLoading=false
            state.userCart=action.payload
        })
    }
    
})


export default productSlice.reducer
