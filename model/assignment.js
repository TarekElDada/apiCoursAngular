const mongoose = require('mongoose');
const aggregatePaginate = require('mongoose-aggregate-paginate-v2');
const Schema = mongoose.Schema;

// Définition du schéma pour les assignments
const AssignmentSchema = new Schema({
    id: { type: Number, required: true },
    dateDeRendu: { type: Date, required: true },
    nom: { type: String, required: true },
    rendu: { type: Boolean, required: true }
});

// Ajout du plugin de pagination
AssignmentSchema.plugin(aggregatePaginate);

// Export du modèle Assignment
module.exports = mongoose.model('Assignment', AssignmentSchema);