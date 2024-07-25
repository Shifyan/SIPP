import { Inter } from "next/font/google";
import "../globals.css";
import SideBar from "../components/sidebar";

const inter = Inter({ subsets: ["latin"] });

export default function UserLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="flex h-screen bg-gray-200">
          <SideBar></SideBar>
          {children}
        </div>
      </body>
    </html>
  );
}
