const { createSlice } = require("@reduxjs/toolkit");


const authSlice = createSlice({
    name: 'auth',
    initialState: {
        user: { name: null, email: null },
        token: null,
        isLoggedIn: false,
        isrefreshing:false
    }
    , extraReducers: builder=>builder.addCase()
})

export const authReducer = authSlice.reducer
