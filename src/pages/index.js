import * as React from "react";
import { graphql } from "gatsby";
import styled from "styled-components";

import Layout from "../components/layout";
import ItemsSummary from "../components/itemsSummary";
import Contact from "../components/contact";
import FAQ from "../components/faq";
import SEO from "../components/seo";

const PageTitle = styled.h1`
  margin-top: 0;
`;

const PageSubtitle = styled.h4`
  margin-top: 0;
`;

// markup
const IndexPage = ({ data }) => {
  const lastDay = data.infoJson.lastDay;

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

  const seoDescription = `${data.site.siteMetadata.description} -- ${items
    .filter((i) => i.highlighted)
    .map((i) => `${i.name} $${i.price}`)
    .join(", ")}`;

  return (
    <Layout>
      <SEO description={seoDescription} />
      <title>{data.site.siteMetadata.title}</title>
      <PageTitle>{data.site.siteMetadata.title}</PageTitle>
      <PageSubtitle>{data.site.siteMetadata.description}</PageSubtitle>
      <ItemsSummary items={items} lastDay={lastDay} />
      <Contact />
      <FAQ />
    </Layout>
  );
};

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
        description
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
          available
          highlighted
          images
        }
      }
    }
    infoJson {
      dates
      lastDay
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
