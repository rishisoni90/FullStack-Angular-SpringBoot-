export class Customer {
    id: number;
    name: string;
    email: string | null;
    phoneNumber: string | null;
  
    constructor(id: number, name: string, email: string | null, phoneNumber: string | null) {
      this.id = id;
      this.name = name;
      this.email = email;
      this.phoneNumber = phoneNumber;
    }
  }
  