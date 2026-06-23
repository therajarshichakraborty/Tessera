import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";
import { type Metadata } from "next";
// import Kbar from "@/app/mail/components/kbar";
import { TRPCReactProvider } from "../trpc/React";
// import { ThemeProvider } from "@/components/theme-provicer";
import { Toaster } from "sonner";

export const metadata = {
  title: "MailMode - AI Powered Email Client",
  description:
    "MailMode is an AI-powered email client that helps you manage your emails more efficiently.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable} `}>
        <body suppressHydrationWarning className="">
          {/* <ThemeProvider attribute='class' defaultTheme='system' enableSystem disableTransitionOnChange>
            <TRPCReactProvider> */}
          {/* <Kbar> */}
          {children}
          {/* </Kbar> */}
          {/* </TRPCReactProvider> */}
          {/* <Toaster />  */}
          {/* </ThemeProvider> */}
        </body>
      </html>
    </ClerkProvider>
  );
}
