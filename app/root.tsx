import type { LinksFunction } from "react-router";
import TopBar from "./components/TopBar";
import PlayerBar from "./components/PlayerBar";


import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "react-router";
import appStyles from "./app.css?url";
import Sidebar from "./components/Sidebar";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: appStyles },
];

export default function Root() {
  return (
    <html lang="en">
      <head>
        <Meta />
        <Links />
      </head>

      <body>
        <div className="h-screen flex flex-col bg-black text-white">
          {/* Main App Area */}
          <div className="flex flex-1 overflow-hidden">
            {/* Sidebar */}
            <div className="hidden md:block">
              <Sidebar />
            </div>

            {/* Page Content */}
            <main className="flex-1 overflow-y-auto bg-neutral-950">
              <TopBar />
              <Outlet />
            </main>

          </div>

          {/* Player Bar */}
          <PlayerBar />

        </div>

        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}
