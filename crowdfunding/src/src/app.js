import React, { useEffect, useState } from "react";
import Web3 from "web3";
import "./App.css";

const contractABI = [/* Paste ABI Here */];
const contractAddress = "PASTE_CONTRACT_ADDRESS_HERE";

function App() {
  const [account, setAccount] = useState("");
  const [contract, setContract] = useState(null);
  const [amount, setAmount] = useState("");
  const [funds, setFunds] = useState("0");

  useEffect(() => {
    if (window.ethereum) {
      const web3 = new Web3(window.ethereum);
      window.ethereum.request({ method: "eth_requestAccounts" }).then(accounts => {
        setAccount(accounts[0]);
        const instance = new web3.eth.Contract(contractABI, contractAddress);
        setContract(instance);
        loadFunds(instance);
      });
    } else {
      alert("Please install MetaMask");
    }
  }, []);

  const loadFunds = async (contract) => {
    const balance = await contract.methods.getBalance().call();
    setFunds(balance);
  };

  const contribute = async () => {
    const web3 = new Web3(window.ethereum);
    await contract.methods.contribute().send({
      from: account,
      value: web3.utils.toWei(amount, "ether")
    });
    alert("Contribution successful!");
    setAmount("");
    loadFunds(contract);
  };

  return (
    <div className="App">
      <h1>Crowdfunding DApp</h1>
      <p>Connected Account: {account}</p>
      <p>Total Funds Raised: {funds} wei</p>
      <input
        type="text"
        placeholder="Amount in ETH"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <button onClick={contribute}>Contribute</button>
    </div>
  );
}

export default App;