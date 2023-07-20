interface Booking {
  _id: string;
  name: string;
  orderDate: Date;
  checkIn: string;
  checkOut: string;
  specialRequest: string;
  room_number: number;
  status: string;
}

interface IContact {
  _id: string;
  date: Date;
  name: string;
  mail: string;
  phone: number;
  messageSubject: string;
  messageBody: string;
  archived: boolean;
}

interface IRoom {
  _id: string;
  room_number: number;
  photo: string;
  photoTwo: string;
  photoThree: string;
  photoFour: string;
  photoFive: string;
  description: string;
  discountPercent: number;
  discount: string;
  cancellationPolicy: string;
  bed_type: string;
  room_facilities: string[];
  room_rate: number;
  room_offer: string;
  room_status: string;
  bookings: { type: Booking[]; default: [] };
}

interface IUser {
  _id: string;
  photo: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  date: string;
  description: string;
  state: "ACTIVE" | "INACTIVE";
  pass: string;
}

export { Booking, IContact, IRoom, IUser };
