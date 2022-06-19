//SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "../contracts/Counter.sol";

contract Taxation {
    using Counters for Counters.Counter;
    Counters.Counter public _filersIds;

    address public adminMain;

    address[] public userList;

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

    mapping(address => Befiler) befiler;

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

        befiler[msg.sender].filerID = newFilerId;
        befiler[msg.sender].owner = msg.sender;
        befiler[msg.sender].salary = _salary;
        befiler[msg.sender].business = _business;
        befiler[msg.sender].agriculture = _agriculture;
        befiler[msg.sender].freelace = _freelance;
        befiler[msg.sender].bankAccountNo = _bankAccountNo;
        befiler[msg.sender].vehicalName = _vehicalName;
        befiler[msg.sender].vehicalMarketValue = _vehicalMarketValue;
        befiler[msg.sender].vehicalRegNo = _vehicalRegNo;
        befiler[msg.sender].property = _property;
        befiler[msg.sender].cash = _cash;
        befiler[msg.sender].isVerified = false;

        userList.push(msg.sender);
    }

    function getUserListLength() public view returns (uint256) {
        return userList.length;
    }

    // admin verify the filer
    function verifyFiler(address _owner) public adminOnly {
        require(befiler[_owner].isVerified != true);
        befiler[_owner].isVerified = true;
    }

    // get the filer details by filer id
    function getFiler(address _owner)
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
            befiler[_owner].owner,
            befiler[_owner].salary,
            befiler[_owner].business,
            befiler[_owner].agriculture,
            befiler[_owner].freelace,
            befiler[_owner].bankAccountNo
        );
    }

    // get the filer remaining details by filer id
    function getFilerRemainingData(address _owner)
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
            befiler[_owner].vehicalName,
            befiler[_owner].vehicalMarketValue,
            befiler[_owner].vehicalDocsHash,
            befiler[_owner].vehicalRegNo,
            befiler[_owner].property,
            befiler[_owner].cash,
            befiler[_owner].isVerified
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
