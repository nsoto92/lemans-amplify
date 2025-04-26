"use client";

import { signOut } from "aws-amplify/auth";
import { useRouter } from "next/navigation";

export default function Logout() {
  const router = useRouter();
  const logout = async () => {
    await signOut()
    router.push("/login");
  }

  return logout;
}