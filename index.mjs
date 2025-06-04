import http from "node:http";
import fs from "node:fs/promises";

const PAGES = ["/", "/about", "/contact-me"];

const server = http.createServer(async (req, res) => {
  res.setHeader("Content-Type", "text/html; charset=utf-8");

  if (!PAGES.includes(req.url)) {
    const html = await fs.readFile("./404.html", "utf-8");
    res.statusCode = 404;
    return res.end(html);
  }

  const filepath = `.${req.url === "/" ? "/index" : req.url}.html`;
  const html = await fs.readFile(filepath, "utf-8");
  res.statusCode = 200;
  res.end(html);
});

server.listen(8080, () => {
  console.log("Server is running at http://localhost:8080/");
});
