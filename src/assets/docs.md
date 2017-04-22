
## Add bootstrap

Source: https://github.com/twbs/bootstrap/tree/v4-dev

Docs: https://v4-alpha.getbootstrap.com

    npm install bootstrap@4.0.0-alpha.6 --save

styles.scss

    @import "~bootstrap/scss/bootstrap";


## Create modules and components

Code module

    ng generate module core
    ng g component core/layout
    ng g component core/top-nav

Bingo module

    ng g m bingo --routing
    ng g c bingo/new-game
    ng g c bingo/game
    ng g s bingo/game
    

## Install local storage module


https://www.npmjs.com/package/angular-2-local-storage

Install

    npm install angular-2-local-storage –save
    
Add to app.module
    
    LocalStorageModule.withConfig({
      prefix: 'my-app',
      storageType: 'localStorage'
    })

