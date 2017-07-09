const ADD_FRIEND = 'ADD_FRIEND';

export function addFriend(name) {
    return {
        type: ADD_FRIEND,
        payload: name
    }
}