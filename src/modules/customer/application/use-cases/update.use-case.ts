import { CustomerRepository } from '../../domain/repository/customer-repository';

export class UpdateCustomerUseCase {
  constructor(private customerRepository: CustomerRepository) {}

  async execute(input: UpdateCustomerInput): Promise<UpdateCustomerOutput> {
    const customer = await this.customerRepository.findById(input.id);

    if (!customer) {
      throw new Error('Customer not found');
    }

    customer.update(input.cnpj, input.name);

    await this.customerRepository.update(customer);

    return customer.toJson();
  }
}

type UpdateCustomerInput = {
  id: string;
  cnpj: string;
  name: string;
};

type UpdateCustomerOutput = {
  id: string;
  cnpj: string;
  name: string;
  status: boolean;
  createdAt: Date;
  updatedAt: Date;
};
