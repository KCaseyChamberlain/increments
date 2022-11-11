let incrementBtn = document.querySelector("button[name='increment']");
let decrementBtn = document.querySelector("button[name='decrement']");
let counter = document.querySelector("figure")

const getCount = () =>
    fetch('/', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });

const renderCount = () => {
};



const handleIncrement = () => {
    console.log('decrement')
};

const handleDecrement = () => {
    console.log('decrement')
};



incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);

getCount();
renderCount();