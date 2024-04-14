const getJoke = require("./joke");
const core = require("@actions/core");

(async function() {
  const joke = await getJoke();
  console.log(joke);
  core.setOutput("joke-output", joke);
})();
