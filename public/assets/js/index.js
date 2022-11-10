let incrementBtn = document.querySelector("button[name='increment']");
let decrementBtn = document.querySelector("button[name='decrement']");
let count = document.querySelector("figure")

const getCount = () =>
    fetch('/api', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    });




const handleIncrement = () => {
    console.log('increment')
};

const handleDecrement = () => {
    console.log('decrement')
};



const renderCount = async (count) => {
};


const getAndRenderCount = () => getCount().then(renderCount);

incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);

getAndRenderCount();