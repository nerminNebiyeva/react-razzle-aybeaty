import { SEARCH_STARTED, SEARCH_FINISHED } from '../actions';

const search = (state = {}, action) => {
  switch (action.type) {
    case SEARCH_STARTED:
      return {loading:true, list:[]} ;
    case SEARCH_FINISHED:
      return {loading:false, list: action.payload.videos};
    default:
      return state;
  }
};

export default search;
