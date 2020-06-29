/**
 * Give the state an initial value.
 */
const initialState = {
  token: 1,
  count: 10,
};

/**
 * Reducer is a pure function. It does the job demanded by the action and
 * return the new state after the action.
 * @param {*} state The original state passed in by the component.
 * @param {*} action The action required by the component.
 * @return The new state after the action taken.
 */
exports.reducer = (state = initialState, action) => {
  /**
   * The reducer can perform different operations based on the action's type.
   */
  switch (action.type) {
    case 'INCREMENT':
      return {...state, token: state.token + 1};
      break;
    case 'REDUCE':
      return {...state, count: state.count - 1};
      break;

    default:
      break;
  }
  return state;
};
