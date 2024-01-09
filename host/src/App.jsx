import React, { Suspense, lazy } from "react";
import ErrorBoundary from "./ErrorBoundary";
import SidebarSkeleton from "./components/SidebarSkeleton";

import "./App.css";

const Sidebar = lazy(() => import("remoteA/remoteA"));
const Main = lazy(() => import("remoteB/remoteB"));
const RemoteC = lazy(() => import("remoteC/remoteC"));

export default function () {
  return (
    <div className="w-full min-h-screen flex">
      <div className="min-w-[280px] max-w-[280px] w-[280px] sticky top-0 z-20 h-screen flex flex-auto shrink-0 flex-col overflow-hidden shadow-5">
        <div className="flex h-full flex-auto flex-col overflow-hidden bg-[#111827] text-white">
          <Suspense fallback={<SidebarSkeleton />}>
            <ErrorBoundary name="Sidebar">
              <Sidebar />
            </ErrorBoundary>
          </Suspense>
        </div>
      </div>
      <main className="relative z-10 flex min-h-full min-w-0 flex-auto flex-col">
        <Suspense fallback={<div>Loading...</div>}>
          <ErrorBoundary name="Main">
            <Main />
          </ErrorBoundary>
        </Suspense>
        <footer>
          <Suspense fallback={<div>Loading...</div>}>
            <ErrorBoundary name="Footer">
              <RemoteC />
            </ErrorBoundary>
          </Suspense>
        </footer>
      </main>
    </div>
  );
}
