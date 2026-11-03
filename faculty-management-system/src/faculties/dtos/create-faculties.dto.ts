import { IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';

export class CreateFacultiesDto 
{

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  Id: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(20)
  Name: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(10)
  @MaxLength(20)
  Expertise: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(5)
  @MaxLength(10)
  noOfPublications: string;
}