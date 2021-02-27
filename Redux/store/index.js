import { createStore } from 'redux';
import AsyncStorage from '@react-native-community/async-storage';
import { persistReducer, persistStore } from 'redux-persist';

import rootReducer from '../reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage
};

const persistedReducer = persistReducer(persistConfig, rootReducer);


export default () => {
  const reduxStore = createStore(persistedReducer);
  const persistor = persistStore(reduxStore);
  return { reduxStore, persistor };  
};