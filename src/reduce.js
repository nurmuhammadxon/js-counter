const initialState = 0;

const reduce = (state = initialState, action) => {
  switch (action.type) {
    case "INC":
      return state + 1;
    case "DEC":
      return state - 1;
    case "RND":
      return state + action.payload;
    case "CLS":
      return state * 0;
  }
};

export { reduce };
