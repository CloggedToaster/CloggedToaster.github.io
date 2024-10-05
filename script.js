
window.onload = () => {
    const outputField = document.querySelector('#outputField');
    const myButton = document.querySelector("#myButton");
    
        myButton.addEventListener("click", fetchRandomFact);
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
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
            // .then(response => response.json())
            // .then(json => console.log(json));
        if(response.ok){
            console.log("the API responded!");
            const jsonResponse = await response.json();

            console.log(jsonResponse);
    
            for(let field in jsonResponse)
            {   
                console.log(jsonResponse[field]);
                displayOnOutputField(field)
            }
            // console.log(jsonResponse);

            // let output = '';
            // const rawJSON = {};
            // for(let property in jsonResponse){
            //     console.log(`${property}:${jsonResponse[property]}`);
            //     output += `${property}:${jsonResponse[property]}<br>`;
            // }
            // displayOnOutputField(output);
        }

    } catch (error) {
        console.log(error);
    }
}
query();

const displayOnOutputField = (string) => {
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

