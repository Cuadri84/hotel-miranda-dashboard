interface Booking {
  id: string;
  name: string;
  orderDate: string;
  checkIn: string;
  checkOut: string;
  specialRequest: string;
  room_number: number;
  status: string;
}

interface Contact {
  id: number;
  date: string;
  user: {
    name: string;
    email: string;
    phone: string;
  };
  message: {
    subject: string;
    body: string;
  };
  stars: number;
  archived: boolean;
}

interface Room {
  id: string;
  room_number: string;
  photo: string;
  photoTwo: string;
  photoThree: string;
  photoFour: string;
  photoFive: string;
  description: string;
  discountPercent: string;
  discount: string;
  cancellationPolicy: string;
  bed_type: string;
  room_facilities: string[];
  room_rate: number;
  room_offer: string;
  room_status: string;
}

interface User {
  id: number;
  photo: string;
  name: string;
  position: string;
  email: string;
  phone: string;
  date: string;
  description: string;
  state: string;
}

export { Booking, Contact, Room, User };
