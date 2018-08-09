// src/js/actions/index.js

import { 
	SET_TS,
	SET_MODE
} from "../constants/action-types";

export const setMode = mode => ({ 
	type: SET_MODE, 
	payload: mode 
}); 


export const setTimestamp = ts => ({ 
	type: SET_TS, 
	payload: ts 
}); 