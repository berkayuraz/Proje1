const {Schema, model}= require ("mongoose")

const PersonelSchema = new Schema({
 name: String,
 age: Number,
 job: String

})

const Personel = model('Personel',PersonelSchema)
module.exports = Personel