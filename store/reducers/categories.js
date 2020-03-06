import CATEGORY from "../../data/dummy-data";
import Category from "../../models/Category";

const initialState = {
    category: CATEGORY
};

const CategoryReducer = (state = initialState, action) => {
    return state;
};

export default CategoryReducer;
