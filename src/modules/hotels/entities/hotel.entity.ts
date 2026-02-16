import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Room } from '../../rooms/entities/room.entity';

@Entity('hotels')
export class Hotel {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  floorPlanUrl: string;

  @CreateDateColumn()
  createdAt: Date;

  @OneToMany(() => Room, (room) => room.hotel)
  rooms: Room[];
}
