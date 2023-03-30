import { Box, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import "./Solution.css";

const SolutionCardContainer = (props) => {
  const Card = ({ image, title, subtitle, detail }) => {
    return (
      <div>
        <ul>
          <li
            className="booking-card"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1578944032637-f09897c5233d?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ)",
            }}
          >
            <div className="book-container">
              <div className="content">
                <button className="btn">Xem thêm</button>
              </div>
            </div>
            <div className="informations-container">
              <h2 className="title">Giải pháp giám sát năng lượng</h2>
              <p className="sub-title">Et moi un je suis sous-titre</p>
              <div className="more-information">
                <p className="disclaimer">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Quasi eveniet perferendis culpa. Expedita architecto nesciunt,
                  rem distinctio
                </p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <HStack {...props}>
      <VStack>
        <Card />
        <Card />
      </VStack>
      <VStack>
        <Card />
        <Card />
      </VStack>
    </HStack>
  );
};

export default SolutionCardContainer;
