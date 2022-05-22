import axios from 'axios';
import { usersActions } from './users-slice';
import { fetchingStateActions } from './fetchingStatus-slice';
import { modalActions } from './modal-slice';

export const fetchDataFromRemoteAPI = () => {
    return async dispatch => {
        const fetchUsernames = async () => {
            dispatch(fetchingStateActions.fetchingStatus({ isLoading: true, error: false, message: '' }));
            const response = await axios.get('https://jsonplaceholder.typicode.com/users');
            const userData = await response.data;
            dispatch(fetchingStateActions.fetchingStatus({ isLoading: false, error: false, message: '' }));
            return userData;
        };
        try {
            const users = await fetchUsernames();
            dispatch(usersActions.fetchData(users));
        } catch (err) {
            dispatch(fetchingStateActions.fetchingStatus({ isLoading: false, error: true, message: 'Users have not been loaded.' }));
            dispatch(modalActions.backdropActive(true));
            dispatch(modalActions.modalActive(true));
        }
    }
}