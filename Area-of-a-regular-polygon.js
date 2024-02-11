/*
Create a function for calculating the area of a regular polygon. 
The function takes one input parameter: a string containing the number of sides 
and the length of each side, such as "4 sides of 5 cm each". 

It returns another string containing the area of the polygon with the right units, 
such as "25.00 sq.cm". The anwer should be rounded to two digits after the decimal point. 
If the input string has a wrong format, the function returns "Invalid input".
*/


// Solution

function areaOfRegularPolygon(s) {
  const inputPattern = /^(\d+) sides of (\d+(\.\d+)?) (\w+) each$/;

  const match = s.match(inputPattern);

  if (!match) {
    return "Invalid input";
  }

  const numberOfSides = parseInt(match[1]);
  const sideLength = parseFloat(match[2]);
  const unit = match[4];

  const pi = Math.PI;
  const area = (numberOfSides * Math.pow(sideLength, 2)) / (4 * Math.tan(pi / numberOfSides));
  const roundedArea = area.toFixed(2);
  
  if (isNaN(numberOfSides) || isNaN(sideLength) || roundedArea==0) {
    return "Invalid input";
  }

  return `${roundedArea} sq.${unit}`;
}

// or

function areaOfRegularPolygon(s) {
  let match = s.match(/^(\d+) sides of ([0-9]+\.?[0-9]*) (\w+) each$/);
  if (match === null || match[1] < 3) return 'Invalid input';
  return `${getArea(match[2], match[1]).toFixed(2)} sq.${match[3]}`;
}
function getArea(s, n) { return s * s * n / 4 / Math.tan(Math.PI / n); }