import { Document } from "mongoose";

export interface SignupFormInterface extends Document {
  readonly name: string;
  readonly pokedex: string;
  readonly email: string;
  readonly phone: string;
  readonly radio: string;
  readonly checkbox: boolean;
}

export interface ContactFormInterface extends Document {
  readonly name: string;
  readonly pokedex: string;
  readonly email: string;
  readonly textarea: string;
  readonly checkbox: boolean;
}
