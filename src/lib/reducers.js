import { updateSups } from './actions/sups';

const initialState = {
  "sups":[
    {"userId":"1","body":"Demo demo","time":"2018-04-18T18:37:55+00:00"},
    {"userId":"2","body":"Demo demoize","time":"2018-04-18T18:37:55+00:00"},
    {"userId":"3","body":"Demo demoish","time":"2018-04-18T18:37:55+00:00"}
  ]
};

let fallbackReducer = (state, action) => state;

let updateSupsReducer = (state, action) => {
  let newSups = action.sups;
  let newState = { ...state, sups: newSups };
  return newState;
}

let babyReducers = {
  [updateSups]: updateSupsReducer
}

const reducers = (state = initialState, action) => {
  let reducer = babyReducers[action.type] || fallbackReducer;
  return reducer(state, action);
}

export default reducers;