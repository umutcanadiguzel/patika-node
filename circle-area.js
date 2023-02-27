const arguments = process.argv.slice(2);
function findCircleArea(radius) {
    let area = 3.14 * Math.pow(radius,2); 
    console.log(`Yarıçapı ${radius} olan dairenin alanı :  ${area}`)
}

findCircleArea(arguments[0]);
 