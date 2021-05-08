# Wiki-API

A RESTful API built from scratch with NodeJS, ExpressJS and Mongoose.

## How to use it

- Run `git clone https://github.com/thecodexhub/Wiki-API.git` or download the project and thereafter run `npm install`.
- Go to the project directory `cd Wiki-API` and run the server with `nodemon app.js` or `node app.js`.
- Create a local mongo db named `wikiDB` and create a collection named `articles`.
- Each document will have two fields - `title`, `content`.
- Insert some documents with the help of command line tools or Robo3T (Sample data is added below)
- Run `mongod` to create connection to the port 27017 and run `mongo` to connect the database. 
- Try GET, POST, PUT, PATCH, DELETE operation from Postman.

## Sample data

```
{
    "_id" : ObjectId("5c139771d79ac8eac11e754a"),
    "title" : "API",
    "content" : "API stands for Application Programming Interface. It is a set of subroutine definitions, communication protocols, and tools for building software. In general terms, it is a set of clearly defined methods of communication among various components. A good API makes it easier to develop a computer program by providing all the building blocks, which are then put together by the programmer."
}


{
    "_id" : ObjectId("5c1398aad79ac8eac11e7561"),
    "title" : "Bootstrap",
    "content" : "This is a framework developed by Twitter that contains pre-made front-end templates for web design"
}


{
    "_id" : ObjectId("5c1398ecd79ac8eac11e7567"),
    "title" : "DOM",
    "content" : "The Document Object Model is like an API for interacting with our HTML"
}
```
