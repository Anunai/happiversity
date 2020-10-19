import {DefaultCrudRepository} from '@loopback/repository';
import {Userprofile, UserprofileRelations} from '../models';
import {MongoDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserprofileRepository extends DefaultCrudRepository<
  Userprofile,
  typeof Userprofile.prototype.User_id,
  UserprofileRelations
> {
  constructor(
    @inject('datasources.mongo') dataSource: MongoDataSource,
  ) {
    super(Userprofile, dataSource);
  }
}
