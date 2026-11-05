import { Body, Controller, Post } from '@nestjs/common';
import { FacultiesService } from './faculties.service.js';
import { CreateFacultiesDto } from './dtos/create-faculties.dto.js';
import { Faculties } from './entities/faculties.entity.js';

@Controller('faculties')
export class FacultiesController {
  constructor(private readonly facultiesService: FacultiesService) {}

  @Post('create-faculty')
  async createFaculty(@Body() faculty: CreateFacultiesDto): Promise<Faculties | string> {
    return await this.facultiesService.createFaculty(faculty);
  }
}