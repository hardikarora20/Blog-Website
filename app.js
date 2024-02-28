import express from "express";
import bodyParser from "body-parser";
import ejs from "ejs";
import _ from "lodash";

// var _ = require("lodash");
const homeStartingContent = "Lacus vel facilisis volutpat est velit egestas dui id ornare. Semper auctor neque vitae tempus quam. Sit amet cursus sit amet dictum sit amet justo. Viverra tellus in hac habitasse. Imperdiet proin fermentum leo vel orci porta. Donec ultrices tincidunt arcu non sodales neque sodales ut. Mattis molestie a iaculis at erat pellentesque adipiscing. Magnis dis parturient montes nascetur ridiculus mus mauris vitae ultricies. Adipiscing elit ut aliquam purus sit amet luctus venenatis lectus. Ultrices vitae auctor eu augue ut lectus arcu bibendum at. Odio euismod lacinia at quis risus sed vulputate odio ut. Cursus mattis molestie a iaculis at erat pellentesque adipiscing.";
const aboutContent = "Hac habitasse platea dictumst vestibulum rhoncus est pellentesque. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Non diam phasellus vestibulum lorem sed. Platea dictumst quisque sagittis purus sit. Egestas sed sed risus pretium quam vulputate dignissim suspendisse. Mauris in aliquam sem fringilla. Semper risus in hendrerit gravida rutrum quisque non tellus orci. Amet massa vitae tortor condimentum lacinia quis vel eros. Enim ut tellus elementum sagittis vitae. Mauris ultrices eros in cursus turpis massa tincidunt dui.";
const contactContent = "Scelerisque eleifend donec pretium vulputate sapien. Rhoncus urna neque viverra justo nec ultrices. Arcu dui vivamus arcu felis bibendum. Consectetur adipiscing elit duis tristique. Risus viverra adipiscing at in tellus integer feugiat. Sapien nec sagittis aliquam malesuada bibendum arcu vitae. Consequat interdum varius sit amet mattis. Iaculis nunc sed augue lacus. Interdum posuere lorem ipsum dolor sit amet consectetur adipiscing elit. Pulvinar elementum integer enim neque. Ultrices gravida dictum fusce ut placerat orci nulla. Mauris in aliquam sem fringilla ut morbi tincidunt. Tortor posuere ac ut consequat semper viverra nam libero.";

const app = express();
var blogPosts = [
  {
    "title": "First Post",
    "desc" : "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Blandit cursus risus at ultrices mi tempus imperdiet nulla. Urna cursus eget nunc scelerisque viverra mauris in. Nec tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. In mollis nunc sed id. Felis bibendum ut tristique et egestas. Augue neque gravida in fermentum. Sed risus ultricies tristique nulla aliquet enim. Urna neque viverra justo nec ultrices dui sapien. At erat pellentesque adipiscing commodo elit at imperdiet dui accumsan. Lacus suspendisse f"
  }
];

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("home", {"home" : homeStartingContent, "blogArray" : blogPosts});
})

app.get("/about", (req, res) => {
  res.render("about", {"about" : aboutContent});
})

app.get("/contact", (req, res) => {
  res.render("contact", {"contact" : contactContent});
})

app.get("/compose", (req, res) => {
  res.render("compose");
})

app.post("/compose", (req, res) => {
  blogPosts.push(
    {
      "title": req.body.blogtitle,
      "desc": req.body.blogtext
    }
  );
  res.redirect("/");
})

app.get("/post/:postId", (req, res) => {
  console.log(req.params);
  console.log(blogPosts);
  console.log(_.lowerCase(req.params.postId));
  blogPosts.forEach(blog => {
    if(_.lowerCase(req.params.postId) === _.lowerCase(blog.title)){
      console.log("Match Found!"); 
      res.render("post", {
        "title": blog.title,
        "post": blog.desc
      });
    }
      
  })
})

app.listen(3000, function() {
  console.log("Server started on port 3000");
});
