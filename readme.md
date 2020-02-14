# Despegar frontend code challenge

This code contains two main folders:

- **delivery-api:** mocked backend code
- **delivery-ui:** frontend code

## Backend code

It was developed using [json-server](https://www.npmjs.com/package/json-server) npm package to run a server with mocked data.

```generate.js``` executes a [lodash](https://www.npmjs.com/package/lodash) code to generate a database with 12 restaurants, 6 sections and 200 products (those values can be changed).

To run the server you need to:

- Install ```json-server``` package and ```package.json``` dependencies with npm.
- Execute ```json-server generate.js```.

## Frontend code

It was developed using Angular 9. To run the app locally you need to:

- Install the latest version of [Angular](https://cli.angular.io/).
- Install ```package.json``` dependencies with npm.
- Execute ```ng serve```.

There were installed many **development dependencies** to help the coding process:

- [Husky](https://www.npmjs.com/package/husky): runs command before git commits and pushes to avoid deploying mistakes. It was configured to run ```lint-staged``` before any git commit and run ```ng lint && ng build --prod``` before a git push.
- [lint-staged](https://www.npmjs.com/package/lint-staged): runs linters before a commit only on the files that has changed.

Packages installed for functionality are listed below:

- [Font Awesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome): provide icons.
- [Bootstrap 4](https://www.npmjs.com/package/bootstrap): A css framework.
- [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap): Bootstrap components for Angular.
