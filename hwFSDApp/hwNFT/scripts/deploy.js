async function main(){
    //Grab the contract factory
    const HWNFT = await ethers.getContractFactory("HWNFT");

    //start deployment, returning a promise that resolves to a contract object.
    const hwNFT = await HWNFT.deploy(); //Instance of the contract
    console.log("Contract deployed to address:", hwNFT.address);

}

main()
.then(()=>process.exit(0))
.catch(error=>{
    console.error(error);
    process.exit(1);
});