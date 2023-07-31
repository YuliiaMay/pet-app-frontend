import { useState } from "react";
import { StyledForm, Label, Input} from "./DetailsForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { detailsForm, formStage } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { selectAllPetData, selectBirthday, selectBreed, selectCategory, selectName, selectTitle, selectType } from "../../../../redux/petsSlice/selectors";
import { Formik, Form, useFormik } from "formik";


const initialDetailsValues = {
    name: "",
    birthday: "",
    title: "",
    type: ""  
};



const DetailsForm = () => {
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    // const name = useSelector(selectName);
    // const birthday = useSelector(selectBirthday);
    // const title = useSelector(selectTitle);
    // const type = useSelector(selectType);    


    // const formik = useFormik({
    //     initialDetailsValues: {
    //         name: useSelector(selectName) || "",
    //         birthday: useSelector(selectBirthday) || "",
    //         title: useSelector(selectTitle) || "",
    //         type: useSelector(selectType) || ""  
    //     },    
    //     onNextStep: values => {
    //         dispatch(
    //             detailsForm(values)
    //         )        
    //         dispatch(
    //             formStage(3)
    //         );            
    //     }
    // })


    const onNextStep = (values, _) => {
        dispatch(
            detailsForm(values)
        )        
        dispatch(
            formStage(3)
        );
    }

    const all = useSelector(selectAllPetData)
    console.log(all);


    return (
        <Formik
            initialValues={initialDetailsValues}      
            onSubmit={onNextStep}            
        >
        <Form
            // onSubmit={formik.onNextStep}
        >
                {
                    (category === "sell" || category === "lost" || category === "good hands")  && 
                        <>
                            <Label htmlFor="title">
                                Title of add
                            </Label>
                            <Input
                                placeholder="Type title for adv"
                                type="text"
                                id="title"
                                name="title"
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
                />
                
                <Label htmlFor="pet-birth">
                    Date of birth
                </Label> 
                <Input
                    // placeholder="Type date of birth"
                    type="date"
                    id="pet-birth"
                    name="birthday"
                />
                
                <Label htmlFor="pet-type">
                    Type
                </Label>
                <Input
                    placeholder="Type of pet"
                    type="type"
                    id="pet-type"
                    name="type"
                />

                <FormBtnNav />
            </Form>
        </Formik>
    );
};


export default DetailsForm;