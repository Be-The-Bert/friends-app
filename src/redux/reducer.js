const initialState = {
    friends: ['Jasmine', 'Jeremy', 'Bob Saggat']
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case 'ADD_FRIEND':
            return {
                friends: [...state.friends, action.payload]
            }
        default: 
            return state;
    }
}