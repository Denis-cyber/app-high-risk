import { Routes, Route, Navigate } from "react-router-dom";
import { StartPage } from "pages/StartPage";
import { LayoutApp } from "components/LayoutApp";

export const App = () => (
  <Routes>
    <Route path='/' element={<LayoutApp />}>
      <Route index element={<StartPage />} />
    </Route>
    <Route path='*' element={<Navigate to='/' />} />
  </Routes>
);
