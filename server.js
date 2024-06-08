const express = require("express")
const app = express()  
const mongoose = require("mongoose")
const Personel = require("./models/PersonelModel")

mongoose.connect("mongodb+srv://urazberkay1:urazberkay1@cluster0.29rqdkl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
.then(()=> console.log("MongoDB Connected"))
.catch((err)=> console.log(err))

app.use(express.json())


//Okuma işlemi.
app.get("/personels",async(req,res) => {
    
  try {
    const personels = await Personel.find({})
    res.send(personels)
  } catch (error) {
    console.error(error)
    
  }
    
})
//Update isteği ile verilen ID kullanıcıyı update ettik.
app.put('/personels/:id', async (req, res) => {
  const { id } = req.params
  const { name, age, job} = req.body

  try {
    const personels = await Personel.findByIdAndUpdate(id, { name, age,job }, { new: true })
    res.send(personels)
  } catch (error) {
    console.error(error)
    
  }
});
 //Create işlemi.
app.post("/personels",async (req,res) => {
 try {
    let newPersonel= req.body
    let savedData = await Personel.create(newPersonel)
    console.log(savedData)
    res.send(null)
  } catch (error) {
    console.log(error)
    
  }

})

// Delete işlemi.
app.delete('/personels/:id', async (req, res) => {
  const { id } = req.params

  try {
    const personel = await Personel.findByIdAndDelete(id)
    res.send(personel)
  } catch (error) {
    console.error(error)
    
  }
})







app.listen(9000,()=>{
console.log("Çalıştım")
})