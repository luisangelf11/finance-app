"use client"
import React from "react";
import DashboardPanel from "./components/DashboardPanel";
import TablesPanel from "./components/TablesPanel";

export default function Dashboard() {
  return (
    <div className="w-full">
      <DashboardPanel />
      <TablesPanel />
    </div>
  );
}
