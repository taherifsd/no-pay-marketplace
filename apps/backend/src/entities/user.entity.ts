// src/entities/user.entity.ts
import { Column, Entity, OneToOne } from 'typeorm';
import { BaseEntity } from '../common/base.entity';
import { Role } from '../common/role.enum';
import { Vendor } from './vendor.entity';
import { Customer } from './customer.entity';

@Entity()
export class User extends BaseEntity {
  @Column({ unique: true })
  phoneNumber: string;        // 09xxxxxxxxx

  @Column({
    type: 'enum',
    enum: Role,
    default: Role.CUSTOMER,
  })
  role: Role;

  @Column({ default: true })
  isActive: boolean;

  // Relations
  @OneToOne(() => Vendor, (vendor) => vendor.user)
  vendor: Vendor;

  @OneToOne(() => Customer, (customer) => customer.user)
  customer: Customer;
}
