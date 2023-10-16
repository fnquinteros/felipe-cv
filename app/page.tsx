"use client";

import React from "react";
import { Box, Card } from "@mui/material";

import { CVHeader, SectionHeader } from "@/components";

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
