'use client';
import { SignIn } from '@clerk/nextjs';

export default function SignInPage() {
  return (
    <div style={{minHeight:'100vh', display:'flex', alignItems:'center', justifyContent:'center'}}>
      {/* routing="path" + path="/sign-in" lets Clerk handle /sign-in and /sign-in/sso-callback */}
      <SignIn routing="path" path="/sign-in" />
    </div>
  );
}
