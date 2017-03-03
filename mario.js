
printPyramid(5);


/*
 * printPyramid
 *
 * Prints to the console a pyramid of '#' characters of the specified height
 * For example, if height is 5, the console will look like this:
 *          ##
 *         ###
 *        ####
 *       #####
 *      ######
 */
function printPyramid(height) {
  console.log(height);
    console.log("Uh oh... the pyramid is under construction.");
    console.log("Check back soon, our developers are hard at work as we speak!");

    for(var row=0; row<height; row++){

      var hashes = "";
      var spaces = "";

      //build spaces
      for (var sp=0; sp < height-row-1; sp++){
        spaces += " "
      }
      //build row of hashes
      for(var hs=0; hash <= row+1; hash++){
        hashes += "#"
      }
      console.log(spaces+hashes)
    }
}
