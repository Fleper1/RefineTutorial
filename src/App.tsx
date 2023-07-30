import {
  Refine,
  GitHubBanner,
  WelcomePage,
  Authenticated,
  AuthPage,
  ErrorComponent,
} from "@refinedev/core";
import { RefineKbar, RefineKbarProvider } from "@refinedev/kbar";

import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import routerBindings, {
  NavigateToResource,
  CatchAllNavigate,
  UnsavedChangesNotifier,
  DocumentTitleHandler,
} from "@refinedev/react-router-v6";
import dataProvider from "@refinedev/simple-rest";
import { Layout } from "./components/layout";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <GitHubBanner />
      <RefineKbarProvider>
        <Refine
          routerProvider={routerBindings}
          dataProvider={dataProvider("https://api.fake-rest.refine.dev")}
          options={{
            syncWithLocation: true,
            warnWhenUnsavedChanges: true,
            projectId: "UxARWe-OXeKmD-t6LkBZ",
          }}
        >
          <Routes>
            <Route index element={<WelcomePage />} />
          </Routes>
          <RefineKbar />
          <UnsavedChangesNotifier />
          <DocumentTitleHandler />
        </Refine>
      </RefineKbarProvider>
    </BrowserRouter>
  );
}

export default App;
