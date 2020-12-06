import * as React from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";
import ItemsSummary from "../components/itemsSummary";

// markup
const IndexPage = ({ data }) => {
  const items = data.allItemsJson.edges.map((i) => ({
    ...i.node,
    thumbnails: [],
  }));
  const thumbnails = data.thumbnailImages.edges.map((t) => ({
    ...t.node.resize,
  }));

  // Add the thumbnails to the items
  thumbnails.forEach((t) => {
    const fileName = t.src.split("/").slice(-1)[0];
    const itemsWithFileName = items.filter((i) => i.images?.includes(fileName));
    itemsWithFileName.forEach((i) => {
      i.thumbnails = i.thumbnails ? [...i.thumbnails, t.src] : [t.src];
    });
  });

  return (
    <Layout>
      <title>{data.site.siteMetadata.title}</title>
      <h1>{data.site.siteMetadata.title}</h1>
      <ItemsSummary items={items} />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allItemsJson {
      edges {
        node {
          id
          name
          description
          details
          price
          sold
          images
        }
      }
    }
    thumbnailImages: allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 300, height: 300) {
              src
            }
          }
        }
      }
    }
  }
`;

export default IndexPage;
