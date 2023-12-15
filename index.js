// Code your solution in this file!
function distanceFromHqInBlocks(block) {
    const hqBlock = 42;
    return Math.abs(hqBlock - block);
  }
  
  // Function to calculate distance from headquarters in feet
  function distanceFromHqInFeet(block) {
    const blocks = distanceFromHqInBlocks(block);
    const feetPerBlock = 264; // Assuming 1 block = 264 feet
    return blocks * feetPerBlock;
  }
  
  // Function to calculate distance travelled in feet
  function distanceTravelledInFeet(startBlock, endBlock) {
    const blocks = Math.abs(endBlock - startBlock);
    const feetPerBlock = 264; // Assuming 1 block = 264 feet
    return blocks * feetPerBlock;
  }
  
  // Function to calculate fare price
  function calculatesFarePrice(startBlock, endBlock) {
    const distanceInFeet = distanceTravelledInFeet(startBlock, endBlock);
  
    if (distanceInFeet <= 400) {
      return 0; // Free sample
    } else if (distanceInFeet > 400 && distanceInFeet <= 2000) {
      return (distanceInFeet - 400) * 0.02; // 2 cents per foot after the first 400 feet
    } else if (distanceInFeet > 2000 && distanceInFeet <= 2500) {
      return 25; // $25 for distances over 2000 feet but up to 2500 feet
    } else {
      return 'cannot travel that far'; // Cannot travel more than 2500 feet
    }
  }
  
  // Export these functions if necessary
//   module.exports = {
//     distanceFromHqInBlocks,
//     distanceFromHqInFeet,
//     distanceTravelledInFeet,
//     calculatesFarePrice,
//   };