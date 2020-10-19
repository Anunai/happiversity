import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class UserTipsStatus extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  User_id: number;

  @property({
    type: 'number',
    required: true,
  })
  Tip_id: number;

  @property({
    type: 'string',
    required: true,
  })
  Status: string;

  @property({
    type: 'date',
    required: true,
  })
  Mark_Date: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<UserTipsStatus>) {
    super(data);
  }
}

export interface UserTipsStatusRelations {
  // describe navigational properties here
}

export type UserTipsStatusWithRelations = UserTipsStatus & UserTipsStatusRelations;
