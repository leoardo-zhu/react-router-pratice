const defaultState = {
    user: {}
}

export default (state = defaultState, action) => {
    if (action.type === 'change_userInfo') {
        return {
            user: action.value
        }
    } 
    else if (action.type === 'set_userInfo') {
        return action.value
    }

    return state
}