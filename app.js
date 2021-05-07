const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");

app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

mongoose.connect("mongodb://localhost:27017/wikiDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const articleSchema = {
  title: String,
  content: String,
};

const Article = mongoose.model("Article", articleSchema);

/// REQUEST TARGETTING ALL THE ARTICLES ///
app
  .route("/articles")
  // GET Operation
  .get(function (req, res) {
    Article.find(function (err, foundArticles) {
      if (!err) {
        res.send(foundArticles);
      } else {
        res.send(err);
      }
    });
  })
  // POST Operation
  .post(function (req, res) {
    const newArticle = new Article({
      title: req.body.title,
      content: req.body.content,
    });
    newArticle.save(function (err) {
      if (!err) {
        res.send("Successfully added a new article.");
      } else {
        res.send("Error occurred" + err);
      }
    });
  })
  // DELETE Operation
  .delete(function (req, res) {
    Article.deleteMany(function (err) {
      if (!err) {
        res.send("Successfully deleted all the articles");
      } else {
        res.send("Error occurred" + err);
      }
    });
  });

/// REQUEST TARGETTING ONE SPECIFIC ARTICLE ///
app
  .route("/articles/:articleTitle")
  // GET Operation
  .get(function (req, res) {
    Article.findOne(
      { title: req.params.articleTitle },
      function (err, foundArticle) {
        if (!err) {
          if (foundArticle) {
            res.send(foundArticle);
          } else {
            res.send("No article found");
          }
        } else {
          res.send("Error occurred: " + err);
        }
      }
    );
  })
  // PUT Operation
  .put(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { title: req.body.title, content: req.body.content },
      { overwrite: true },
      function (err) {
        if (!err) {
          res.send("Successfully updated the Article.");
        } else {
          res.send("Error occurred: " + err);
        }
      }
    );
  })
  // PATCH Operation
  .patch(function (req, res) {
    Article.update(
      { title: req.params.articleTitle },
      { $set: req.body },
      function (err) {
        if (!err) {
          res.send("Successfully updated the Article.");
        } else {
          res.send("Error occurred: " + err);
        }
      }
    );
  })
  // DELETE Operation
  .delete(function (req, res) {
    Article.deleteOne({ title: req.params.articleTitle }, function (err) {
      if (!err) {
        res.send("Successfully deleted the Article.");
      } else {
        res.send("Error occurred: " + err);
      }
    });
  });

app.listen(3000, function () {
  console.log("Server started on port 3000");
});
