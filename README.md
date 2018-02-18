# Ionic Framework ngrx Starter

A quick example of [ngrx](https://github.com/ngrx) integrated with [Ionic Framework 3](https://github.com/ionic-team/ionic).

## Installation

Install packages as usual:

```
npm install
```

The packages that are new to this repo are:

```
npm i --save reselect ngrx-store-ionic-storage @ngrx/core @ngrx/effects @ngrx/store @ngrx/store-devtools

ionic cordova plugin add cordova-sqlite-storage --save
```

## Running

The default home page is set to the Settings page. Run as usual, change the example settings, and reload the browser - your changes will persist between refreshes.

```
ionic serve
```

## Extending

For an introduction to NGRX, [see this gist](https://gist.github.com/btroncone/a6e4347326749f938510).

File structure for a "settings" store:

```
mkdir -p src/stores/settings

touch src/stores/settings/settings.actions.ts
touch src/stores/settings/settings.model.ts
touch src/stores/settings/settings.reducer.ts
touch src/stores/settings/settings.effects.ts
```

To integrate a new store:

1. Create new store directory and files
    - Minimum: action and reducer files
1. Modify [src/app/app.module.ts](./src/app/app.module.ts)
    - Import store effects, add to `EffectsModule.forRoot([])`
    - Modify the `initialState{}` StoreModule if needed
1. Modify [src/stores/index.ts](./src/stores/index.ts)
    - Import store reducer and actions
    - Add store.State to `State` interface
    - Add store.reducer to `reducers: ActionReducerMap`
    - Add store key (as defined in `reducers`) to `storageSyncReducer`
    - Add Store state accessors as needed

## Testing

Ionic Framework does not include a testing framework by default.

If you decide to set tests up, see the following testing documents:

- [ngrx/platform/store](https://github.com/ngrx/platform/blob/master/docs/store/testing.md)
- [ngrx/platform/effects](https://github.com/ngrx/platform/blob/master/docs/effects/testing.md)
