
const initState = {
    messages: []
}

function rootReducer(state = initState, action) {
    switch (action.type) {
        case ('SEND_MESSAGE'):

            return { ...state, messages: state.messages.concat(action.payload) }
    }
    return state;

}

export default rootReducer;
