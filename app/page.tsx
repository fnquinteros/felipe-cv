"use client";

import { CVHeader, SectionHeader } from "@/components";
import { Box, Card } from "@mui/material";
import Head from "next/head";
import React from "react";

export default function Home() {
  return (
    <Box
      sx={{
        paddingBlock: 8,
        bgcolor: "text.primary",
        minHeight: "100vh",
      }}
    >
      <Head>
        <title>Resume | Felipe Quinteros - Software Engineer</title>
        <meta
          name="description"
          content="Felipe Quinteros' Resume for a Software Engineer position. 3+ years of full stack development experience."
        />
      </Head>
      <Card
        sx={{
          minHeight: "100%",
          width: "80%",
          padding: 10,
          margin: "auto",
        }}
      >
        <CVHeader />
        <SectionHeader text="PROFESSIONAL EXPERIENCE" />
        <SectionHeader text="EDUCATION" />
        <SectionHeader text="ADDITIONAL INFORMATION" />
      </Card>
    </Box>
  );
}
