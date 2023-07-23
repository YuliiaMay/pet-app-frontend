import FormTitle from "../FormTitle/FormTitle";


const PersonaleDetailsForm = () => {
    return (
        <>
            <FormTitle />
            <div>
                <label htmlFor="pet-name">
                    Pet’s name
                    <input type="text" id="pet-name"/>
                </label>
                <label htmlFor="pet-birth">
                    Date of birth
                    <input type="text" id="pet-birth"/>
                </label>      
                <label htmlFor="pet-breed">
                    Breed
                    <input type="text" id="pet-breed"/>
                </label>                
            </div>
        </>
    );
};


export default PersonaleDetailsForm;