import {Entity, model, property} from '@loopback/repository';

@model()
export class UserTasks extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  user_id: number;

  @property({
    type: 'number',
    required: true,
  })
  Goal_id: number;

  @property({
    type: 'number',
    required: true,
  })
  Task_id: number;

  @property({
    type: 'string',
    required: true,
  })
  Task_Name: string;

  @property({
    type: 'date',
    required: true,
  })
  TaskStartDateWithTime: string;

  @property({
    type: 'date',
    required: true,
  })
  TaskDueDateWithTime: string;

  @property({
    type: 'date',
    required: true,
  })
  Task_EndDate: string;

  @property({
    type: 'date',
    required: true,
  })
  Task_Estimate: string;

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


  constructor(data?: Partial<UserTasks>) {
    super(data);
  }
}

export interface UserTasksRelations {
  // describe navigational properties here
}

export type UserTasksWithRelations = UserTasks & UserTasksRelations;
