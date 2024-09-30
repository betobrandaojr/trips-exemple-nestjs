export interface CustomerProps {
  readonly id: string;
  cnpj: string;
  name: string;
  status: boolean;
  readonly createdAt: Date;
  updatedAt: Date;
}

export class Customer {
  private props: CustomerProps;

  constructor(props: CustomerProps) {
    this.props = props;
  }

  get id(): string {
    return this.props.id;
  }

  get cnpj(): string {
    return this.props.cnpj;
  }

  get name(): string {
    return this.props.name;
  }

  get status(): boolean {
    return this.props.status;
  }

  get createdAt(): Date {
    return this.props.createdAt;
  }

  get updatedAt(): Date {
    return this.props.updatedAt;
  }

  public static create(props: CustomerProps) {
    return new Customer(props);
  }

  public update(cnpj: string, name: string): void {
    this.props.cnpj = cnpj;
    this.props.name = name;
    this.props.updatedAt = new Date();
  }

  public delete(): void {
    this.props.status = false;
    this.props.updatedAt = new Date();
  }

  public isActive(): boolean {
    return this.props.status;
  }

  toJson() {
    return {
      id: this.props.id,
      cnpj: this.props.cnpj,
      name: this.props.name,
      status: this.props.status,
      createdAt: this.props.createdAt,
      updatedAt: this.props.updatedAt,
    };
  }
}
