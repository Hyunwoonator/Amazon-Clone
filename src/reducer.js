export const initialState = {
    basket: [],
};

const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
        case 'ADD_TO_BASKET':
            //Add To Basket
            return { state }
    case 'REMOVE_FROM_BASKET':
            // Remove From Basket
            return { state }
    default:
        return state;

    }
}

export default reducer;