import React from "react";
import SectionHeader from "#components/section-header";
import { Box, Container, Grid, Heading, Text } from "@theme-ui/components";
import FeaturedCardColumn from "#components/featured-card-column";

import PatternBG from "../assets/patternBG.png";
import ArrowOdd from "../assets/arrowOdd.svg";
import ArrowEven from "../assets/arrowEven.svg";

const data = [
  {
    id: 1,
    title: "Set disbursement Instructions",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 2,
    title: "Assembly retrieves funds from your account",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 3,
    title: "Assembly initiates disbursement",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
  {
    id: 4,
    title: "Customer receives funds payment",
    text: "Get your blood tests delivered at home collect a sample from the your blood tests.",
  },
];

const WorkFlow = () => {
  return (
    <section sx={styles.workflow}>
      <Container>
        <SectionHeader
          slogan="Whats the function"
          title="Let's see how it works"
          isWhite={true}
        />
        <Grid sx={styles.grid}>
          {data.map((item) => (
            <Box key={item.id} sx={styles.card}>
              <Box sx={styles.iconBox}>{`0${item.id}`}</Box>
              <Box sx={styles.wrapper}>
                <Heading sx={styles.wrapper.title}>{item.title}</Heading>
                <Text sx={styles.wrapper.subTitle}>{item.text}</Text>
              </Box>
            </Box>
          ))}
        </Grid>
      </Container>
    </section>
  );
};

export default WorkFlow;

const styles = {
  workflow: {
    backgroundColor: "primary",
    py: [8, null, 9, null, null, 10],
    backgroundImage: `url(${PatternBG.src})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    position: "relative",
  },
  grid: {
    width: ["100%", "80%", "100%"],
    mx: "auto",
    gridGap: [
      "35px 0",
      null,
      "40px 40px",
      "50px 60px",
      "30px",
      "50px 40px",
      "55px 90px",
    ],
    gridTemplateColumns: [
      "repeat(1,1fr)",
      null,
      "repeat(2,1fr)",
      null,
      "repeat(4,1fr)",
    ],
  },
  card: {
    display: "flex",
		position: 'relative',
    alignItems: ["center", "flex-start"],
    flexDirection: "column",
    mb: -1,
    textAlign: ["center", null, "left"],
    px: [4, null, 0],
    mx: ["auto"],
    "&::before": {
      position: "absolute",
      content: '""',
      top: 0,
      left: [0, null, null, null, null, 72, null, 90],
      backgroundRepeat: "no-repeat",
      backgroundPosition: "center center",
      width: 215,
      height: 60,
      "@media screen and (max-width: 1220px)": {
        display: "none",
      },
    },
    "&:nth-of-type(2n-1)::before": {
      backgroundImage: `url(${ArrowOdd.src})`,
    },
    "&:nth-of-type(2n)::before": {
      backgroundImage: `url(${ArrowEven.src})`,
    },
    "&:last-child::before": {
      display: "none",
    },
  },
  iconBox: {
    width: ["50px", null, "60px", null, null, "70px"],
    height: ["50px", null, "60px", null, null, "70px"],
    borderRadius: [15, null, 23, null, null, 30],
    flexShrink: 0,
    backgroundColor: "white",
    display: "flex",
    mb: [5, null, null, null, null, 6],
    mx: ["auto", null, 0],
    alignItems: "center",
    fontSize: [6, null, 7, null, null, "30px"],
    fontWeight: 700,
    justifyContent: "center",
    color: "#234582",
  },
  wrapper: {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    title: {
      fontSize: 3,
      color: "heading_secondary",
      color: "white",
      lineHeight: 1.4,
      fontWeight: 700,
      mb: [2, null, 3],
    },
    subTitle: {
      fontSize: 1,
      color: "white",
      fontWeight: 400,
      opacity: 0.7,
      lineHeight: "1.9",
    },
  },
};
