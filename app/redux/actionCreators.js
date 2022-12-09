import * as actionTypes from './actionTypes';
import axios from 'axios';

export const loadDishes = dishes => {
    return {
        type: actionTypes.LOAD_DISHES,
        payload: dishes,
    }
}

export const getDishes = () => dispatch => {
    axios.get("https://awesomeproject-db746-default-rtdb.firebaseio.com/dishes.json")
        .then(respones => dispatch(loadDishes(respones.data)))
        .catch(err => console.log(err))

}


export const addToFavourites = dish => {
    return {
        type: actionTypes.ADD_TO_FAVOURITES,
        payload: dish,
    }
}