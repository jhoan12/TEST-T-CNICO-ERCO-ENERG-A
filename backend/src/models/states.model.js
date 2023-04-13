import mongoose from "mongoose";
const { Schema, model } = mongoose;

const statesSchema = new Schema(
    {
        NAME: {
            type: String,
            required: [true, "el campo nombre es obligatorio"]
        },
        ID_STATE: { type: Number },
        ID_COUNTRY: { type: Number }
    },

    { timestamps: true }
);

export const statesModel = model("state", statesSchema);