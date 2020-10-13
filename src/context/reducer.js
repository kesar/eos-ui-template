export const reducer = (state, action) => {
  switch (action.type) {
    default:
    case "SELECT_ID": {
      return {
        id: action.payload,
      };
    }
  }
};
