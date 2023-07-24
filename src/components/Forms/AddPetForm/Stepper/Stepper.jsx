import { NavLink } from "react-router-dom";


const Stepper = () => {
    return ( 
        <>
            <nav>
                <NavLink to="option">Choose  option</NavLink>
                <NavLink to="personal-details">Personal details</NavLink>
                <NavLink to="more-info">More info</NavLink>
            </nav>
        </>

    );
}
export default Stepper;