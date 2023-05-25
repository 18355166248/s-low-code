const reactCRUDHookGenerator = require("./page/react-crud-hook/prompt");
const reactCRUDMobxGenerator = require("./page/react-crud-mobx/prompt");

module.exports = function (plop) {
  plop.setGenerator("react-curd-hook", reactCRUDHookGenerator);
  plop.setGenerator("react-curd-mobx", reactCRUDMobxGenerator);
};
