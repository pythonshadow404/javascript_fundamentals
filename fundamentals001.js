// multiples of three - but not all
// Using FOR, print multiples of 3 
// from -300 to 0. Skip -3 and -6. 

// function countandskip(){
//     for(var num = -300 ; num <=0; num += 3){
//         if(num == -6 || num == -3){
//             continue;
//         }
//         console.log(num)
//     }
// }

// countandskip()

// function countUp()
// {
//     var num = 2000;
//     console.log(num);
//     while(num < 5280)
//     {
//     num += 1;
//     console.log(num);
//     }
// }

// countUp()

//3. Counting, the Dojo Way
//Print integers 1 to 100. If divisible by 5, 
//print "Coding" instead. If by 10, also print " Dojo".

// function codingDojo()
// {
//     for(num = 1; num < 101; num += 1)
//     {
//     if (num % 10 == 0){
//         console.log("Dojo");
//         }
//     else if(num % 5 == 0){
//         console.log("Coding")
//         }
//     else{
//         console.log(num)
//         }
//     }
// }

// codingDojo()


// 4. Flexible Countdown
// Given lowNum, highNum, mult, print multiples of mult 
// from highNum down to lowNum, using a FOR. 
// For (2,9,3), print 9 6 3 (on successive lines).

function countDownFlex(highNum, lowNum, mult)
{
    for(num = highNum; num > lowNum; num -= mult)
    {
        if (num % mult == 0)
        {
            console.log(num);
        }
    }
}

countDownFlex(28,15,4)