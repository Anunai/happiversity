import {DefaultCrudRepository} from '@loopback/repository';
import {Userlogin, UserloginRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserloginRepository extends DefaultCrudRepository<
  Userlogin,
  typeof Userlogin.prototype.user_id,
  UserloginRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Userlogin, dataSource);
  }
}
