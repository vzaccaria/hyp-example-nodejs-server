# Swagger generated server

> Used during the Hypermedia/Backend lectures

## Overview

- includes fetching data of a book from a database (through
  [Knex.js](http://knexjs.org)).
- includes session management (through
  [cookie-session](https://www.npmjs.com/package/cookie-session)). To test the
  session management, go to the
  [Swagger UI interface](http://localhost:8080/docs), try a get to `cart/1`. It
  should return an un-authorized error. Try then with a post to `user/login` and
  retry with a get over `cart/1`. Now it should work.

This server was generated through the [Swagger editor](https://editor.swagger.io/)
web app, by uploading the specification in the `api` directory. It was then modified to add the
database connections and cookie management.

### Running the server

To run the server, run:

```
npm start
```

To view the Swagger UI interface:

```
open http://localhost:8080/docs
```

This project leverages the mega-awesome
[swagger-tools](https://github.com/apigee-127/swagger-tools) middleware which
does most all the work.
