import { Outlet } from "react-router-dom";
import Nav from "../Nav";

const Main = () => {
    return (
        <div>
            <Outlet>
                <Nav></Nav>
            </Outlet>
        </div>
    );
};

export default Main;