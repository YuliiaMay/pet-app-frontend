import { useState } from "react";
import { StyledForm, Label, Input} from "./DetailsForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { detailsForm, formStage } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { selectAllPetData, selectBirthday, selectBreed, selectCategory, selectName, selectTitle, selectType } from "../../../../redux/petsSlice/selectors";
import { Formik } from "formik";


const DetailsForm = () => {
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    const [secondStageData, setSecondStageData] = useState({
        name: useSelector(selectName) || "",
        birthday: useSelector(selectBirthday) || "",
        breed: useSelector(selectBreed) || "",
        title: useSelector(selectTitle) || "",
        type: useSelector(selectType) || ""
    });

    const initialDetailsFormStep = {
        name: secondStageData.name,
        birthday: secondStageData.birthday,
        breed: secondStageData.breed,
        title: secondStageData.title,
        type: secondStageData.type   
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
        // dispatch(
        //     detailsForm(initialDetailsFormStep)
        // )        
        dispatch(
            formStage(3)
        );
    }

    const all = useSelector(selectAllPetData)
    console.log(all);

    return (
        <Formik
            initialValues={initialDetailsFormStep}      
            onSubmit={onNextStep}            
        >
            <StyledForm>
                {
                    (category === "sell" || "lost" || "good hands") && 
                        <>
                            <Label htmlFor="title">
                                Title of add
                            </Label>
                            <Input
                                placeholder="Type title for adv"
                                type="text"
                                id="title"
                                name="title"
                                // onChange={handleChange}
                            />      
                        </>                        
                }

                
                <Label htmlFor="pet-name">
                    Pet’s name
                </Label>
                <Input
                    placeholder="Type name pet"
                    type="text"
                    id="pet-name"
                    name="name"
                    // onChange={handleChange}
                />
                
                <Label htmlFor="pet-birth">
                    Date of birth
                </Label> 
                <Input
                    // placeholder="Type date of birth"
                    type="date"
                    id="pet-birth"
                    name="birthday"
                    // onChange={handleChange}
                />
                
                <Label htmlFor="pet-type">
                    Type
                </Label>
                <Input
                    placeholder="Type of pet"
                    type="type"
                    id="pet-type"
                    name="type"
                    // onChange={handleChange}
                />

                <FormBtnNav onClick={onNextStep} />
            </StyledForm>
        </Formik>
    );
};


export default DetailsForm;