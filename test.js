// import the function sum from the app.js file
const { sum, fromDollarToYen, fromYenToPound } = require('./app.js');


const { fromEuroToDollar } = require('./app.js')

test("One euro should be 1.206 dollars", function(){
    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(dollars).toBe(expected); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})

test("1000 dollar should be 106.5k yen", function(){
    const yen = fromDollarToYen(1000) ;
    const expected = (1000/1.2) * 127.9;
    expect(yen).toBe(expected);
})

test("1000 yen should be 6.25 pounds", function(){
    const pounds = fromYenToPound(1000) ;
    const expected = (1000/127.9) * 0.8;
    expect(pounds).toBe(expected);
})