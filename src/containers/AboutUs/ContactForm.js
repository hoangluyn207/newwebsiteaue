import React, { useState, useContext } from "react";
import {
  VStack,
  Text,
  HStack,
  Box,
  Textarea,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";
import TextField from "../../components/TextField";
import ButtonJump from "../../components/Button/ButtonJump";
import "./ButtonJump.css";
import emailjs from "emailjs-com";
import { MobileContext } from "../../components/MobileContext";
import GoogleReCaptcha from "react-google-recaptcha";

const ContactForm = () => {
  const { isMobile } = useContext(MobileContext);
  const styleDiv = {
    position: "relative",
  };
  const styleLabel = {
    position: "absolute",
    top: "0.2ex",
    zIndex: "2",
    left: "2em",
    backgroundColor: "white",
    padding: "0 5px",
    color: "#0099cc",
  };
  const styleInput = {
    border: "1px solid gray",
    borderRadius: "6px",
    position: "relative",
    width: isMobile ? "80vw" : "200px",
    padding: "4px 8px",
    margin: "10px",
    lineHeight: "36px",
    paddingRight: "8px",
    height: "48px",
    WebkitBoxShadow: "0 0 0 1000px white inset",
    MozBoxShadow: "0 0 0 1000px white inset",
    boxShadow: "0 0 0 1000px white inset",
  };
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [sdt, setSdt] = useState("");
  const [cty, setCty] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();

    emailjs
      .send(
        "service_ft81knn",
        "template_dom4df7",
        {
          from_name: name,
          email: email,
          company: cty,
          message: message,
        },
        "058cDMXuQVQsiMWLX"
      )
      .then(() => {
        alert("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        alert(
          "An error occurred while sending your message. Please try again later."
        );
      });
  };
  return (
    <VStack
      as="form"
      backgroundColor={"white"}
      width={isMobile ? "80vw" : "50%"}
      display={"flex"}
      justifyContent={"space-around"}
      spacing={isMobile ? "0" : "16px"}
      padding="16px"
      height={isMobile ? "700px" : "400px"}
      onSubmit={handleSubmit}
    >
      <Text textColor="#0099cc" fontWeight={"600"}>
        Liên lạc với chúng tôi
      </Text>
      {isMobile ? (
        <>
          <div style={styleDiv}>
            <label style={styleLabel}>Họ tên</label>
            <Input
              id="name"
              value={name}
              onChange={(event) => setName(event.target.value)}
              style={styleInput}
              type="text"
            />
          </div>
          <div style={styleDiv}>
            <label style={styleLabel}>Email</label>
            <Input
              id="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              style={styleInput}
              type="text"
            />
          </div>
          <div style={styleDiv}>
            <label style={styleLabel}>Số điện thoại</label>
            <Input
              type="text"
              id="sdt"
              value={sdt}
              onChange={(event) => setSdt(event.target.value)}
              style={styleInput}
            />
          </div>
          <div style={styleDiv}>
            <label style={styleLabel}>Công ty</label>
            <Input
              id="cty"
              value={cty}
              onChange={(event) => setCty(event.target.value)}
              style={styleInput}
              type="text"
            />
          </div>
        </>
      ) : (
        <>
          <HStack
            spacing={"16px"}
            justifyContent={"space-around"}
            width={"full"}
          >
            <div style={styleDiv}>
              <label style={styleLabel}>Họ tên</label>
              <Input
                id="name"
                value={name}
                onChange={(event) => setName(event.target.value)}
                style={styleInput}
                type="text"
              />
            </div>
            <div style={styleDiv}>
              <label style={styleLabel}>Email</label>
              <Input
                id="email"
                value={email}
                onChange={(event) => setEmail(event.target.value)}
                style={styleInput}
                type="text"
              />
            </div>
          </HStack>
          <HStack
            spacing={"16px"}
            justifyContent={"space-around"}
            width={"full"}
          >
            <div style={styleDiv}>
              <label style={styleLabel}>Số điện thoại</label>
              <Input
                type="text"
                id="sdt"
                value={sdt}
                onChange={(event) => setSdt(event.target.value)}
                style={styleInput}
              />
            </div>
            <div style={styleDiv}>
              <label style={styleLabel}>Công ty</label>
              <Input
                id="cty"
                value={cty}
                onChange={(event) => setCty(event.target.value)}
                style={styleInput}
                type="text"
              />
            </div>
          </HStack>
        </>
      )}

      <Box width={isMobile ? "100vw" : "full"} padding={"10px"}>
        <Textarea
          width={isMobile ? "80vw" : "90%"}
          id="message"
          value={message}
          onChange={(event) => setMessage(event.target.value)}
          placeholder="Lời nhắn"
        />
      </Box>
      <button type="submit" backgroundcolor="white" className="button">
        Gửi yêu cầu
      </button>
    </VStack>
  );
};

export default ContactForm;
