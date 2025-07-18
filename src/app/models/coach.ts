export interface Coach {
  id: number;
  firstName: string;
  lastName: string;
  name: string;
  dateOfBirth: Date;
  nationality: string;
  contract: Contract;
}

export interface Contract {
  start: string;
  until: string;
}