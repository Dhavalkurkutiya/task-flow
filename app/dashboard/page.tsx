"use client";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import Dashboard from "./components/page";

export default function DashboardPage() {
  const { isAuthenticated } = useKindeBrowserClient();

  return isAuthenticated ? (
    <Dashboard />
  ) : (
    <div>
    <div className="min-h-screen flex items-center justify-center">
      <LoginLink  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-8 rounded transition-colors">
        Login
      </LoginLink>
    </div>
    </div>
  );
}
