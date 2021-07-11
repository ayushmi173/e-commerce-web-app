import { BaseEntity } from 'src/entities/base.entity';
import { Column, Entity, JoinColumn, ManyToOne } from 'typeorm';
import { CatagoryEntity } from '../catagory';
import { IProduct } from './product.interface';

@Entity('products')
export class ProductEntity extends BaseEntity implements IProduct {
  @Column({ nullable: false, unique: true })
  name: string;

  @Column({ nullable: false })
  description: string;

  @Column({ nullable: false })
  price: string;

  @Column({ nullable: true })
  image?: string;

  @Column({ nullable: true })
  catagoryId: string;

  @Column({ nullable: true })
  offer?: number;

  @Column({ nullable: true })
  quantity?: string;

  @ManyToOne(() => CatagoryEntity)
  @JoinColumn({ name: 'catagoryId', referencedColumnName: 'id' })
  catagory: CatagoryEntity;
}