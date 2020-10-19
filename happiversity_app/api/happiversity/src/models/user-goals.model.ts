import {Entity, model, property} from '@loopback/repository';

@model()
export class UserGoals extends Entity {
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
  Goal_id: number;

  @property({
    type: 'string',
    required: true,
  })
  Goal_name: string;

  @property({
    type: 'string',
    required: true,
  })
  Goal_Purpose: string;

  @property({
    type: 'string',
    required: true,
  })
  Goal_Desc: string;

  @property({
    type: 'date',
    required: true,
  })
  Goal_StartDate: string;

  @property({
    type: 'date',
    required: true,
  })
  Goal_DueDate: string;

  @property({
    type: 'date',
    required: true,
  })
  Goal_EndDate: string;

  @property({
    type: 'string',
    required: true,
  })
  Status: string;

  @property({
    type: 'date',
    required: true,
  })
  Created_at: string;

  @property({
    type: 'date',
    required: true,
  })
  Updated_at: string;


  constructor(data?: Partial<UserGoals>) {
    super(data);
  }
}

export interface UserGoalsRelations {
  // describe navigational properties here
}

export type UserGoalsWithRelations = UserGoals & UserGoalsRelations;
