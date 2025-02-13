"use client";
import { useAuth } from "@/context/AuthContext";
import { signOut } from "firebase/auth";
import { auth } from "@/lib/firebase";
import { useRouter } from "next/navigation";

export default function Settings() {
  const { user } = useAuth();
  const router = useRouter();

  const handleSignOut = async () => {
    try {
      await signOut(auth);
      router.push("/"); // Redirect to homepage after sign-out
    } catch (error) {
      console.error("Error signing out:", error);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-white">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Settings</h1>
        <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl font-semibold mb-4">User Information</h2>
          <p className="text-lg mb-4">Email: {user?.email}</p>
          <p className="text-lg mb-4">Username: {user?.displayName || "N/A"}</p>

          {/* Sign Out Button */}
          <button
            onClick={handleSignOut}
            className="bg-pink-900 hover:bg-pink-600 text-white font-bold py-2 px-4 rounded mt-4"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
}
