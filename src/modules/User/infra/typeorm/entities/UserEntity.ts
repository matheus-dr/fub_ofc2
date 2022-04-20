import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { IUserDTO } from '@modules/User/dtos/IUserDTO';
import { BaseEntity } from '@shared/infra/typeorm/entities/BaseEntity';
import { DefaultRatingEntity } from '@modules/DefaultRating/infra/typeorm/entities/DefaultRatingEntity';
import { DefaultCategoryEntity } from '@modules/DefaultCategory/infra/typeorm/entities/DefaultCategoryEntity';

@Entity('users')
export class UserEntity extends BaseEntity implements IUserDTO {
  @PrimaryGeneratedColumn({ name: 'id_user' })
  id?: number;

  @Column({ name: 'email' })
  email: string;

  @Column({ name: 'password' })
  password: string;

  @Column({ name: 'username' })
  username: string;

  @Column({ name: 'phone' })
  phone: string;

  @Column({ name: 'image_path' })
  imagePath: string;

  @ManyToMany(() => DefaultCategoryEntity)
  @JoinTable({
    name: 'aux_users_default_categories',
    joinColumn: {
      name: 'id_user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_default_category',
      referencedColumnName: 'id',
    },
  })
  categories: DefaultCategoryEntity[];

  @ManyToMany(() => DefaultRatingEntity)
  @JoinTable({
    name: 'aux_users_default_rating',
    joinColumn: {
      name: 'id_user',
      referencedColumnName: 'id',
    },
    inverseJoinColumn: {
      name: 'id_default_rating',
      referencedColumnName: 'id',
    },
  })
  ratings: DefaultRatingEntity[];

  @Column({ name: 'street' })
  street: string;

  @Column({ name: 'district' })
  district: string;

  @Column({ name: 'state' })
  state: string;
}
