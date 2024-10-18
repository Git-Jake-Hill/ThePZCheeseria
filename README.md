# The PZ Cheeseria

As an MVP of our cheeseria, we are looking to display our cheese selection that can be purchased in-store.

## Description

-   Front-end React
-   Back-end NodeJS
-   Database SQLite (in memory storage for proof of concept - can replace with a cloud database for persistent storage)
-   Unit Test Jest

## Getting Started

Build and run both front-end and back-end with Docker

```
docker-compose up --build
```

To stop the Docker container

```
docker-compose down
```

Front-end address

```
http://localhost:3000/
```

Back-end address (GET request)

```
http://localhost:5000/api/cheese
```

### Build and Run Individually

Back-end

```
CD back-end
npm install
npm start
```

Front-end

```
CD front-end
npm install
npm start
```

## Running Tests

Run the back-end API route tests

```
CD back-end
npm test
```

## API Docs (Swagger / Open API)

Run the back-end server locally first

```
CD back-end
npm install
npm start
```

API Docs available at:

```
http://localhost:5000/api-docs
```

## With More Time

-   Front-end add functionality to create, update, delete cheese in the database.
-   Front-end build out pages, nav-bar etc.
-   Add additional Unit Tests to be more exhaustive.
-   Upgrade SQLite to a cloud database for persistent storage between sessions/users.

## Author

Jacob Hill
