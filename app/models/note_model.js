import mongoose, { Schema } from 'mongoose';

// create a schema for posts with a field
const NoteSchema = new Schema({
  title: String,
  x: Number,
  y: Number,
  zIndex: Number,
  text: String,
});

// mapping from _id to id
NoteSchema.set('toJSON', {
  virtuals: true,
});

// create model class
const NoteModel = mongoose.model('Note', NoteSchema);

export default NoteModel;
