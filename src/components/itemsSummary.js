import * as React from "react";
import styled from "styled-components";

import ItemSummary from "./itemSummary";

const ItemsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  margin: 8px -4px 1rem;
  padding: 0;
  list-style: none;
`;

const ItemsSummary = ({ items }) => (
  <ItemsList>
    {items.map((item) => (
      <ItemSummary {...item} />
    ))}
  </ItemsList>
);

export default ItemsSummary;