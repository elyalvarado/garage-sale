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

const ItemsSummary = ({ items, lastDay }) => (
  <ItemsList>
    {items
      .sort((a, b) => {
        if (a.sold === b.sold) {
          return 0;
        }
        return a.sold ? 1 : -1;
      })
      .map((item) => (
        <ItemSummary key={item.name} {...item} lastDay={lastDay} />
      ))}
  </ItemsList>
);

export default ItemsSummary;
