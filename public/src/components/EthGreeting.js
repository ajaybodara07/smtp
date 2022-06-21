// dependencies
import { useEffect, useState } from "react"

// must import web3.js in this format to work with Webpack
import Web3 from "web3/dist/web3.min"

// JSON interfaces of Solidity contracts
import helloJSON from "../../abis/Hello.json"

console.log("helloJSON is now", helloJSON)

// Constants
import Constants from "./Constants"

const EthGreeting = () => {
  const [greeting, setGreeting] = useState("loading contents from contract...")

  useEffect(() => {
    // call the ethereum when component is mounted
    connectEth()
  }, [])

  // initialize the Constants
  const allConstants = Constants()

  // call to the ethereum back end
  const connectEth = async () => {
    // initialize web3
    const web3 = new Web3(allConstants.ETH_URL)

    // abi and contract address from the JSON interface of the contract
    const { abi, networks } = helloJSON

    const networkIds = Object.keys(networks)
    const address = networks[networkIds[0]].address
    console.log("contract deployed at address", address)

    // initialize the contract
    const contract = new web3.eth.Contract(abi, address)

    // call the methods of the contract
    let res = await contract.methods.getGreeting().call()

    // set the state with the value
    setGreeting(res)
  }

  return <div className="contents">{greeting}</div>
}

export default EthGreeting
