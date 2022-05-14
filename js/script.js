var i=66;
if(i%2==0){
    document.write("even")

}
else if(i%2==1){
    document.write("odd")
}
else{
    document.write("invalid number")
}


// result check
var num=66;
if(num>=80 && num<=100){
    document.write("A+")
}
else if(num>=70 && num<=79){
    document.write("A")
}
else if(num>=60 && num<=69){
    document.write("A-")
}
else if(num>=50 && num<=59){
    document.write("B")
}
else if(num>=40 && num<=49){
    document.write("C")
}
else if(num>=33 && num<=39){
    document.write("D")
}
else if(num>=0 && num<=32){
    document.write("F")
}
else{
    document.write("Invalid Number")
}

// 100 to 1
for (number=100;number>=1;number--){
    document.write(number)
}