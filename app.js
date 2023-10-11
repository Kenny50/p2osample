const express = require('express');
const app = express();
const swaggerUi = require('swagger-ui-express');
const fs = require("fs")
const YAML = require('yaml')

const file  = fs.readFileSync(`${__dirname}/swagger.yml`, 'utf8')
const swaggerDocument = YAML.parse(file)

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.listen(3060, () => {
    console.log(`Example app listening on port ${3060}`)
})