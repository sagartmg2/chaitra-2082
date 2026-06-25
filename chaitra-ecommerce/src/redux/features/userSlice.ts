import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface UserState {
    value: null | {
        firstName: string
        email: string
        role: string
        isAdmin:boolean
        isSeller:boolean
    }
}

const initialState: UserState = {
    // value: null,
    value: null
}

export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state,action) => {
            console.log({action});
            console.log("change user of redux");

            state.value = action.payload
            // state.value = {
            //     firstName: "ram",
            //     email: "Ram@gmail.cm",
            //     role: "seller"
            // }
        },
        logout: (state) => {
            state.value = null
        },
    },
})

// Action creators are generated for each case reducer function
export const { setUser, logout } = userSlice.actions

export default userSlice.reducer