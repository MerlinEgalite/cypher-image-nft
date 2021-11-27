// SPDX-License-Identifier: MIT
pragma solidity 0.8.7;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";

contract CypherPoem is ERC721 {
    string public URI = "";

    constructor(string memory _uri) ERC721("Cyper Poem", "CP") {
        _mint(msg.sender, 0);
        URI = _uri;
    }

    function tokenURI(uint256 tokenId) public view override returns (string memory) {
        return URI;
    }
}
