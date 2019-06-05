const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const sightingSchema = Schema({
  sightingTitle: String,
  species: String,
  otherSightings: [{type: Date}],
  // image: String,
  image:
      { data: Buffer, contentType: String }, // Should this just be a string? 
  location: {
    latitude: {type: Number},
    longitude: {type: Number}
  },
  season: {
    startDate: {type: Date},
    endDate: {type: Date}
  },
  notes: String
}, {timestamps: true});

const Sighting = mongoose.model('Sighting', sightingSchema);

module.exports = Sighting;
