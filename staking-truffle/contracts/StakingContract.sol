// contracts/StakingContract.sol
pragma solidity ^0.8.0;

contract StakingContract {
    mapping(address => uint256) public balances;

    function stake(uint256 amount) external {
        balances[msg.sender] += amount;
    }

    function unstake(uint256 amount) external {
        require(balances[msg.sender] >= amount, "Insufficient balance");
        balances[msg.sender] -= amount;
    }
}
