for (var i =1; i<=100; i++){

    document.write("<br>");


    if(i%3===0){
        document.write("fizz");

    }
    if(i%5===0){
        document.write("buzz");

    }
    else if(i%3!==0 && i%5!==0) {
        document.write(i.toString());
    }
}