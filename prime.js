function isPrime(){
    let n = parseInt(document.getElementById("myTxtBox").value);
    let isprime = true;
    if (n==1) {
        document.write("1 is neither prime nor composite number");
    }
    else if(n > 1){
        for(let i = 2; i<n ; i++){
            if(n % i == 0){
                isprime = false;
                break;
            }
        }
        if(isprime){
            document.write(`${n} is a prime number`);
        }
        else{
            document.write(`${n} is not a prime number`);
        }
    }
}