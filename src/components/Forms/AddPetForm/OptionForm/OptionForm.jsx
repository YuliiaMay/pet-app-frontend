import { OptionList, OptionInput } from "./OptionForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { formStage, optionForm } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { selectCategory } from "../../../../redux/petsSlice/selectors";
import { Formik, Form } from 'formik';
import { useState } from "react";


const OptionForm = () => {
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    const [isSelected, setIsSelected] = useState(false);


    const initialOptionFormStep = {
        category: category
    }

    const handleSelectCategory = ({ target: { value } }) => {
        const selectedCategory = value;

        dispatch(
            optionForm({
                category: selectedCategory,
            })
        ); 
        
        setIsSelected(true);
    };

    const onNextStep = () => {
        if (category === "your pet"
            || category === "sell"
            || category === "lost"
            || category === "good hands"
        ) {
            dispatch(
                formStage(2)
            );
        }
    }    

    return (
        <Formik
            initialValues={initialOptionFormStep}      
            onSubmit={onNextStep}
        >
            <Form>

                <OptionList>
                    
                        <OptionInput
                            as="button"
                            value={"your pet"}
                            onClick={handleSelectCategory}
                        >
                            your pet
                        </OptionInput>
                    
                    
                        <OptionInput
                            as="button"
                            value={"sell"}
                            onClick={handleSelectCategory}                        
                        >
                            sell
                        </OptionInput>
                    
                    
                        <OptionInput
                            as="button"
                            value={"lost"}
                            onClick={handleSelectCategory}                        
                        >
                            lost/found
                        </OptionInput>
                    
                    
                        <OptionInput
                            as="button"
                            value={"good hands"}
                            onClick={handleSelectCategory}                        
                        >
                            in good hands
                        </OptionInput>
                                        
                </OptionList>
                <FormBtnNav
                    onClick={onNextStep}
                    isSelected={isSelected}
                />

            </Form>
        </Formik>
    );
};


export default OptionForm;