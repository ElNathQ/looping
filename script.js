for(let i = 1000; i > 0; i-= 2){
    console.log(i);
}
for(let k = 0; k <= 10000; k++){
    if(k === 2500){
        alert("A quarter of the way there!");
    }else if(k === 5000){
        alert("Halfway there!");
    }else if(k === 10000){
        alert("The loop is done!");
    }
}
myA = ["Breaking Bad", "Better Call Saul", "Yu-Gi-Oh", "Succession", "Beef"]
for(let q = 0; q < myA.length; q++){
    console.log("My #" + (q + 1) + " show is: " + myA[q]);
}