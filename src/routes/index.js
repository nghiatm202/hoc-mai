const pageRouter = require("./page");

function Router(app) {
  app.use("/", pageRouter);
  // 404
  app.use((req, res) => {
    res.status(404);

    // respond with html page
    if (req.accepts("html")) {
      res.render("404", { url: req.url });
      return;
    }

    // respond with json
    if (req.accepts("json")) {
      res.json({ error: "Không tìm thấy" });
      return;
    }

    // default to plain-text. send()
    res.type("txt").send("Không tìm thấy");
  });
}

module.exports = Router;
