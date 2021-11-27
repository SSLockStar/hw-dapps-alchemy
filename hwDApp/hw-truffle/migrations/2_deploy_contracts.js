const HelloWorld = artifacts.require("HelloWorld");
const initMessage = "HelloWorld";

module.exports = function(developer) {
    developer.deploy(HelloWorld, initMessage);
};
