import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";

// Redux
import { RootStateOrAny, useDispatch } from "react-redux";
import { archiveContact, getDataContacts } from "../../features/contacSlice";
import { useTypedSelector } from "../../store/store";

import { IContact } from "../../features/interfaces/interfaces";
import Swal from "sweetalert2";

export const ContactSwiper: React.FC = () => {
  const dispatch = useDispatch();
  const { contactsList, status } = useTypedSelector(
    (state: RootStateOrAny) => state.contacts
  );

  const contacts: IContact[] = contactsList.filter(
    (contact: IContact) => !contact.archived
  );

  useEffect(() => {
    if (status === "idle") dispatch(getDataContacts());
  }, [contacts, dispatch, status]);

  const handleContact = (_id: string) => {
    dispatch(archiveContact(_id));
  };

  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      modules={[Navigation]}
      slidesPerView={3}
    >
      {contacts.map((contact: IContact) => (
        <SwiperSlide key={contact._id}>
          <p>{contact.messageBody}</p>
          <div className="contactUser">
            <div>
              <h2>{contact.name}</h2>
              <h4 style={{ color: "#94A89C" }}>{contact.mail}</h4>
              <h4 style={{ color: "#94A89C" }}>{contact.phone}</h4>
            </div>
            <div>
              {contact.archived ? (
                ""
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="30"
                  width="30"
                  viewBox="0 0 48 48"
                  fill="#E23428"
                  onClick={() => {
                    Swal.fire({
                      position: "top-end",
                      icon: "success",
                      title: "Archived Contact",
                      showConfirmButton: false,
                      timer: 1500,
                    });
                    return handleContact(contact._id);
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
