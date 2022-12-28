const verifyOTPReducer = (state = null, action) => {
    switch (action.type) {
        case 'GENERATE_OTP':
            return {...state}
        default:
            return {...state}
    }
}

export default verifyOTPReducer