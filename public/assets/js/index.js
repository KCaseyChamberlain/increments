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

const renderCount = async (count) => {
};



const handleIncrement = () => {
    console.log('increment')

    renderCount()
};

const handleDecrement = () => {
    console.log('decrement')

    renderCount()
};


const getAndRenderCount = () => getCount().then(renderCount);

incrementBtn.addEventListener('click', handleIncrement);
decrementBtn.addEventListener('click', handleDecrement);

getAndRenderCount();