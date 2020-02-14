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

- [Font Awesome](https://www.npmjs.com/package/@fortawesome/angular-fontawesome): It provides all the icons.
- [Bootstrap 4](https://www.npmjs.com/package/bootstrap): CSS framework.
- [ngx-bootstrap](https://www.npmjs.com/package/ngx-bootstrap): Bootstrap components for Angular.

The json at the end of the application only has the minimum information to identify uniquely the restaurant, products, quantities and contact info so the backend can calculate what it requires.

```
{
  "restaurantId": 2,
  "wishList": [
    {
      "quantity": 2,
      "productId": 101
    },
    {
      "quantity": 2,
      "productId": 67
    },
    {
      "quantity": 3,
      "productId": 70
    }
  ],
  "contact": {
    "firstName": "myFirstName",
    "lastName": "myLastName",
    "address": "myAddress",
    "mobile": "myMobile",
    "email": "myEmail"
  }
}
```

This representation can change depending on business requests.

Executing the command ```ng test --code-coverage```, 32 tests will run giving the following coverage summary (at the time of presentation):

- **Statements**   : 67.74% ( 105/155 )
- **Branches**     : 58.33% ( 14/24 )
- **Functions**    : 61.29% ( 38/62 )
- **Lines**        : 66.67% ( 84/126 )