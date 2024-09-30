import { v4 as uuidv4 } from 'uuid';
import { Customer } from '../../domain/entities/customer';
import { CustomerRepository } from '../../domain/repository/customer-repository';

export class CreateCustomerUseCase {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(input: CreateCustomerInput): Promise<CreateCustomerOutput> {
    const id = uuidv4();

    const customer = Customer.create({
      id,
      cnpj: input.cnpj,
      name: input.name,
      status: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    await this.customerRepository.save(customer);
    return customer.toJson();
  }
}

type CreateCustomerInput = {
  cnpj: string;
  name: string;
};

type CreateCustomerOutput = {
  id: string;
  cnpj: string;
  name: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};
