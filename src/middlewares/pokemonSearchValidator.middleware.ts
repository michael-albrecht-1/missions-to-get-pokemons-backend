import {
  IsNumber,
  IsOptional,
  Length,
  validate,
  ValidatorOptions,
} from 'class-validator';
import { Handler } from 'express';
import { Pokemon } from '../models/pokemon.model';

export const pokemonSearchValidator: Handler = async (req, res, next) => {
  const pokemonSearch = new PokemonSearch();

  const { id, name, type } = req.query as unknown as PokemonSearch;

  pokemonSearch.id = id;
  pokemonSearch.name = name;
  pokemonSearch.type = type;

  const errors = await validate(pokemonSearch, validatorOptions);
  if (errors.length) {
    next(
      res.status(412).send({
        success: false,
        message: 'Validation failed',
        data: errors,
      })
    );
  }
  next();
};

export class PokemonSearch implements Pick<Pokemon, 'id' | 'name'> {
  @IsNumber()
  @IsOptional()
  id!: number;

  @Length(1, 20)
  @IsOptional()
  name!: string;

  @Length(1, 20)
  @IsOptional()
  type!: string;
}

const validatorOptions: ValidatorOptions = { skipMissingProperties: true };
