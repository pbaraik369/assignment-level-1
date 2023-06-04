import { combineReducers, Reducer } from "redux";

// Define your initial state structure
export interface RootState {
  categories: any[];
}

// Define your action types
interface SetCategoriesAction {
  type: "SET_CATEGORIES";
  payload: any[];
}

// Define your reducers
const initialCategoriesState: RootState["categories"] = [];
const categoriesReducer: Reducer<
  RootState["categories"],
  SetCategoriesAction
> = (state = initialCategoriesState, action) => {
  switch (action.type) {
    case "SET_CATEGORIES":
      return action.payload;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  categories: categoriesReducer,
});

export default rootReducer;
