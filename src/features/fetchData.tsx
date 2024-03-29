import bookings from "../data/bookings.json";
import rooms from "../data/rooms.json";
import users from "../data/users.json";
import contacts from "../data/contact.json";

export const fetchData = (query: string) => {
  switch (query) {
    case "Bookings":
      return bookings;
    case "Rooms":
      return rooms;
    case "Users":
      return users;
    case "Contacts":
      return contacts;
    default:
      return "";
  }
};
