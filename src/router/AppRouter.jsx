import { Route, Routes } from "react-router-dom"
import { CountriesPage, HomePage, UsersPage } from "../pages"

export const AppRouter = () => {
  return (

    <Routes>
        <Route path="/*" element={ <HomePage /> } />
        <Route path="countries/*" element={ <CountriesPage /> } />
        <Route path="users/*" element={ <UsersPage /> } />
    </Routes>
)
}
