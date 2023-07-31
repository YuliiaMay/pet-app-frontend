import { OptionList, OptionInput } from "./OptionForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { formStage, optionForm } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { selectAllPetData, selectCategory } from "../../../../redux/petsSlice/selectors";


const OptionForm = () => {
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);

    // const all = useSelector(selectAllPetData);




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
            || category === "lost"
            || category === "good hands"
        ) {
            dispatch(
                formStage(2)
            );
        }
    }    

    // console.log(all);  

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
                        value={"lost"}
                        name="category-lost"
                    onClick={handleSelectCategory}     
                    />
                
                
                    <OptionInput
                        type="button"
                        value={"good hands"}
                        name="category-good-hands"
                        onClick={handleSelectCategory}
                    />

                                    
            </OptionList>
            <FormBtnNav
                onClick={onNextStep}
            />

        </div>
    )
};


export default OptionForm;