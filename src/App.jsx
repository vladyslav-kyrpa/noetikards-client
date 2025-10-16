import { HashRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "./components/pages/HomePage";
import Layout from "./components/shared/Layout";

const LayoutWrapper = () => {
  return <Layout>
    <Outlet />
  </Layout>
}

export default function App() {
  return <HashRouter>
    <Routes>
      <Route element={<LayoutWrapper />}>
        <Route path="/" element={<HomePage />} />
      </Route>
    </Routes>
  </HashRouter>
}