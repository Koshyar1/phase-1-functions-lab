// Code your solution in this file!
function distanceFromHqInBlocks(block) {
  let dist = block - 42;
  if (dist < 0) dist *= -1;
  return dist;
}

function distanceFromHqInFeet(block) {
  let dist = (block - 42) * 264;
  if (dist < 0) dist *= -1;
  return dist;
}

function distanceTravelledInFeet(first, second) {
  let dist = (first - second) * 264;
  if (dist < 0) dist *= -1;
  return dist;
}

function calculatesFarePrice(first, second) {
  let dist = (first - second) * 264;
  if (dist < 0) dist *= -1;

  if (dist <= 400) return 0;
  else if (dist < 2000) return 0.02 * (dist - 400);
  else if (dist <= 2500) return 25;
  else return "cannot travel that far";
}
