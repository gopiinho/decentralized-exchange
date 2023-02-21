// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenTwo is ERC20 {
    constructor() ERC20("Token Two", "TKN2") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}
