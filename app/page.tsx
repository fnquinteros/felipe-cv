"use client";

import React from "react";
import type { Metadata } from "next";
import { Box, Card } from "@mui/material";

import { CVHeader, SectionHeader } from "@/components";

export const metadata: Metadata = {
  title: "Resume | Felipe Quinteros - Software Engineer",
  description:
    "Felipe Quinteros' Resume for a Software Engineer position. 3+ years of full stack development experience.",
};

export default function Home() {
  return (
    <Box
      sx={{
        paddingBlock: 8,
        bgcolor: "text.primary",
        minHeight: "100vh",
      }}
    >
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
