//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../contracts/Counter.sol";

contract Taxation {
    using Counters for Counters.Counter;
    Counters.Counter public _filersIds;

    address public adminMain;

    constructor() {
        adminMain = msg.sender;
    }

    modifier adminOnly() {
        require(adminMain == msg.sender);
        _;
    }

    struct Befiler {
        uint256 filerID;
        address owner;
        uint256 salary;
        uint256 business;
        uint256 agriculture;
        uint256 freelace;
        uint256 bankAccountNo;
        string vehicalName;
        uint256 vehicalMarketValue;
        string vehicalDocsHash;
        string vehicalRegNo;
        uint256 property;
        uint256 cash;
        bool isVerified;
    }

    mapping(uint256 => Befiler) befiler;

    struct Checker {
        address owner;
        bool isApplied;
    }

    mapping(address => Checker) checker;

    function becomeFiler(
        uint256 _salary,
        uint256 _business,
        uint256 _agriculture,
        uint256 _freelance,
        uint256 _bankAccountNo,
        string memory _vehicalName,
        uint256 _vehicalMarketValue,
        string memory _vehicalRegNo,
        uint256 _property,
        uint256 _cash
    ) public {
        require(checker[msg.sender].isApplied != true);

        _filersIds.increment();
        uint256 newFilerId = _filersIds.current();

        checker[msg.sender].owner = msg.sender;
        checker[msg.sender].isApplied = true;

        befiler[newFilerId].filerID = newFilerId;
        befiler[newFilerId].owner = msg.sender;
        befiler[newFilerId].salary = _salary;
        befiler[newFilerId].business = _business;
        befiler[newFilerId].agriculture = _agriculture;
        befiler[newFilerId].freelace = _freelance;
        befiler[newFilerId].bankAccountNo = _bankAccountNo;
        befiler[newFilerId].vehicalName = _vehicalName;
        befiler[newFilerId].vehicalMarketValue = _vehicalMarketValue;
        befiler[newFilerId].vehicalRegNo = _vehicalRegNo;
        befiler[newFilerId].property = _property;
        befiler[newFilerId].cash = _cash;
        befiler[newFilerId].isVerified = false;
    }

    // admin verify the filer
    function verifyFiler(uint256 filerId) public adminOnly {
        require(befiler[filerId].isVerified != true);
        befiler[filerId].isVerified = true;
    }

    // get the filer id of the user
    function getFilerId(address _owner) public view returns (uint256) {
        uint256 id = 0;
        for (uint256 i = 1; i <= _filersIds.current(); i++) {
            if (befiler[i].owner == _owner) {
                id = i;
                break;
            }
        }
        return id;
    }

    // get the filer details by filer id
    function getFiler(uint256 filerId)
        public
        view
        returns (
            address,
            uint256,
            uint256,
            uint256,
            uint256,
            uint256
        )
    {
        return (
            befiler[filerId].owner,
            befiler[filerId].salary,
            befiler[filerId].business,
            befiler[filerId].agriculture,
            befiler[filerId].freelace,
            befiler[filerId].bankAccountNo
        );
    }

    // get the filer remaining details by filer id
    function getFilerRemainingData(uint256 filerId)
        public
        view
        returns (
            string memory,
            uint256,
            string memory,
            string memory,
            uint256,
            uint256,
            bool
        )
    {
        return (
            befiler[filerId].vehicalName,
            befiler[filerId].vehicalMarketValue,
            befiler[filerId].vehicalDocsHash,
            befiler[filerId].vehicalRegNo,
            befiler[filerId].property,
            befiler[filerId].cash,
            befiler[filerId].isVerified
        );
    }

    function checkAuth(address user) public view returns (bool) {
        if (adminMain == user) {
            return true;
        } else {
            return false;
        }
    }
}
