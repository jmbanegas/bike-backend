import { Module } from '@nestjs/common';
import { BikesService } from './bikes.service';
import { BikesController } from './bikes.controller';
import { PrismaService } from 'src/prisma/prisma.service'; // Ajusta la ruta según tu estructura de archivos

@Module({
  controllers: [BikesController],
  providers: [BikesService, PrismaService], // Asegúrate de incluir PrismaService aquí
})
export class BikesModule {}
