import { DetailsFormWrapper } from "./PersonaleDetailsForm.styled";


const PersonaleDetailsForm = () => {
    return (
        <>

            <DetailsFormWrapper>
                <label htmlFor="pet-name">
                    Pet’s name
                </label>
                <input type="text" id="pet-name" />
                
                <label htmlFor="pet-birth">
                    Date of birth
                </label> 
                <input type="text" id="pet-birth" />
                
                <label htmlFor="pet-breed">
                    Breed
                </label>
                <input type="text" id="pet-breed"/>                
            </DetailsFormWrapper>
        </>
    );
};


export default PersonaleDetailsForm;