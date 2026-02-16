import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateRoomDto } from './dto/create-room.dto';
import { UpdateRoomDto } from './dto/update-room.dto';
import { Room } from './entities/room.entity';

@Injectable()
export class RoomsService {
  constructor(
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
  ) {}

  create(hotelId: string, createRoomDto: CreateRoomDto) {
    const room = this.roomRepository.create({
      ...createRoomDto,
      hotelId,
    });
    return this.roomRepository.save(room);
  }

  findAllByHotel(hotelId: string) {
    return this.roomRepository.find({ where: { hotelId }, order: { label: 'ASC' } });
  }

  findAll() {
    return this.roomRepository.find();
  }

  async findOne(id: string) {
    const room = await this.roomRepository.findOne({ where: { id } });
    if (!room) throw new NotFoundException(`Room with ID ${id} not found`);
    return room;
  }

  async update(id: string, updateRoomDto: UpdateRoomDto) {
    const room = await this.findOne(id);
    this.roomRepository.merge(room, updateRoomDto);
    return this.roomRepository.save(room);
  }

  async remove(id: string) {
    const room = await this.findOne(id);
    return this.roomRepository.remove(room);
  }
}
