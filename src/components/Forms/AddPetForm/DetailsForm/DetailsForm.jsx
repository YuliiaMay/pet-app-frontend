import { useState } from "react";
import { Form } from "./DetailsForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { detailsForm, formStage } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { selectBirthday, selectBreed, selectName, selectTitle, selectType } from "../../../../redux/petsSlice/selectors";


const DetailsForm = () => {
    const dispatch = useDispatch();
    const [secondStageData, setSecondStageData] = useState({
        name: useSelector(selectName) || "",
        birthday: useSelector(selectBirthday) || "",
        breed: useSelector(selectBreed) || "",
        title: useSelector(selectTitle) || "",
        type: useSelector(selectType) || ""
    });


    const handleChange = ({ target }) => {
        const { name, value } = target;
        
        setSecondStageData({
            ...secondStageData,
            [name]: value
        })
    };


    const onNextStep = (e) => {
        e.preventDefault();
        dispatch(
            detailsForm({
                name: secondStageData.name,
                birthday: secondStageData.birthday,
                breed: secondStageData.breed,
                title: secondStageData.title,
                type: secondStageData.type                
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
                
                <label htmlFor="pet-type">
                    Type
                </label>
                <input
                    type="text"
                    id="pet-type"
                    name="type"
                    onChange={handleChange}
                /> 

                <FormBtnNav onClick={onNextStep} />
            </Form>
        </>
    );
};


export default DetailsForm;