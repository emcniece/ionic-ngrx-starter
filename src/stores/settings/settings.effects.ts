import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { defer } from 'rxjs/observable/defer';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';

import * as settings from './settings.actions';

// Import as needed:
//import { Store } from '@ngrx/store';
//import { toPayload } from '@ngrx/effects';
//import * as fromRoot from '../';

@Injectable()
export class SettingsEffects {
  constructor(
    //private store: Store<fromRoot.State>,
    private actions$: Actions
  ) {}

  @Effect()
  init$: Observable<Action> = defer(function(){
    return Observable.of(new settings.InitSettingsAction());
  });

  @Effect()
  updatedSettings$: Observable<Action> = this.actions$
  .ofType(settings.ActionTypes.UPDATE_SETTINGS_SUCCESS)
  .switchMap(function(){
    return Observable.of(new settings.UpdateSettingsSuccessAction());
  });
}
