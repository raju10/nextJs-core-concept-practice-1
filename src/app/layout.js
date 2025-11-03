import { Geist, Geist_Mono, Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./component/Navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});
const poppins = Poppins({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
});
// export const metadata = {
//   title: "Learning Next Js",
//   description: "Trying to learn nextJs as best as we can",
// };
export const metadata = {
  title: {
    default: " Learning Next Js",
    template: '%s |  Learning Next Js"',
  },
  keywords: ["next.js", "React", "JavaScript", "Learning", "PlayGround"],
  description: "Trying to learn nextJs as best as we can",
};
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${poppins.className} antialiased`}>
        <Navbar></Navbar>
        {children}
      </body>
    </html>
  );
}
