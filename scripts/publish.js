var ghpages = require("gh-pages");
ghpages.publish(
  "build",
  {
    branch: "gh-pages",
    repo: "https://github.com/CBS-EBUSS-Group/order-flow.git",
  },
  (err) => console.log(err)
);
