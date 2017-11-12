import { Action } from '@ngrx/store';
import { type } from '../../util/type';

export const ActionTypes = {
  INIT_SETTINGS:                      type('[Settings] Initialized settings'),
  UPDATE_MY_BOOLEAN_SETTING:          type('[Settings] Update my boolean setting'),
  UPDATE_MY_STRING_SETTING:           type('[Settings] Update my string setting'),
  UPDATE_SETTINGS_SUCCESS:            type('[Settings] Successfully updated settings'),
};

export class InitSettingsAction implements Action {
  type = ActionTypes.INIT_SETTINGS;
  constructor(public payload?: any) { }
}

export class UpdateMyBooleanSettingAction implements Action {
  type = ActionTypes.UPDATE_MY_BOOLEAN_SETTING;
  constructor(public payload: boolean) { }
}

export class UpdateMyStringSettingAction implements Action {
  type = ActionTypes.UPDATE_MY_STRING_SETTING;
  constructor(public payload: string) { }
}

export class UpdateSettingsSuccessAction implements Action {
  type = ActionTypes.UPDATE_SETTINGS_SUCCESS;
  constructor(public payload?: any) { }
}

export type Actions =
InitSettingsAction |
UpdateMyBooleanSettingAction |
UpdateMyStringSettingAction |
UpdateSettingsSuccessAction;
