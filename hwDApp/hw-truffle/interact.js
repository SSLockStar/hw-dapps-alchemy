require("dotenv").config();

var ethers = require("ethers");
const API_KEY = process.env.API_KEY;
const PRIVATE_KEY = process.env.PRIVATE_KEY;
const CONTRACT_ADDRESS = process.env.CONTRACT_ADDRESS

//For Truffle
const contract = require("./build/contracts/HelloWorld.json");
// console.log("contract-abi:"+JSON.stringify(contract.abi));

//Provider
const alchemyProvider = new ethers.providers.AlchemyProvider(network="ropsten", API_KEY);

// Signer
const signer = new ethers.Wallet(PRIVATE_KEY, alchemyProvider);

//contract
const helloWorldContract = new ethers.Contract(CONTRACT_ADDRESS, contract.abi, signer);

//init message
async function main() {
    const message = await helloWorldContract.message();
    console.log("This message is: "+message);

    console.log("Updating the message...");
    const tx = await helloWorldContract.update("This is the new message");
    await tx.wait();

    const newMessage = await helloWorldContract.message();
    console.log("The new message is: "+ newMessage);
}

main();

