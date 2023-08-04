import { OptionList, OptionInput } from "./OptionForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { formStage, optionForm } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { selectCategory } from "../../../../redux/petsSlice/selectors";


const OptionForm = ({ onLeavePage }) => {
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    

    const handleSelectCategory = ({ target: { value } }) => {
        const selectedCategory = value;

        dispatch(
            optionForm({
                category: selectedCategory,
            })
        ); 
    };

    const onNextStep = () => {
        // e.preventDefault();
        if (category === "your pet"
            || category === "sell"
            || category === "lost/found"
            || category === "in good hands"
        ) {
            dispatch(
                formStage(2)
            );
        }
    }

    return (
        <>
            <OptionList>              
                <OptionInput

                    type="button"
                    value={"your pet"}
                    name="your pet"
                    onClick={handleSelectCategory} 
                    $category={category}
                />
            
            
                <OptionInput
                    type="button"
                    value={"sell"}
                    name="sell"
                    // name="category"
                    onClick={handleSelectCategory}     
                    $category={category}
                />

            
                <OptionInput
                    type="button"
                    value={"lost/found"}
                    name="lost/found"
                    onClick={handleSelectCategory}   
                    $category={category}
                />
            
            
                <OptionInput
                    type="button"
                    value={"in good hands"}
                    name="in good hands"
                    onClick={handleSelectCategory}
                    $category={category}
                />


            </OptionList>
            <FormBtnNav
                onClick={onNextStep}
                onLeavePage={onLeavePage}
            /> 
        </>
    )
};


export default OptionForm;