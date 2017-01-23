// Letter-Looper Assignment

var letter;


while (!letter) {
    letter = prompt("Enter a letter please.");
    
}



var i, k;


for (i = 0; i < 10; i += 1) {
    document.write("<br>");
    for (k = 0; k <= i; k +=1) {
        document.write(letter); 
    
    }
    
}

