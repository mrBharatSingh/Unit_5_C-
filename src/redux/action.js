import { GET_SEARCH_RESULT } from "./actionType";

export const getSearchResult = (payload) => ({
  type: GET_SEARCH_RESULT,
  payload,
});
