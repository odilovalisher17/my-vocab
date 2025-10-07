import "./globals.css";

import { ThemeProvider } from "@/components/theme-provider";

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <div className="flex justify-center py-[10px]">
              <div className="h-[90%] w-[96%] md:w-[50%] lg:w-[40%]">
                {children}
              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
