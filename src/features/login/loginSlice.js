import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: '',
    password: ''
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers:{
        login: (state, action) => {
            console.log(action)
            state.user = action.payload.user,
            state.password = action.payload.password
        },
        logout: (state) => {
            state.user = '',
            state.password = ''
        }
    }
})

export const {login, logout} = loginSlice.actions

export default loginSlice.reducer