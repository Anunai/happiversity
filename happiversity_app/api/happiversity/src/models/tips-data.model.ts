import {Entity, model, property} from '@loopback/repository';

@model()
export class TipsData extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: false,
    required: true,
  })
  Tip_id: number;

  @property({
    type: 'string',
    required: true,
  })
  Tip_Title: string;

  @property({
    type: 'string',
    required: true,
  })
  Tip_Desc: string;

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


  constructor(data?: Partial<TipsData>) {
    super(data);
  }
}

export interface TipsDataRelations {
  // describe navigational properties here
}

export type TipsDataWithRelations = TipsData & TipsDataRelations;
