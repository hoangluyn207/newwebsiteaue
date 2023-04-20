import { Box, HStack, VStack, Image } from "@chakra-ui/react";
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
              backgroundImage: `url(${image})`,
            }}
          >
            <div className="book-container">
              <div className="content">
                <button className="btn">Xem thêm</button>
              </div>
            </div>
            <div className="informations-container">
              <h2 className="title">{title}</h2>
              <p className="sub-title">{subtitle}</p>
              <div className="more-information">
                <p className="disclaimer">{detail}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    );
  };
  return (
    <HStack {...props}>
      <VStack spacing={"32px"}>
        <Card
          title={"Giám sát năng lượng"}
          image={"./image/solution/Giamsatnangluong.jpg"}
          subtitle={"Đảm bảo chi phí được quản lý hiệu quả"}
          detail={
            "Cung cấp một cách nhìn toàn cảnh cho người dùng về việc tiêu thụ năng lượng, tình trạng hoạt động và sự phân bố của năng lượng trong các khoảng thời điểm khác nhau"
          }
        />
        <Card
          image={"./image/solution/khinen.png"}
          title={"Giám sát khí nén"}
          subtitle={"Ngăn ngừa các sự cố về chất lượng khí"}
          detail={
            "Cung cấp thông tin về mức tiêu thụ năng lượng tại các thiết bị cụ thể, từ đó tìm ra các khu vực rò rỉ khí nén và đưa ra các biện pháp khắc phục"
          }
        />
      </VStack>
      <VStack spacing={"32px"}>
        <Card
          title={"Giám sát trạng thái máy"}
          image={"./image/solution/giamsatmaymoc.jpg"}
          subtitle={"Nắm bắt tức thời thông tin sự cố máy"}
          detail={
            "Hiển thị chi tiết thông tin hoạt động của từng máy. Thống kê biểu đồ theo từng mức độ thời gian (Bảo trì, Lỗi, Bình thường)"
          }
        />

        <Card
          image={"./image/solution/nhietdo.jpg"}
          title={"Giám sát nhiệt độ, độ ẩm"}
          subtitle={"Duy trì chất lượng sảm phẩm"}
          detail={
            "Các yếu tố như nhiệt độ và độ ẩm trong quá trình sản xuất và bảo quản có thể có tác động đáng kể đến chất lượng sản phẩm"
          }
        />
      </VStack>
    </HStack>
  );
};

export default SolutionCardContainer;
