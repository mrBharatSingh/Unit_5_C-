import { GET_SEARCH_RESULT } from "./actionType";

const init = {
  result: {
    lading: false,
    error: false,
    data: [],
  },
};

export const reducer = (store = init, { type, payload }) => {
  switch (type) {
    case GET_SEARCH_RESULT:
      return { ...store, result: { ...store.result, data: payload } };
    default:
      return store;
  }
};
