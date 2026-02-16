import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { Hotel } from './entities/hotel.entity';

@Injectable()
export class HotelsService {
  constructor(
    @InjectRepository(Hotel)
    private readonly hotelRepository: Repository<Hotel>,
  ) {}

  create(createHotelDto: CreateHotelDto) {
    const hotel = this.hotelRepository.create(createHotelDto);
    return this.hotelRepository.save(hotel);
  }

  findAll() {
    return this.hotelRepository.find({ order: { createdAt: 'DESC' } });
  }

  async findOne(id: string) {
    const hotel = await this.hotelRepository.findOne({ where: { id }, relations: ['rooms'] });
    if (!hotel) throw new NotFoundException(`Hotel with ID ${id} not found`);
    return hotel;
  }

  async update(id: string, updateHotelDto: UpdateHotelDto) {
    const hotel = await this.findOne(id);
    this.hotelRepository.merge(hotel, updateHotelDto);
    return this.hotelRepository.save(hotel);
  }

  async remove(id: string) {
    const hotel = await this.findOne(id);
    return this.hotelRepository.remove(hotel);
  }
}
