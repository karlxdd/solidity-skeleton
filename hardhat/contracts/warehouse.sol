// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Warehouse {
    struct Item {
        uint id;
        string name;
        uint quantity;
    }

    mapping(uint => Item) public items;
    uint public nextId;

    function addItem(string memory name, uint quantity) public {
        items[nextId] = Item(nextId, name, quantity);
        nextId++;
    }

    function getItem(uint id) public view returns (Item memory) {
        return items[id];
    }
}
