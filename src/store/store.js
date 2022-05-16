import { configureStore } from '@reduxjs/toolkit';
import { listenerMiddleware } from './middleware/middleware';
import entitiesReducer from './entities';

export const store = configureStore({
  reducer: {
    entities: entitiesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(listenerMiddleware.middleware),
});
