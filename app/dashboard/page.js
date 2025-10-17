import { currentUser } from "@clerk/nextjs/server";

export default async function DashboardPage() {
  const user = await currentUser();

  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      <h1>Welcome, {user?.firstName || "Witness"}!</h1>
      <p>You are successfully signed in with Clerk.</p>
    </div>
  );
}
