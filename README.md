# anydesk-haushaltsplanner

## Project setup
```
npm install
```
### Configuring Vue CLI v4.3.1

`? Please pick a preset:` **Manually select features**

`? Check the features needed for your project:` **Babel, TS, Router, Vuex, CSS Pre-processors, Linter**

`? Use class-style component syntax?` **Yes**

`? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)?` **Yes**

`? Use history mode for router? (Requires proper server setup for index fallback in production)` **Yes**

`? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default):` **Less**

`? Pick a linter / formatter config:` **Basic**

`? Pick additional lint features:` **Lint on save**

`? Where do you prefer placing config for Babel, ESLint, etc.?` **In dedicated config files**

`? Save this as a preset for future projects?` **No**

### Configuring Vuetify @2.0.5

`? Choose a preset:` **Configure (advanced)**

`? Use a pre-made template? (will replace App.vue and HelloWorld.vue)` **Yes**

`? Use custom theme?` **Yes**

`? Use custom properties (CSS variables)?` **Yes**

`? Select icon font` **Material Design Icons**

`? Use fonts as a dependency (for Electron or offline)?` **No**

`? Use a-la-carte components?` **Yes**

`? Select locale` **German**

## Run Project

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

# Project Tree
```
tr-master-app
├─ .browserslistrc
├─ .env
├─ .eslintrc.js
├─ .gitignore
├─ .vscode
│  └─ settings.json
├─ babel.config.js
├─ package-lock.json
├─ package.json
├─ public
│  ├─ favicon.ico
│  └─ index.html
├─ README.md
├─ src
│  ├─ App.vue
│  ├─ assets
│  │  ├─ logo.png
│  │  └─ logo.svg
│  ├─ components
│  │  ├─ App
│  │  │  ├─ Footer.vue
│  │  │  ├─ NavigationBar.vue
│  │  │  ├─ NavigationDrawer.vue
│  │  │  └─ settingsMenu
│  │  │     ├─ AboutModal.vue
│  │  │     ├─ FeedbackModal.vue
│  │  │     ├─ HelpModal.vue
│  │  │     ├─ index.vue
│  │  │     └─ LanguageModal.vue
│  │  ├─ Controls
│  │  │  ├─ DarkModeSwitchButton.vue
│  │  │  ├─ DatePicker.vue
│  │  │  └─ PhaseChip.vue
│  │  ├─ HelloWorld.vue
│  │  ├─ LanguageChooser.vue
│  │  └─ Notifications.vue
│  ├─ main.ts
│  ├─ plugins
│  │  └─ vuetify.ts
│  ├─ router
│  │  └─ index.ts
│  ├─ shims-tsx.d.ts
│  ├─ shims-vue.d.ts
│  ├─ store
│  │  ├─ dashboard.ts
│  │  ├─ index.ts
│  │  └─ notifications.ts
│  └─ views
│     ├─ About.vue
│     └─ Home.vue
├─ tsconfig.json
└─ vue.config.js

```


[ReadMe-Formatting](https://guides.github.com/features/mastering-markdown/)