import mongoose from "mongoose";


mongoose.set('strictQuery', false);

const personSchema = new mongoose.Schema({
   name: {
      type: String,
      required: true,
   },
   number: {
      type: String,
      required: true,
   },
}, { timestamps: true });

personSchema.set('toJSON', {
   transform: (document, returnedObject) => {
      returnedObject.id = returnedObject._id.toString();
      delete returnedObject.createdAt;
      delete returnedObject.updatedAt;
      delete returnedObject._id;
      delete returnedObject.__v;
   },
});

export const Person = mongoose.model('Person', personSchema);


