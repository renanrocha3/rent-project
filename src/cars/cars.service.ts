import { Injectable } from '@nestjs/common';
import { CreateCarDto } from './dto/create-car.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Car } from './schema/car.schema';
import { UpdateCarDto } from './dto/update-car.dto';
import { Model } from 'mongoose';

@Injectable()
export class CarsService {

  constructor(@InjectModel(Car.name) private carModel: Model<Car>) { }

  async create(createCarDto: CreateCarDto) {
    this.carModel.create(createCarDto);
  }

  findAll() {
    return this.carModel.find();
  }

  findOne(id: number) {
    return this.carModel.findOne({ _id: id });
  }

  update(id: number, updateCarDto: UpdateCarDto) {
    return this.carModel.findByIdAndUpdate({ _id: id, updateCarDto });
  }

  remove(id: number) {
    return this.carModel.deleteOne({ _id: id });
  }
}
