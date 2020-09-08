import TYPES from '../../../redux/types/constant';

console.log("You called me agai in action");

export const setNameAction = (payload) => ({
    type: TYPES.REQUEST_SET_NAME_INIT,
    payload:payload
})