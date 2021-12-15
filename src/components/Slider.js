import styled from "styled-components";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  position: relative;
`;

const Arrow = styled.div`
  width: 50px;
  height: 50px;
  background-color: #fff7f7;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  bottom: 0;
  left: ${(props) => props.direction === "left" && "10px"};
  right: ${(props) => props.direction === "right" && "10px"};
  cursor: pointer;
  margin: auto;
  opacity: 0.5;
`;

const Wrapper = styled.div`
  height: 100%;
`;

const Slide = styled.div`
  width: 100vw;
  height: 100vh;

  display: flex;
  align-items: center;
`;
const ImageContainer = styled.div`
  height: 100%;
  flex: 1;
`;
const Image = styled.img`
  height: 80%;
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 50px;
`;

const Title = styled.h1`
  font-size: 70px;
`;

const Desc = styled.p`
  margin: 50px 0px;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 3px;
`;
const Button = styled.button`
  padding: 10px;
  font-size: 20px;
  background-color: transparent;
  cursor: pointer;
`;

const Slider = () => {
  return (
    <Container>
      <Arrow direction="left">
        <ArrowLeftOutlined />
      </Arrow>
      <Wrapper>
        <Slide>
          <ImageContainer>
            <Image src="https://images.pexels.com/photos/6311650/pexels-photo-6311650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"></Image>
          </ImageContainer>
          <InfoContainer>
            <Title>XMAS SALE</Title>
            <Desc>GET 30% OFF BEFORE 31 DEC 2021</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer></ImageContainer>
          <InfoContainer>
            <Title>XMAS SALE</Title>
            <Desc>GET 30% OFF BEFORE 31 DEC 2021</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
        <Slide>
          <ImageContainer></ImageContainer>
          <InfoContainer>
            <Title>XMAS SALE</Title>
            <Desc>GET 30% OFF BEFORE 31 DEC 2021</Desc>
            <Button>SHOP NOW</Button>
          </InfoContainer>
        </Slide>
      </Wrapper>
      <Arrow direction="right">
        <ArrowRightOutlined />
      </Arrow>
    </Container>
  );
};

export default Slider;
