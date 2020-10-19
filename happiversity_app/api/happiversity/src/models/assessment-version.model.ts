import {Entity, model, property} from '@loopback/repository';

@model()
export class AssessmentVersion extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  VersionID?: number;

  @property({
    type: 'number',
    required: true,
  })
  AssessmentID: number;

  @property({
    type: 'number',
    required: true,
  })
  VersionNumber: number;

  @property({
    type: 'string',
    required: true,
  })
  Created_by: string;

  @property({
    type: 'string',
    required: true,
  })
  Updated_by: string;

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


  constructor(data?: Partial<AssessmentVersion>) {
    super(data);
  }
}

export interface AssessmentVersionRelations {
  // describe navigational properties here
}

export type AssessmentVersionWithRelations = AssessmentVersion & AssessmentVersionRelations;
