"use client";

import { Box, Container, ThemeProvider } from "@mui/material";
import { ReactNode } from "react";
import theme from "@/styles/theme";

interface PageViewProps {
  children: ReactNode;
}

export default function PageView({ children }: PageViewProps) {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          minHeight: "100vh",
          marginBottom: "100px",
          bgcolor: "background.default",
        }}
      >
        <Container
          maxWidth="xl"
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            justifyContent: 'center',
            alignItems: 'center',
            py: 1,
          }}
        >
          {children}
        </Container>
      </Box>
    </ThemeProvider>
  );
}
