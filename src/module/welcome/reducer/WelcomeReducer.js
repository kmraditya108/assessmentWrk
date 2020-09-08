import TYPES from '../../../redux/types/constant';
import { createReducer } from 'reduxsauce';
import * as DefaultHandlers from '../../../redux/reducer/Handlers';


export const HANDLERS = {
	[TYPES.REQUEST_SET_NAME_INIT]: DefaultHandlers.request,
	[TYPES.REQUEST_SET_NAME_SUCCESS]: DefaultHandlers.success,
	[TYPES.REQUEST_SET_NAME_FAILURE]: DefaultHandlers.failure
};

export default createReducer(DefaultHandlers.INITIAL_STATE, HANDLERS);



    
    