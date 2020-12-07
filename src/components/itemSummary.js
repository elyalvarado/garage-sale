import * as React from "react";
import styled from "styled-components";
import Img from "gatsby-image";

const Item = styled.li`
  background-color: white;
  display: flex;
  //border: 3px solid gray;
  border-radius: 10px;
  justify-content: space-between;
  margin: 40px 20px;
  min-width: 600px;
  flex: 1 1 0;
  box-shadow: 10px 10px 20px -5px rgba(115, 115, 115, 1);

  page-break-inside: avoid;
  &:nth-child(even) {
    page-break-after: always;
  }

  &:hover {
    background-color: #fffafa;
    box-shadow: 10px 10px 20px -5px rgb(138, 154, 187);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    min-width: 300px;
  }
`;

const ItemBody = styled.div`
  flex-grow: 2;
  padding: 40px 20px 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Name = styled.h1`
  margin: 0;
`;

const Description = styled.h4`
  margin: 0;
`;

const Details = styled.p`
  font-size: 0.7em;
  margin-top: 20px;
  color: darkgray;
  @media (max-width: 1460px) {
    font-size: 1em;
  }
  @media (max-width: 1024px) {
    font-size: 0.7em;
  }
  @media (max-width: 768px) {
    font-size: 0.7em;
  }
`;

const ItemText = styled.div`
  flex-grow: 2;
`;

const ItemBottom = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemPrice = styled.div`
  padding: 5px;
`;

const ItemPriceLabel = styled.h6`
  margin: 0;
`;
const ItemPriceValue = styled.h3`
  font-weight: bold;
  margin: 0;
`;
const ItemNotice = styled.small`
  padding-top: 5px;
  font-style: italic;
  color: darkslategray;
`;

const Thumbnail = styled.img`
  border-radius: 10px 0 0 10px;
  margin-bottom: 0;
  @media (max-width: 768px) {
    display: none;
  }
`;

const Banner = styled(Img)`
  border-radius: 10px 10px 0 0;
  margin-bottom: 0;
  @media (min-width: 768px) {
    display: none;
  }
`;

const Button = styled.a`
  background-color: #44c767;
  border-radius: 28px;
  border: 1px solid #18ab29;
  display: inline-block;
  cursor: pointer;
  color: #ffffff;
  font-size: 17px;
  padding: 16px 31px;
  text-decoration: none;
  text-shadow: 0 1px 0 #2f6627;

  &:hover {
    background-color: #5cbf2a;
    color: darkslategray;
  }

  &:active {
    position: relative;
    top: 1px;
  }

  @media print {
    display: none !important;
  }
`;

const Sold = styled.div`
  border-radius: 10px;
  border: 3px solid #ab1818;
  display: inline-block;
  color: #ab1818;
  font-size: 17px;
  font-weight: bold;
  padding: 16px 31px;
  text-decoration: none;
  text-transform: uppercase;
  transform: rotate(-20deg);
`;

const ItemSummary = ({
  name,
  description,
  details,
  price,
  sold,
  available,
  thumbnails,
  banners,
  lastDay,
}) => (
  <Item>
    {thumbnails.length > 0 && <Thumbnail src={thumbnails[0]} alt={name} />}
    {banners.length > 0 && <Banner fluid={banners[0]} alt={name} />}
    <ItemBody>
      <ItemText>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Details>{details}</Details>
      </ItemText>
      <ItemBottom>
        <ItemPrice>
          <ItemPriceLabel>Precio:</ItemPriceLabel>
          <ItemPriceValue>${price}</ItemPriceValue>
        </ItemPrice>
        {sold ? (
          <Sold>Vendido</Sold>
        ) : (
          <Button href="#contact">Consultar</Button>
        )}
      </ItemBottom>
      <ItemNotice>
        {available
          ? "Disponible Inmediatamente"
          : `Disponible a partir del ${lastDay}`}
      </ItemNotice>
    </ItemBody>
  </Item>
);

export default ItemSummary;
