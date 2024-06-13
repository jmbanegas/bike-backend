import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service'; // Ajusta la ruta según tu estructura de archivos
import { CreateBikeDto } from './dto/create-bike.dto';
import { UpdateBikeDto } from './dto/update-bike.dto';

@Injectable()
export class BikesService {
  constructor(private prisma: PrismaService) {}

  async create(createBikeDto: CreateBikeDto) {
    return this.prisma.bike.create({
      data: {
        name: createBikeDto.name,
        price: createBikeDto.price,
        brand: createBikeDto.brand,
      },
    });
  }

  async findAll() {
    return this.prisma.bike.findMany();
  }

  async findOne(code: string) {
    return this.prisma.bike.findUnique({
      where: { code },
    });
  }

  async update(code: string, updateBikeDto: UpdateBikeDto) {
    return this.prisma.bike.update({
      where: { code },
      data: {
        name: updateBikeDto.name,
        price: updateBikeDto.price,
        brand: updateBikeDto.brand,
      },
    });
  }

  async remove(code: string) {
    return this.prisma.bike.delete({
      where: { code },
    });
  }
}
