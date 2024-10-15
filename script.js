window.onload = () => {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    darkModeToggle.addEventListener("click", handleDarkMode)

    const myButton = document.querySelector("#my-button");
    myButton.addEventListener("click", fetchRandomFact);
}

const handleDarkMode = () => {
    const darkModeToggle = document.querySelector('#dark-mode-toggle');
    let darkMode = false;

    document.body.classList.toggle('dark-mode');

    darkMode = !darkMode;
    if (darkMode) {
        darkModeToggle.classList.add('inverted');
    } else {
        darkModeToggle.classList.remove('inverted');
    }
}

const fetchRandomFact = async () =>{
    try {
        const response = await fetch("https://uselessfacts.jsph.pl/api/v2/facts/random");
        if(!response.ok){
            throw new Error('Network error!');
        }
        
        const data = await response.json();
        console.log(data);
        console.log(data.text);

        displayOnOutputField(data.text)

    } catch (err) {
        console.log(err);
    }
}


const query = async () => {
    try {
        const outputField = document.querySelector('#output-field');
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            
        if(response.ok){
            const jsonResponse = await response.json();
            console.log(`JSONResponse: ${jsonResponse}`);

            for(let field in jsonResponse)
            {   
                console.log(`${field}: ${jsonResponse[field]}`);
            }
        }

    } catch (error) {
        console.log(error);
    }
}

const displayOnOutputField = (string) => {
    const outputField = document.querySelector('#output-field');

    try {
        outputField.innerHTML = string;
    } catch (err){
        console.log(err);
    }    
}





const miata = {
    make: "mazda",
    model: "mx-5 miata",
    modelYear: 2024,
    color: "red",
    numberOfDoors: 2,
    convertible: true,
    features: ["heated seats", "premium audio", "all-weather package"],
};

const printMiataSpecs = () => {
    for(let spec in miata){
        console.log(`${spec}: ${miata[spec]}`);
    }
}

