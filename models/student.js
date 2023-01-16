const mongoose = require('mongoose')


const studentSchema = mongoose.Schema(
  {
    nom: {
      type: String,
      required: [true, 'Ajouter votre nom'],
    },
    prenom: {
        type: String,
        required: [true, 'Ajouter votre prenom'],
      },
      email: {
        type: String,
        required: [true, 'Ajouter votre email'],
      },
      classe: {
        type: Number,
        required: [true, 'votre classe est'],
      }
  }
)

module.exports = mongoose.model('Student', studentSchema)
