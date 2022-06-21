// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.0;

contract Hello {

  string public greeting = 'A simple Hello World distributed application using React and Truffle';

  function getGreeting () public view returns (string memory) {
    return greeting;
  }

  function setGreeting (string memory _greeting) public {
    greeting = _greeting;
  }
}