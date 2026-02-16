import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Hotel } from '../../hotels/entities/hotel.entity';

@Entity('rooms')
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  label: string;

  @Column({ default: 'free' })
  status: string;

  @Column('jsonb', { nullable: true })
  polygon: object[];

  @Column('jsonb', { nullable: true })
  occupants: object[];

  @ManyToOne(() => Hotel, (hotel) => hotel.rooms, { onDelete: 'CASCADE' })
  hotel: Hotel;

  @Column()
  hotelId: string;
}
