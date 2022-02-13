const binary=()=>{
    let binary = document.getElementById('binary').value;
    let rem;
    let n=0;
    let cal=0;
    // Calcualtions
    while (binary != 0) {
        rem = binary % 10;
        cal=cal+(rem*(Math.pow(2,n)));
        //Use the parseInt to conver the division in the in t form
        binary=parseInt(binary/10);
        n++;
    }
    // Display
    document.getElementById('decimal').value=cal;
}