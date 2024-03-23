import { createStore } from 'react-redux';
import rootReducer from '../reducers/reducers';
import { saveState } from '../actions/actions';

const store = createStore(rootReducer);
store.subscribe(() => {
    saveState(store.getState());
})

export default store;

