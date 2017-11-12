import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Store } from '@ngrx/store';
import { Observable, Subject } from 'rxjs';

import * as fromRoot from '../../stores';
import * as settings from '../..//stores/settings/settings.actions';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  settings$: Observable<any>;
  destroy$: Subject<any> = new Subject();

  myBooleanSetting: boolean = false;
  myStringSetting: string = "";

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private store: Store<fromRoot.State>
  ){
  }

  ionViewDidLoad() {
    /**
     * Watch the settings store for value changes.
     * When a change happens, update this scope with new data.
     *
     * Wait until the store is hydrated! withLatestFrom(), filter()
     *
     * takeUntil(this.destroy$) ensures that only one of these
     * subscriptions is live at a time by completing the subscription
     * when ionViewWillUnload().
     */
    this.store.select(fromRoot.getSettings)
      .withLatestFrom(this.store.select(fromRoot.getHydrated))
      .filter(([settingStore, hydrated]) => hydrated)
      .map(([settingStore, hydrated]) => settingStore.settings)
      .takeUntil(this.destroy$)
      .subscribe(storeSettings => {
        console.log('Settings page loaded storeSettings:', storeSettings);

        this.myBooleanSetting = storeSettings.myBooleanSetting;
        this.myStringSetting = storeSettings.myStringSetting;
      });


  }

  /**
   * Fires the `destroy$` subject to tell any hot subscriptions
   * that they can complete via `takeUntil(this.destroy$)`
   */
  ionViewWillUnload(){
    this.destroy$.next();
  }

  /**
   * Watch local scope for input changes,
   * dispatch an update event when user changes something.
   * @param {string} varName - Name of the setting variable to update
   * @param {any}    event   - Data to set on the variable
   */
  updateBooleanSetting(varName: string, event: any){
    this.store.dispatch(new settings.UpdateMyBooleanSettingAction(event));
  }

  /**
   * Watch local scope for input changes,
   * dispatch an update event when user changes something.
   * @param {string} varName - Name of the setting variable to update
   * @param {any}    event   - Data to set on the variable
   */
  updateStringSetting(varName: string, event: any){
    this.store.dispatch(new settings.UpdateMyStringSettingAction(event));
  }

}
