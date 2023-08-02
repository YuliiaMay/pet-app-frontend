import { OptionList, OptionInput } from "./OptionForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { formStage, optionForm } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { selectCategory } from "../../../../redux/petsSlice/selectors";


const OptionForm = ({leaveAddPetForm}) => {
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
        <div>

            <OptionList>
                
                    <OptionInput
                        type="button"
                        value={"your pet"}
                        name="category-your-pet"
                        onClick={handleSelectCategory}                   
                    />
                
                
                    <OptionInput
                        type="button"
                        value={"sell"}
                        name="category-sell"
                        // name="category"
                    onClick={handleSelectCategory}     
                    />

                
                    <OptionInput
                        type="button"
                        value={"lost/found"}
                        name="category-lost"
                    onClick={handleSelectCategory}     
                    />
                
                
                    <OptionInput
                        type="button"
                        value={"in good hands"}
                        name="category-good-hands"
                        onClick={handleSelectCategory}
                    />

                                    
            </OptionList>
            <FormBtnNav
                onClick={onNextStep}
                leaveAddPetForm={leaveAddPetForm}
            />

        </div>
    )
};


export default OptionForm;