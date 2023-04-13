import { response } from "../helpers/Response.js";
import { citiesModel } from "../models/cities.model.js";
import { countriesModel } from "../models/countries.model.js";
import { statesModel } from "../models/states.model.js";


const Ctrl = {};

Ctrl.porPais = async (req, res) => {
  try {
    const { pais } = req.params
    const country = await countriesModel.findOne({ NAME: { $regex: pais, $options: 'i' } })
    if (!country) {
      return response(res, 404, false, "", "pais no encontrado")
    }

    let states = await statesModel.find({
      ID_COUNTRY: country.ID_COUNTRY
    })

    let data = {
      country,
      states: []
    }

    for (let i = 0; i < states.length; i++) {
      const cities = await citiesModel.find({ ID_STATE: states[i].ID_STATE })
      const stateWithCities = {
        ...states[i].toObject(),
        cities
      }
      data.states.push(stateWithCities)
    }

    response(res, 200, true, data, "country")

  } catch (error) {
    response(res, 500, false, "", error.message);

  }
}

Ctrl.porEstado = async (req, res) => {
  try {
    const { estado } = req.params
    const state = await statesModel.findOne({ NAME: { $regex: estado, $options: 'i' } })
    if (!state) {
      return response(res, 404, false, "", "estado no encontrado")
    }

    let cities = await citiesModel.find({
      ID_STATE: state.ID_STATE
    })

    let data = {
      // ._doc accede a las propiedades 
      state: { ...state._doc, cities }

    }

    response(res, 200, true, data, "state")

  } catch (error) {
    response(res, 500, false, "", error.message);

  }
}


Ctrl.porCiudad = async (req, res) => {
  try {
    const { ciudad } = req.params
    const city = await citiesModel.findOne({ NAME: { $regex: ciudad, $options: 'i' } })
    if (!city) {
      return response(res, 404, false, "", "ciudad no encontrado")
    }

    response(res, 200, true, city, "city")

  } catch (error) {
    response(res, 500, false, "", error.message);

  }
}

export default Ctrl;
