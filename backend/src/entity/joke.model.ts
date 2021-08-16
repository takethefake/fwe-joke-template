import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import * as yup from "yup";

export const jokeSchema = yup.object().shape({
  name: yup.string().required(),
  description: yup.string().required(),
  //....
});

@Entity()
export class Joke {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  description!: string;
  //....
}
