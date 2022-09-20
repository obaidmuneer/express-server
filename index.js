import express from 'express'

const app = express()
const port = process.env.PORT || 8080

app.get('/', (req, res) => {
    res.send(`<h1>Hello Obaid :)</h1> 
    <h3>You are hiiting me with ${req.ip}</h3>`)
})


app.listen(port, () => {
    console.log(`server is running on ${port}`);
})
