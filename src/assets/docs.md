

Source code: https://github.com/dhcode/angular-bingo-game

## Setup development environment

1. Install Node.js >= v6.9.0 (current v7.9.0)	https://nodejs.org/en/download/

2. Install Angular cli v1.0.0			https://github.com/angular/angular-cli 
    
    Open a terminal
    
        npm install -g @angular/cli

3. Initialize a new Angular project

    Terminal: switch to the desired projects parent folder

        ng new bingo --style scss --routing

4. Run it

        cd bingo
        ng serve

    Open http://localhost:4200/ in your Browser


## IntelliJ Setup

- Settings -> Editor -> Code Style -> TypeScript
    - Spaces -> Within -> ES6 import/export braces: Tick
    - Punctuation -> Use single quotes always


- Settings -> Plugins -> Browse repositories
    - Angular JS (Framework Integration) should be installed


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

## Get prepared files

https://raw.githubusercontent.com/dhcode/angular-bingo-game/master/src/assets/words.json

https://raw.githubusercontent.com/dhcode/angular-bingo-game/master/src/app/bingo/bingo-game.ts

