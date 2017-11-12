# Ionic Framework ngrx Starter

## Installation

Install packages:

```
npm i --save reselect ngrx-store-ionic-storage @ngrx/core @ngrx/effects @ngrx/store @ngrx/store-devtools
ionic cordova plugin add cordova-sqlite-storage --save
```

Create store directories and files (eg. "settings" store):

```
mkdir -p src/stores/settings

touch src/stores/index.ts
touch src/stores/settings/settings.actions.ts
touch src/stores/settings/settings.model.ts
touch src/stores/settings/settings.reducer.ts
touch src/stores/settings/settings.effects.ts

mkdir -p src/util

touch src/util/type.ts
```


## Testing

```
touch src/stores/settings/settings.effects.spec.ts
touch src/stores/settings/settings.reducer.spec.ts
```
