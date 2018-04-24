import { updateSups, removeSup } from './actions/sups';

const initialState = {
  "sups":[
    {"id":"1","userId":"1","body":"Demo demo","time":"2018-04-18T18:37:55+00:00"},
    {"id":"2","userId":"2","body":"Demo demoize","time":"2018-04-18T18:37:55+00:00"},
    {"id":"3","userId":"3","body":"Demo demoish","time":"2018-04-18T18:37:55+00:00"}
  ]
};

let fallbackReducer = (state, action) => state;

let updateSupsReducer = (state, action) => {
  let newSups = action.sups;
  let newState = { ...state, sups: newSups };
  return newState;
}

let removeSupReducer = (state, action) => {
  let removedSup = action.sup;
  console.log(removedSup);
  let filteredSups = state.sups.filter(({ id }) => id !== removedSup.id);
  let newState = { ...state, sups: filteredSups };
  return newState;
}

let babyReducers = {
  [updateSups]: updateSupsReducer,
  [removeSup]: removeSupReducer
}

const reducers = (state = initialState, action) => {
  let reducer = babyReducers[action.type] || fallbackReducer;
  return reducer(state, action);
}

export default reducers;