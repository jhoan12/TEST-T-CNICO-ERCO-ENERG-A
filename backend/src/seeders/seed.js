import { connectDb } from "../databae.js";
import { citiesModel } from "../models/cities.model.js";
import { countriesModel } from "../models/countries.model.js";
import { statesModel } from "../models/states.model.js";
//import cities from "./Data.js" assert { type: "json" };

import { cities, states, countries } from "./Data.js"



//poblar la base de datos 
const seedDb = async () => {
    try {
        await connectDb()
        await citiesModel.deleteMany()
        await statesModel.deleteMany()
        await countriesModel.deleteMany()



        await citiesModel.create(cities)
        await statesModel.create(states)
        await countriesModel.create(countries)
        console.log("add date")
    } catch (error) {
        console.log("error en seedCities", error.message)
    }
}

seedDb()