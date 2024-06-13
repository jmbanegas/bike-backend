import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Controller('bikes')
export class BikesController {
  constructor(private readonly bikesService: BikesService) {}

  @Post()
  create(@Body() createBikeDto: CreateBikeDto) {
    return this.bikesService.create(createBikeDto);
  }

  @Get()
  findAll() {
    return this.bikesService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bikesService.findOne(id); // No convertir a número
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateBikeDto: UpdateBikeDto) {
    return this.bikesService.update(id, updateBikeDto); // No convertir a número
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bikesService.remove(id); // No convertir a número
  }
}
