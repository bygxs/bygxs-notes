"use client";
import { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function SignOutPage() {
  const router = useRouter();

  useEffect(() => {
    const handleSignOut = async () => {
      try {
        await signOut(auth); // Sign the user out
        router.push("/"); // Redirect to homepage after sign-out
      } catch (error) {
        console.error("Error signing out:", error);
        // Optionally, handle error and display a message to the user
      }
    };

    handleSignOut();
  }, [router]);

  return (
    <div className="min-h-screen flex justify-center items-center bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <p className="text-lg">Signing you out...</p>
    </div>
  );
}
