import "./globals.css";
import "bootstrap-material-design/dist/css/bootstrap-material-design.min.css";
import TopNav from "@/components/nav/TopNav";
import { Toaster } from "react-hot-toast";
import { NextAuthProvider } from "@/components/NextAuthProvider";
import { CategoryProvider } from "@/context/category";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <NextAuthProvider>
          <CategoryProvider>
            <TopNav />
            <Toaster />
            {children}
          </CategoryProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
