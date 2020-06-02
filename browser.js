// This file should be pasted inside the browser console

var indexes = Array.from({length: 32}, (_, i) => i+1)
var requestFunction = async (index) => {
    
    location.href = "#page"+index;
    var myCanvas = document.getElementById("page"+index);
    var myImg = myCanvas.toDataURL("image/png");

    const rawResponse = await fetch(`http://localhost:5000`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            canvasValue: myImg,
            index
        })
    })
    const jsonResponse = await rawResponse.json()
    console.log(jsonResponse)
}

indexes.forEach(index => {
    setTimeout(() => requestFunction(index), 1463*index)
})

