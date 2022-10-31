import  {Schema, model} from 'mongoose';

export const CaughtPokemonsModel = model("caughtPokemons", new Schema({
  number: { type: String, required: true },
  name: { type: String, required: true },
  dateCreation: { type: Date, default: Date.now },
}));
