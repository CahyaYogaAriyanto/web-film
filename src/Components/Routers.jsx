import { BrowserRouter as Router, Routes,Route } from "react-router-dom"
export default function Routers ({path,element}){
    return(
        <>
            <Router>
                <Routes>
                    <Route path={path} element={element}/>
                </Routes>
            </Router>
        </>
    )
};