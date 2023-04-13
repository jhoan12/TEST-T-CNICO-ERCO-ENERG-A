import mongoose from "mongoose";
const { Schema, model } = mongoose;

const citiesSchema = new Schema(
    {
        NAME: { type: String, },
        ID_CITY: { type: Number },
        ID_STATE: { type: Number },
        POPULATION: { type: Number }
    },

    { timestamps: true }
);

export const citiesModel = model("city", citiesSchema);