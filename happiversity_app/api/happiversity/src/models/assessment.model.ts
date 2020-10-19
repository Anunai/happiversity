import {Entity, model, property} from '@loopback/repository';

@model()
export class Assessment extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  AssessmentID?: string;

  @property({
    type: 'number',
    required: true,
  })
  User_id: number;

  @property({
    type: 'string',
    required: true,
  })
  AssessmentLink: string;

  @property({
    type: 'date',
    required: true,
  })
  AssessmentDate: string;

  @property({
    type: 'string',
    required: true,
  })
  VersionID: string;


  constructor(data?: Partial<Assessment>) {
    super(data);
  }
}

export interface AssessmentRelations {
  // describe navigational properties here
}

export type AssessmentWithRelations = Assessment & AssessmentRelations;
