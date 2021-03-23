import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateCustomerDto } from './dto/create-customer.dto';
import { UpdateCustomerDto } from './dto/update-customer.dto';
import { Customer } from './entities/customer.entity';


@Injectable()
export class CustomersService {

  constructor(@InjectRepository(Customer)
    private customersRepository: Repository<Customer>
  ) {}

  create(CreateCustomerDto: CreateCustomerDto) {
    return this.customersRepository.save(CreateCustomerDto);
  }

  findAll() {
    return this.customersRepository.find();
  }

  findOne(id: number) {
    return this.customersRepository.findOne(id);
  }

  update(id: number, updateCustomerDto: UpdateCustomerDto) {
    return this.customersRepository.update(id,updateCustomerDto);
  }

  remove(id: number) {
    return this.customersRepository.delete(id);
  }
}
