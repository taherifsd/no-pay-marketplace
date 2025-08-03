// src/entities/vendor.entity.ts
import {
    Column,
    Entity,
    JoinColumn,
    OneToOne,
  } from 'typeorm';
  import { BaseEntity } from '../common/base.entity';
  import { User } from './user.entity';
  
  @Entity()
  export class Vendor extends BaseEntity {
    @Column()
    storeName: string;
  
    @Column()
    ownerFirstName: string;
  
    @Column()
    ownerLastName: string;
  
    @Column({ nullable: true })
    logoUrl?: string;
  
    @Column({ nullable: true })
    city?: string;
  
    @Column({ nullable: true })
    province?: string;
  
    @Column({ nullable: true })
    address?: string;
  
    @Column({ nullable: true })
    description?: string;
  
    // Relation — یک Vendor دقیقاً یک User دارد
    @OneToOne(() => User, (user) => user.vendor, { eager: true })
    @JoinColumn()
    user: User;
  }
  