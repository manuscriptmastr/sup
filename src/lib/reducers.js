import { UPDATE_SUPS } from './actions/sups';

const initialState = {
  "sups":[
    {"userId":"1","body":"Demo demo","time":"2018-04-18T18:37:55+00:00"},
    {"userId":"2","body":"Demo demoize","time":"2018-04-18T18:37:55+00:00"},
    {"userId":"3","body":"Demo demoish","time":"2018-04-18T18:37:55+00:00"}
  ]
};

const reducers = (oldState = initialState, action) => {
  switch (action.type) {
    case UPDATE_SUPS:
      let newSups = action.sups;
      let newState = { ...oldState, sups: newSups };
      return newState;
    default:
      return oldState;
  }
}

export default reducers;