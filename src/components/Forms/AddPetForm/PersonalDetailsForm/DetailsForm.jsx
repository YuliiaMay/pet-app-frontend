import { useState } from "react";
import { Form } from "./DetailsForm.styled";
import { useDispatch } from "react-redux";
import { detailsForm, formStage } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";


const DetailsForm = () => {
    const dispatch = useDispatch();
    const [detailsData, setDetailsData] = useState({
        name: "",
        birthday: "",
        breed: "",
        title: "",
        type: ""
    });


    const handleChange = ({ target }) => {
        const { name, value } = target;
        setDetailsData({
            ...detailsData,
            [name]: value
        })
    };


    const onNextStep = (e) => {
        e.preventDefault();
        dispatch(
            detailsForm({
                name: detailsData.name,
                birthday: detailsData.birthday,
                breed: detailsData.breed,
                title: "",
                type: ""                
            })
        )
        dispatch(
            formStage(3)
        );

    }


    return (
        <>
            <Form>
                <label htmlFor="pet-name">
                    Pet’s name
                </label>
                <input
                    type="text"
                    id="pet-name"
                    name="name"
                    onChange={handleChange}
                />
                
                <label htmlFor="pet-birth">
                    Date of birth
                </label> 
                <input
                    type="date"
                    id="pet-birth"
                    name="birthday"
                    onChange={handleChange}
                />
                
                <label htmlFor="pet-breed">
                    Breed
                </label>
                <input
                    type="text"
                    id="pet-breed"
                    name="breed"
                    onChange={handleChange}
                /> 

                <FormBtnNav onClick={onNextStep} />
            </Form>
        </>
    );
};


export default DetailsForm;