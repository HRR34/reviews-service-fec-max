import Reviews from './reviews.js'

test('Reviews Component test should exist',()=>{
    expect(true).toBeTruthy();
});

test('Should be able to connect to Reviews.js and get access to Reviews component',()=>{
    expect(Reviews).toBeDefined();
});