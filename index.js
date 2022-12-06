function distanceFromHqInBlocks(street){
    return Math.abs(street - 42);
}

function distanceFromHqInFeet(street){
    distanceFromHqInBlocks(street);
  return distanceFromHqInBlocks(street) * 264;
}

function distanceTravelledInFeet(start, destination){
    const blocksTraveled = Math.abs(start - destination);
  return blocksTraveled * 264;
}

function calculatesFarePrice(start, destination){
    const feet = Math.abs(start - destination) *264;  
    let fare;
    
    if (feet < 400) {
      fare = 0;
    } else if (feet >= 400 && feet <= 2000) {
      fare = (feet - 400) * 0.02;
    } else if (feet > 2000 && feet <= 2500) {
      fare = 25;
    } else if (feet > 2500) {
      fare = 'cannot travel that far';
    }
    return fare;
  }