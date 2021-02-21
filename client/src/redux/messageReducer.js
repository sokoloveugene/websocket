export const messageReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_MESSAGE":
      return [...state, action.payload];

    case "DELETE_MESSAGE":
      return state.filter((m) => m.id !== action.payload);

    case "OPEN_MESSAGE":
      return state.map((m) =>
        m.id === action.payload ? { ...m, opened: true } : m
      );

    case "CLOSE_MESSAGE":
      return state.map((m) =>
        m.id === action.payload ? { ...m, opened: false } : m
      );
    default:
      return state;
  }
};
