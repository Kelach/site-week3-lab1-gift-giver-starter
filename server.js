const app = require("./app");

const port = process.env.PORT || 3000;

app.get("/", (request, response) => {
  response.send("Hellow world");
});

app.listen(port, () => {
  console.log(`🚀 Server listening at http://localhost:${port}`)
})
