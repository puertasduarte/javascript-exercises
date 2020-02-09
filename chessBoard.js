/*
Write a program that creates a string that represents an 8×8 grid,
using newline characters to separate lines. At each position of the
grid there is either a space or a "#" character. The characters should
form a chessboard. Passing this string to console.log should show
something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a
binding size = 8 and change the program so that it works for any size,
outputting a grid of the given width and height.
*/

let blankSpace = " #";
let hashtag = "# ";

function generateBoard (size) {
    if (size % 2 != 0){
        console.log("You should introduce a even number!");
    } else {
        let board = "";
        for (let row = 1; row < size + 1; row++){
            if (row % 2 === 0){
                board = board + (hashtag.repeat(size/2)) + "\n";
                continue;
            }
            board = board + (blankSpace.repeat(size/2)) + "\n";
        }
        console.log(board);
    }
}

generateBoard(10);
generateBoard(8);
generateBoard(11);
