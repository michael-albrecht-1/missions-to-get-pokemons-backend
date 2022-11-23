import {
  IsNumber,
  IsNumberString,
  IsOptional,
  Length,
  validate,
  ValidatorOptions,
} from 'class-validator';
import { Handler } from 'express';
import { Pokemon } from '../models/pokemon.model';
import { plainToClass } from 'class-transformer';

export const pokemonSearchValidator: Handler = async (req, res, next) => {
  const pokemonSearch = plainToClass(PokemonSearch, req.query);

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
  @IsNumberString()
  @IsOptional()
  page!: number;

  @IsNumberString()
  @IsOptional()
  size!: number;

  @IsNumberString()
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
