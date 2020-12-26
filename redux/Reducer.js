const firstState = {name: 'Elxan', number: '5555'}

function ejdahaReducer(state = firstState, action){
    switch(action.type) {
        case 'fullAction':
            return {
                name: action.payloadName,
                number: action.payloadNumber,
            }
        default: return state;
    }
}

export default ejdahaReducer