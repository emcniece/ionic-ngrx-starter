import { createSelector } from 'reselect'
import { storageSync } from 'ngrx-store-ionic-storage';
import { ActionReducer, ActionReducerMap, MetaReducer } from '@ngrx/store';

/**
 * Every reducer module's default export is the reducer function itself. In
 * addition, each module should export a type or interface that describes
 * the state of the reducer plus any selector functions. The `* as`
 * notation packages up all of the exports into a single object.
 */
import * as fromSettings from './settings/settings.reducer';
import * as settingsActions from './settings/settings.actions';

// Your other stores...
//import * as fromMyStore from './myStore/myStore.reducer';
//import * as myStoreActions from './myStore/myStore.actions';

/**
 * As mentioned, we treat each reducer like a table in a database. This means
 * our top level state interface is just a map of keys to inner state types.
 */
export interface State {
  hydrated?: boolean;
  settings: fromSettings.State;
  // Your other stores...
};

export function onSyncError(err) {
  console.error('Storage Sync Error:', err);
}

export const reducers: ActionReducerMap<State> = {
  settings: fromSettings.reducer,
  // Your other reducers...
};

export const storageSyncReducer = storageSync({
  keys: ['settings'],     // Only sync the `collection` state
  ignoreActions: [        // Don't sync when these actions occur
    settingsActions.ActionTypes.INIT_SETTINGS,
  ],
  hydratedStateKey: 'hydrated', // Add this key to the state
  onSyncError: onSyncError      // If a sync fails
});

export function storageMetaReducer(reducer: ActionReducer<any>): ActionReducer<any, any> {
  return storageSyncReducer(reducer);
}

/**
 * ngrx-store-ionic-storage describes metaReducers as being of type
 * `ActionReducer<any, any>[]`, but TS throws a type mismatch error
 * when this is set. metaReducers should instead be of a type
 * `MetaReducer<any, any>[]` as is set below.
 */
export const metaReducers: MetaReducer<any, any>[] = [storageMetaReducer];

/**
 * Store state accessors can be defined here and used elsewhere as such:
 * `store.select(fromRoot.getHydrated).subscribe(hydrated => { console.log(hydrated) });`
 */
export const getHydrated = (state: State) => state.hydrated;
export const getSettings = (state: State) => state.settings;

/**
 * `createSelector` from https://github.com/reactjs/reselect enables efficient,
 * composable selectors that are only recomputed when their arguments change.
 * These can be used to directly access data within stores as such:
 * `store.select(fromRoot.getMyBooleanVariable).subscribe(myBool => { console.log(myBool) });`
 */
export const getMyBooleanVariable = createSelector(getSettings, fromSettings.getMyBooleanVariable);
export const getMyStringVariable = createSelector(getSettings, fromSettings.getMyStringVariable);
