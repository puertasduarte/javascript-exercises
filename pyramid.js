/**
 * Pyramid
 *
 * Write a function that accepts a positive number N.
 * The function should print a pyramid shape
 * with N levels using the # character.
 *
 * Examples:
 * pyramid(1) = '#'
 *
 * pyramid(2) = ' # '
 *              '###'
 *
 * pyramid(3) = '  #  '
 *              ' ### '
 *              '#####'
 */

function pyramid(N){
    let len = N * 2 + 1
    let blocks = 1
    printLevel(blocks)
    for(let i = 1; i <= N; i = i + 2){
        blocks += 2
        printLevel(blocks)
    }
    function printLevel(blocks){
         let space =  (len - blocks) /2 
         let level = (' '.repeat(space)) + ('#'.repeat(blocks)) + (' '.repeat(space))
         console.log(level)
    }
}

pyramid(4)