// SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TokenOne is ERC20 {
    constructor() ERC20("Token One", "TKN1") {
        _mint(msg.sender, 100000 * 10 ** decimals());
    }
}
