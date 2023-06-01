// Swiper Components
import { Swiper, SwiperSlide } from "swiper/react";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";

// Swiper Modules
import { Navigation } from "swiper";

export const ContactSwiper = () => {
  return (
    <Swiper
      className="mySwiper"
      navigation={true}
      modules={[Navigation]}
      slidesPerView={3}
    >
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="reviewUser">
          {" "}
          <div>
            <h2>Nadia Mera</h2>
            <h4 style={{ color: "#94A89C" }}>4m ago</h4>
            <h4 style={{ color: "#94A89C" }}>nadiaMera@gmail.com</h4>
            <h4 style={{ color: "#94A89C" }}>666666666</h4>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#5AD07A"
            >
              <path d="m21.05 32.45 13.5-13.5-1.75-1.7L21.05 29l-5.9-5.95-1.7 1.75ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#E23428"
            >
              <path d="m16.6 33 7.4-7.4 7.4 7.4 1.6-1.6-7.4-7.4 7.4-7.4-1.6-1.6-7.4 7.4-7.4-7.4-1.6 1.6 7.4 7.4-7.4 7.4ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="reviewUser">
          {" "}
          <div>
            <h2>Ramon Alcorta</h2>
            <h4 style={{ color: "#94A89C" }}>4m ago</h4>
            <h4 style={{ color: "#94A89C" }}>nadiaMera@gmail.com</h4>
            <h4 style={{ color: "#94A89C" }}>666666666</h4>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#5AD07A"
            >
              <path d="m21.05 32.45 13.5-13.5-1.75-1.7L21.05 29l-5.9-5.95-1.7 1.75ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#E23428"
            >
              <path d="m16.6 33 7.4-7.4 7.4 7.4 1.6-1.6-7.4-7.4 7.4-7.4-1.6-1.6-7.4 7.4-7.4-7.4-1.6 1.6 7.4 7.4-7.4 7.4ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="reviewUser">
          {" "}
          <div>
            <h2>Paco Díaz</h2>
            <h4 style={{ color: "#94A89C" }}>4m ago</h4>
            <h4 style={{ color: "#94A89C" }}>nadiaMera@gmail.com</h4>
            <h4 style={{ color: "#94A89C" }}>666666666</h4>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#5AD07A"
            >
              <path d="m21.05 32.45 13.5-13.5-1.75-1.7L21.05 29l-5.9-5.95-1.7 1.75ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#E23428"
            >
              <path d="m16.6 33 7.4-7.4 7.4 7.4 1.6-1.6-7.4-7.4 7.4-7.4-1.6-1.6-7.4 7.4-7.4-7.4-1.6 1.6 7.4 7.4-7.4 7.4ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="reviewUser">
          {" "}
          <div>
            <h2>Lorena Moll</h2>
            <h4 style={{ color: "#94A89C" }}>4m ago</h4>
            <h4 style={{ color: "#94A89C" }}>nadiaMera@gmail.com</h4>
            <h4 style={{ color: "#94A89C" }}>666666666</h4>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#5AD07A"
            >
              <path d="m21.05 32.45 13.5-13.5-1.75-1.7L21.05 29l-5.9-5.95-1.7 1.75ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#E23428"
            >
              <path d="m16.6 33 7.4-7.4 7.4 7.4 1.6-1.6-7.4-7.4 7.4-7.4-1.6-1.6-7.4 7.4-7.4-7.4-1.6 1.6 7.4 7.4-7.4 7.4ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="reviewUser">
          {" "}
          <div>
            <h2>Iker Gonzalez</h2>
            <h4 style={{ color: "#94A89C" }}>4m ago</h4>
            <h4 style={{ color: "#94A89C" }}>nadiaMera@gmail.com</h4>
            <h4 style={{ color: "#94A89C" }}>666666666</h4>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#5AD07A"
            >
              <path d="m21.05 32.45 13.5-13.5-1.75-1.7L21.05 29l-5.9-5.95-1.7 1.75ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#E23428"
            >
              <path d="m16.6 33 7.4-7.4 7.4 7.4 1.6-1.6-7.4-7.4 7.4-7.4-1.6-1.6-7.4 7.4-7.4-7.4-1.6 1.6 7.4 7.4-7.4 7.4ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
          </div>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam
        </p>
        <div className="reviewUser">
          {" "}
          <div>
            <h2>Laura Sancho</h2>
            <h4 style={{ color: "#94A89C" }}>4m ago</h4>
            <h4 style={{ color: "#94A89C" }}>nadiaMera@gmail.com</h4>
            <h4 style={{ color: "#94A89C" }}>666666666</h4>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#5AD07A"
            >
              <path d="m21.05 32.45 13.5-13.5-1.75-1.7L21.05 29l-5.9-5.95-1.7 1.75ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="30"
              width="30"
              viewBox="0 0 48 48"
              fill="#E23428"
            >
              <path d="m16.6 33 7.4-7.4 7.4 7.4 1.6-1.6-7.4-7.4 7.4-7.4-1.6-1.6-7.4 7.4-7.4-7.4-1.6 1.6 7.4 7.4-7.4 7.4ZM24 43q-3.9 0-7.375-1.5t-6.05-4.075Q8 34.85 6.5 31.375 5 27.9 5 24q0-3.95 1.5-7.425Q8 13.1 10.575 10.55 13.15 8 16.625 6.5 20.1 5 24 5q3.95 0 7.425 1.5Q34.9 8 37.45 10.55 40 13.1 41.5 16.575 43 20.05 43 24q0 3.9-1.5 7.375t-4.05 6.05Q34.9 40 31.425 41.5 27.95 43 24 43Zm0-2.25q7 0 11.875-4.9T40.75 24q0-7-4.875-11.875T24 7.25q-6.95 0-11.85 4.875Q7.25 17 7.25 24q0 6.95 4.9 11.85 4.9 4.9 11.85 4.9ZM24 24Z" />
            </svg>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};