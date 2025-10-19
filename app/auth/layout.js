// app/auth/layout.js
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "Witness Auth",
  description: "Authentication pages for Witness Project",
};

export default function AuthLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>{children}</body>
      </html>
    </ClerkProvider>
  );
}
