import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { HotelsService } from './hotels.service';
import { CreateHotelDto } from './dto/create-hotel.dto';
import { UpdateHotelDto } from './dto/update-hotel.dto';
import { RoomsService } from '../rooms/rooms.service';
import { CreateRoomDto } from '../rooms/dto/create-room.dto';

@Controller('hotels')
export class HotelsController {
  constructor(
    private readonly hotelsService: HotelsService,
    private readonly roomsService: RoomsService,
  ) {}

  @Post()
  create(@Body() createHotelDto: CreateHotelDto) {
    return this.hotelsService.create(createHotelDto);
  }

  @Get()
  findAll() {
    return this.hotelsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.hotelsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateHotelDto: UpdateHotelDto) {
    return this.hotelsService.update(id, updateHotelDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.hotelsService.remove(id);
  }

  // Nested Routes for Rooms
  @Get(':id/rooms')
  getRooms(@Param('id') id: string) {
    return this.roomsService.findAllByHotel(id);
  }

  @Post(':id/rooms')
  createRoom(@Param('id') id: string, @Body() createRoomDto: CreateRoomDto) {
    return this.roomsService.create(id, createRoomDto);
  }
}
