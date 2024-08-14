import { ethers } from "hardhat";

async function main() {
  const Warehouse = await ethers.getContractFactory("Warehouse");
  const warehouse = await Warehouse.deploy();
  await warehouse.deployed();

  console.log("Warehouse deployed to:", warehouse.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
