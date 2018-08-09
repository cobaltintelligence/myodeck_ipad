import { 
  SET_MODE,
  SET_TS
} from "../constants/action-types";



const initialState = {
  mode: null, // 'N/A',
  ts: 1532937600, // 1532930400,
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_MODE:

      return { 
        ...state, 
        focusedZone: action.payload
      };

    case SET_TS:
    
      return { 
        ...state, 
        ts: action.payload
      };

    default:
      return state;
  }
};

export default rootReducer;