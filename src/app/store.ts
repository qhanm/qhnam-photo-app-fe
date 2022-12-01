import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import AppStoreReducer from "./AppStore";
export const store = configureStore({
  reducer: {
    AppStoreReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
