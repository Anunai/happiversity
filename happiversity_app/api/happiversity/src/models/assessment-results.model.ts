import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class AssessmentResults extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  AssessmentID?: number;

  @property({
    type: 'number',
    required: true,
  })
  User_Id: number;

  @property({
    type: 'number',
    required: true,
  })
  Result: number;

  @property({
    type: 'string',
    required: true,
  })
  AssessmentReport: string;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<AssessmentResults>) {
    super(data);
  }
}

export interface AssessmentResultsRelations {
  // describe navigational properties here
}

export type AssessmentResultsWithRelations = AssessmentResults & AssessmentResultsRelations;
