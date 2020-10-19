import {Entity, model, property} from '@loopback/repository';

@model()
export class Userprofile extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  User_id?: 'number';

  @property({
    type: 'string',
    required: true,
  })
  First_Name: 'string';

  @property({
    type: 'string',
    required: true,
  })
  Last_Name: 'string';

  @property({
    type: 'number',
    required: true,
  })
  Phone_Number: 'number';

  @property({
    type: 'date',
    required: true,
  })
  DOB: 'date';

  @property({
    type: 'string',
    required: true,
  })
  Gender: 'string';

  @property({
    type: 'string',
    required: true,
  })
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  Photo_Url: 'string';

  @property({
    type: 'string',
    required: true,
  })
  Status: 'string';

  @property({
    type: 'string',
    required: true,
  })
  Role: 'string';

  @property({
    type: 'string',
    required: true,
  })
  Subscription: 'string';

  @property({
    type: 'date',
    required: true,
  })
  Created_at: 'date';


  constructor(data?: Partial<Userprofile>) {
    super(data);
  }
}

export interface UserprofileRelations {
  // describe navigational properties here
}

export type UserprofileWithRelations = Userprofile & UserprofileRelations;
