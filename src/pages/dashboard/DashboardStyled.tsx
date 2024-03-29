import styled from "styled-components";

const DashboardContainer = styled.div`
  width: 96%;
  margin: 4rem auto;
  display: flex;
  flex-direction: column;
  gap: 4rem;
`;

const KPI = styled.div`
  height: 10.5rem;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 5rem;
`;

const KPIContainer = styled.div`
  height: 100%;
  width: 100%;
  background-color: white;
  border-radius: 12px;
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 2.2rem;
  padding-left: 3rem;
  box-shadow: 0px 4px 4px #00000005;
  transition: box-shadow 0.3s;
  svg {
    padding: 2rem;
    border-radius: 8px;
    background-color: rgb(255, 237, 236);
    fill: rgb(226, 52, 40);
    transition: all 0.3s;
  }
  div {
    font-family: "Poppins";
    h2 {
      font-weight: 600;
      font-size: 3rem;
      color: #393939;
      margin: 0;
    }
    p {
      font-weight: 300;
      font-size: 1.4rem;
      color: #787878;
      margin: 0;
    }
  }
  :hover {
    box-shadow: 0px 16px 30px #00000014;
    svg {
      background-color: #e23428;
      fill: white;
    }
  }
`;

const CalendarAndGraph = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 4rem;
`;

const CalendarAndGraphSubcontainer = styled.div`
  height: 100%;
  width: 50%;
  max-width: 50%;
  background-color: #ffffff;
  border-radius: 2rem;
  padding: 2rem;
  flex: 1 1 0;
  width: 0;
  p {
    text-align: center;
    margin-top: 20rem;
    font-family: "Poppins";
    font-weight: 600;
    font-size: 3rem;
    color: #393939;
  }
`;

interface PropsSwipper {
  variant: string;
}

const ContactSwiperContainer = styled.div<PropsSwipper>`
  position: relative;
  ${(props) => (props.variant === "white" ? "background-color:#fff" : "")};
  box-shadow: 0px 4px 4px #00000005;
  border-radius: 2rem;
  overflow: hidden;
  width: 98%;
  p {
    margin: 3rem 0 0 3rem;
    font-family: "Poppins";
    font-weight: 400;
    font-size: 2rem;
    color: #393939;
  }
  .swiper {
    width: 100%;
    .swiper-button-prev,
    .swiper-button-next {
      background-color: #135846;
      color: white;
      height: 5.6rem;
      width: 5.2rem;
      border: 1px solid #ffffff;
      border-radius: 12px;
      & .swiper-button-disabled {
        opacity: 0;
      }
      :after {
        font-size: 2rem;
        font-weight: 600;
      }
    }
    .swiper-button-prev {
      left: 0;
    }
    .swiper-button-next {
      right: 0;
    }
    .swiper-button-prev.swiper-button-disabled,
    .swiper-button-next.swiper-button-disabled {
      opacity: 0;
    }
  }
  .swiper-wrapper {
  }

  .swiper-slide {
    text-align: center;
    background: #ffffff;
    border: 1px solid #ebebeb;
    border-radius: 2rem;
    animation: all 2s;
    margin: 3rem 2% 7rem 2%;
    width: 29.1% !important;
    :hover {
      box-shadow: 0px 16px 30px #00000014;
    }
    p {
      font-size: 1.6rem;
      font-weight: 400;
      color: #4e4e4e;
      margin: 3rem;
    }
    .contactUser {
      display: flex;
      flex-direction: row;
      text-align: left;
      margin: 3rem;
      justify-content: space-between;
      img {
        width: 80px;
        height: 80px;
        border-radius: 15px;
        object-fit: cover;
      }
      p {
        margin: 0;
      }
    }
  }
`;

export {
  DashboardContainer,
  KPI,
  KPIContainer,
  CalendarAndGraph,
  CalendarAndGraphSubcontainer,
  ContactSwiperContainer,
};
