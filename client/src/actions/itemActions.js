import	axios from 'axios';
import { GET_ITEMS, ADD_ITEMS, DELETE_ITEMS, ITEMS_LOADING } from './types';

export const getItems = () => dispatch => {
	// return {
	// 	type: GET_ITEMS,
	// }
	dispatch(setItemsLoading());
	axios
		.get('/api/items')
		.then(
			res => dispatch({
				type: GET_ITEMS,
				payload: res.data
			})
		)
}

export const addItem = (item) => dispatch => {
	// return {
	// 	type: ADD_ITEMS,
	// 	payload: item
	// }

	axios
		.post('/api/items', item)
		// .then(function (response) {
		//   console.log(response);
		// })
		.then(res => dispatch ({
			 	type : ADD_ITEMS,
			 	payload: res.data
			})
		 )
}

export const deleteItem = id  => {
	return {
		type: DELETE_ITEMS,
		payload: id
	}
	// axios
	// 	.delete(`/api/items/${id}`)
	// 	.then(res => dispatch ({
	// 		 	type : DELETE_ITEMS,
	// 		 	payload: id
	// 		})
	// 	 )
}



export const setItemsLoading = () => {
	return {
		type: ITEMS_LOADING
	}
}