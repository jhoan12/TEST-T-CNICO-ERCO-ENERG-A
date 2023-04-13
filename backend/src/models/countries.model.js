import mongoose from "mongoose";
const { Schema, model } = mongoose;

const countriesSchema = new Schema(
  { 
    NAME: { type: String, 
    required: [true, "el campo nombre es obligatorio"] } ,


    ID_COUNTRY: {type: Number}
  },

  { timestamps: true }
);

export const countriesModel = model("countri", countriesSchema);
