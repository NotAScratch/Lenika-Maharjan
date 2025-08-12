"use client";
import { useState } from "react";
import LoadingScreen from "../components/LoadingScreen";
import VerticalNav from "../components/VerticalNav";

export default function ClientLayoutWrapper({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);
  return (
    <>
      {loading && <LoadingScreen onFinish={() => setLoading(false)} />}
      {!loading && (
        <>
          <VerticalNav />
          <div className="ml-20">{children}</div>
        </>
      )}
    </>
  );
}
