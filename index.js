const colorSelector = document.getElementById('color-selector')
const schemeSelector = document.getElementById('scheme-selector')
const fetchButton = document.getElementById('fetch-button')
const swatchesContainer = document.getElementById('swatches-container')
let colorSchemeObj = {}
let colorsArray = []

fetchButton.addEventListener('click', function(){
    fetch(`https://www.thecolorapi.com/scheme?hex=${colorSelector.value.slice(1)}&mode=${schemeSelector.value}`)
        .then(data => data.json())
        .then(data => {
            colorSchemeObj = data
            getColors()
        })
})

function getColors() {
    colorsArray = []
    for (let color of colorSchemeObj.colors){
        colorsArray.push(color.hex.value)
    }
    renderSwatch()
}

function renderSwatch(){
    let colorsHTML = ``
    colorsArray.forEach(function(color){
        colorsHTML += `
            <span class="swatch-wrapper">
                <div class="color-box" style="background-color: ${color};"></div>
                <p class="hex-code">${color}</p>
            </span>
            `
    })
    console.log(colorsHTML)
    swatchesContainer.innerHTML = colorsHTML
}

/*
Header is set up

Next steps:
1. Get the Hex value from the color input selector
2. Write a URL using the hex value and the dropdown menu value as endpoints
3. Add an event listener to the button  that sends a GET request upon being "clicked"
4. Parse the response into an object. Write a script that turns the object data into a color palette. 
*/
