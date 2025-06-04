import express from "express";

const app = express();
const options = {
  root: process.cwd() + "/pages",
};

app.get(["/", "/about", "/contact"], (req, res) => {
  const page = req.path === "/" ? "index.html" : req.path.slice(1) + ".html";
  res.sendFile(page, options);
});

app.use((req, res) => {
  res.status(404).sendFile("404.html", options);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
