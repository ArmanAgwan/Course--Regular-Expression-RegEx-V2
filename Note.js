//----------Meta Char----------//

// Single char                 Quantifiers            position
                               
// /d = 0-9                   * = 0 or more        ^  = beginning
// /w = A-Z a-z 0-9           + = 1 or more        $  = end
// /s = whitespace            ? = 0 or 1           /b = Word boundry
// .  = Any Character          {min, max}
//                                {n}


//----------Character Class----------//

// l[yi]nk             // link and lynk
// \d{3}[-.]\d{3}\d{4} // 123-456-7890 and 123.456.7890 

// \(?\d{3}[-.)]\d{3}[-.]\d{4} //(212)867-5509


//----------Capturing Group----------//

// \(?(\d{3})[-.)]\d{3}[-.]\d{4}   // 876-xxx-xxxx
// $1-xxx-xxxx       

//----------Replacing group----------//

// (\w+),\s+(\w+) // replacing word
// $2  $1