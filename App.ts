import express from "express"
const PORT:number=8080

const app=express()
app.use('/public',express.static("public"))
app.get("/", (req, res)=>{
	res.sendFile(__dirname+`/src/html/index.html`)
})

app.listen(PORT, ()=>{
	console.log(`HTTP listening on port: ${PORT}`)
})

