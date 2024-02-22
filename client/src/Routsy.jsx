import {BrowserRouter, Routes, Route} from "react-router-dom";

import EmployeeTable from "./EmployeeTable";
import App from "./App";


function Routsy() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<App />}></Route>
                <Route path='/view' element={<EmployeeTable />}></Route>
            </Routes>
        </BrowserRouter>
    );
}

export default Routsy;
