import {Entity, model, property} from '@loopback/repository';

@model()
export class HappinessFeed extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  Feed_id?: number;

  @property({
    type: 'string',
    required: true,
  })
  Feed_Title: string;

  @property({
    type: 'string',
    required: true,
  })
  Feed_Description: string;

  @property({
    type: 'date',
    required: true,
  })
  Feed_Date: string;

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


  constructor(data?: Partial<HappinessFeed>) {
    super(data);
  }
}

export interface HappinessFeedRelations {
  // describe navigational properties here
}

export type HappinessFeedWithRelations = HappinessFeed & HappinessFeedRelations;
