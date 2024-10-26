import type { Metadata } from "next";
import { Box, CssBaseline, ThemeProvider } from "@mui/material";
import { Header } from "@/components/shared";
import { darkTheme } from "@/theme/themes";

export const metadata: Metadata = {
  title: "Next Rock",
  description: "Next Rock App",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body>
        <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <Header />
          <Box component={'main'} minHeight={'90vh'}>
            { children }
          </Box>
        </ThemeProvider>
      </body>
    </html>
  );
}
