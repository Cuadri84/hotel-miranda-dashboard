import React, { useEffect } from "react";

// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

// Swiper Modules
import { Navigation } from "swiper";

// Redux
import { useDispatch } from "react-redux";
import { getDataContacts, archiveContact } from "../../features/contacSlice";
import { useTypedSelector } from "../../store/store";

export const ContactSwiper = () => {
  const dispatch = useDispatch();
  const { contactsList } = useTypedSelector((state) => state.contacts);
  const { status } = useTypedSelector((state) => state.contacts);
  const contacts = contactsList.filter((contact) => contact.archived === false);

  useEffect(() => {
    if (status === "idle") dispatch(getDataContacts());
  }, [contacts, dispatch, status]);

  const handleContact = (id) => {
    dispatch(archiveContact(id));
  };

  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      modules={[Navigation]}
      slidesPerView={3}
    >
      {contacts.map((contact) => (
        <SwiperSlide key={contact.id}>
          <p>{contact.message.body}</p>
          <div className="reviewUser">
            {" "}
            <div>
              <h2>{contact.user.name}</h2>
              <h4 style={{ color: "#94A89C" }}>{contact.date}</h4>
              <h4 style={{ color: "#94A89C" }}>{contact.user.email}</h4>
              <h4 style={{ color: "#94A89C" }}>{contact.user.phone}</h4>
            </div>
            <div>
              {contact.archived ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 48 48"
                  fill="#5AD07A"
                  onClick={() => {
                    return handleContact(contact.id);
                  }}
                >
                  <path d="m21.05 32.45 13.5-13.5-1.75-1.7L21.05 29l-5.9-5.95-1.7 1.75ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 48 48"
                  fill="#E23428"
                  onClick={() => {
                    return handleContact(contact.id);
                  }}
                >
                  <path d="m16.6 33 7.4-7.4 7.4 7.4 1.6-1.6-7.4-7.4 7.4-7.4-1.6-1.6-7.4 7.4-7.4-7.4-1.6 1.6 7.4 7.4-7.4 7.4ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
                </svg>
              )}
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
