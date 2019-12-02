# UdemyApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.19.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

### Added by Author
This app relies on nodejs server running on port 3006 for authentication.

Logged in user is redirected to dashboard page which has a list of stocks that are always replenishable and provided by an API that fetches data from mongoDB

It is assumed the user has rs 10000 in the wallet.

The user can select list of stocks and edit their quantity accordingly.

Once the user clicks on the "check out" button , user is redirected to cart page

This shows the "buy" button if the wallet balance is sufficient to buy the stocks
If not, the "buy" button is not displayed and an "insufficient balance" message is displayed.

If the user buys the stocks , the user is then redirected to another page which lists all the purchased stocks.


