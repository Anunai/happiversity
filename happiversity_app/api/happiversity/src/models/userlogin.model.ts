import {Entity, model, property} from '@loopback/repository';

@model()
export class Userlogin extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  user_id: number;

  @property({
    type: 'string',
    required: true,
  })
  user_name: string;

  @property({
    type: 'string',
    required: true,
  })
  password: string;


  constructor(data?: Partial<Userlogin>) {
    super(data);
  }
}

export interface UserloginRelations {
  // describe navigational properties here
}

export type UserloginWithRelations = Userlogin & UserloginRelations;
