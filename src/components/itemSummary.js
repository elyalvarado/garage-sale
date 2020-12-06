import * as React from "react";
import styled from "styled-components";

const Item = styled.li`
  background-color: white;
  display: flex;
  //border: 3px solid gray;
  border-radius: 10px;
  justify-content: space-between;
  margin: 40px 20px;
  min-width: 640px;
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
`;

const ItemBody = styled.div`
  flex-grow: 2;
  padding: 40px 20px;
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

const Thumbnail = styled.img`
  border-radius: 10px 0 0 10px;
  margin-bottom: 0;
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

const ItemSummary = ({
  name,
  description,
  details,
  price,
  sold,
  thumbnails,
}) => (
  <Item>
    {thumbnails.length > 0 && <Thumbnail src={thumbnails[0]} alt={name} />}
    <ItemBody>
      <div>
        <Name>{name}</Name>
        <Description>{description}</Description>
        <Details>{details}</Details>
      </div>
      <ItemBottom>
        <ItemPrice>
          <ItemPriceLabel>Precio:</ItemPriceLabel>
          <ItemPriceValue>${price}</ItemPriceValue>
        </ItemPrice>
        <Button href="#contact">Consultar</Button>
      </ItemBottom>
    </ItemBody>
  </Item>
);

export default ItemSummary;
