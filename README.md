# Test backend for POST / PUT requests

## Setup

1. Clone this repo
1. Install dependencies: `npm install`
1. Start the app: `npm start`
1. App should now be listening on port 9000.

## Routes

**Note**: The `POST` and `PUT` routes simply read the request body and echo it back to the client.

|Method|Path|Notes|
|----|----|----|
|`GET`|`/`|Health check route|
|`POST`|`/books`|Create a book; expects json request body|
|`PUT`|`/books/:id`|Update a book; expects json request body|