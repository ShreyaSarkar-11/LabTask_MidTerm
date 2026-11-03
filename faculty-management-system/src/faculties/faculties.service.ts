import { BadGatewayException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Faculties } from './entities/faculties.entity.js';
import { Repository } from 'typeorm';
import { CreateFacultiesDto } from './dtos/create-faculties.dto.js';

@Injectable()
export class FacultiesService {
  constructor(
    @InjectRepository(Faculties) private readonly facultyRepo: Repository<Faculties>,
  ) {}

 
}