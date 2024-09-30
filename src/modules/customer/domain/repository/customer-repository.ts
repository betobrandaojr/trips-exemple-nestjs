import { Customer } from '../entities/customer';

export interface CustomerRepository {
  findById(id: string): Promise<Customer | null>;
  findAllActive(): Promise<Customer[]>;
  save(customer: Customer): Promise<void>;
  update(customer: Customer): Promise<void>;
  delete(customer: Customer): Promise<void>;
}
