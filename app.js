const Koa = require("koa");
const bodyParser = require("koa-bodyparser");
const validator = require("validatorjs");
const app = new Koa();

const PORT = 8080;

app.use(bodyParser());

const rules = {
  id: "required|integer",
  name: "required|string",
  email: "required|email",
  age: "required|integer|min:18",
};

app.use((ctx) => {
  const data = ctx.request.body;
  const validation = new validator(data, rules);
  if (validation.passes()) {
    ctx.status = 200;
    // console.log(ctx.status);
    ctx.body = `ID: ${data.id} Name: ${data.name} Email: ${data.email} Age: ${data.age}`;
  } else {
    ctx.status = 400;
    // console.log(ctx.status);
    ctx.body = "Info are not valid";
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
