// src/entities/customer.entity.ts
import { Column, Entity, JoinColumn, OneToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { User } from './user.entity';

@Entity()
export class Customer extends BaseEntity {
  @Column()
  fullName: string;

  @Column()
  phoneNumber: string;

  @Column()
  address: string;

  // Relation — یک Customer دقیقاً یک User دارد
  @OneToOne(() => User, (user) => user.customer, { eager: true })
  @JoinColumn()
  user: User;
}
