import { createSelector } from 'reselect';
import * as settings from './settings.actions';
import { Settings } from './settings.model';

export interface State {
    loading: boolean,
    settings: Settings;
};

export const initialState: State = {
  loading: true,
  settings: {
    myBooleanSetting: false,
    myStringSetting: 'Default string',
  }
};

export function reducer(state = initialState, action: settings.Actions): State {
  switch (action.type) {
    case settings.ActionTypes.INIT_SETTINGS: {
      return {
        ...state,
        loading: false,
        settings: state.settings
      };
    }

    case settings.ActionTypes.UPDATE_MY_BOOLEAN_SETTING: {
      return {
        ...state,
        loading: false,
        settings: Object.assign({}, state.settings, {
          myBooleanSetting: action.payload
        })
      };
    }

    case settings.ActionTypes.UPDATE_MY_STRING_SETTING: {
      return {
        ...state,
        loading: false,
        settings: Object.assign({}, state.settings, {
          myStringSetting: action.payload
        })
      };
    }

    case settings.ActionTypes.UPDATE_SETTINGS_SUCCESS: {
      return {
        ...state,
        loading: false,
        settings: state.settings
      };
    }

    default: {
      return state;
    }
  }
};

export const getSettings = (state: State) => state.settings;
export const getMyBooleanVariable = createSelector(getSettings, settings => settings['myBooleanSetting']);
export const getMyStringVariable = createSelector(getSettings, settings => settings['myStringSetting']);
