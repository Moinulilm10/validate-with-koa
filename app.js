const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const Validator = require("validatorjs");
const app = new Koa();

const PORT = 8080;

app.use(bodyParser());

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
