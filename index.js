const app = require('express')()
const cors = require('cors')
const bodyParser = require('body-parser')
const fs = require('fs')

app.use(cors())
app.use(bodyParser.json({limit: '50mb'}))

app.post('/', (req, res) => {
    const {canvasValue, index} = req.body
    const base64Image = canvasValue.split(';base64,').pop();
    fs.writeFile(`./output/image${index}.png`, base64Image, {encoding: 'base64'}, function(err) {
        console.log('File created');
    });
    return res.send({success: 'hola soy pedrito '+index})
})

app.listen(5000, () => {
    console.log('Todo listo')
})