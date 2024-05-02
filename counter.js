let counterValue = 0;



const counter = () => {
    return counterValue;
}

const increment = () => {
    counterValue++;
    console.log(counterValue);
}

setInterval(increment, 2000);
