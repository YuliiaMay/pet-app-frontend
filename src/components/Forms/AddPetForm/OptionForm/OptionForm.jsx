import { useEffect, useState } from "react";
import { OptionList, CategoryOption } from "./OptionForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { selectCategory, selectAllPetData } from "../../../../redux/petsSlice/selectors";
import { formStage, optionForm } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";


const OptionForm = ({stage}) => {
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    // const all = useSelector(selectAllPetData);
    const [isSubmitted, setIsSubmitted] = useState(false);

     // form values initial state
    const [formData, setFormData] = useState({
        category: category || ""
    });
    
     // form values onClick
    const handleSelectCategory = ({ target: { value } }) => {
        const selectedCategory = value;

        setFormData({
            ...formData,
            category: selectedCategory,
        });
    };

    const handleClick = (e) => {
        e.preventDefault();
        setIsSubmitted(true);
    };


    useEffect(() => {
        if (isSubmitted) {
            dispatch(
                formStage(2)
            );
            dispatch(
                optionForm({
                    category: formData.category,
                }))
        }
    }, [formData, isSubmitted, dispatch]);

    console.log(isSubmitted);

    return (
        <form onClick={handleClick}>
            <OptionList>
                <li>
                    <CategoryOption
                        type="button"
                        value={"pet"}
                        onClick={handleSelectCategory}
                    >your pet</CategoryOption>
                </li>
                <li>
                    <CategoryOption
                        type="button"
                        value={"sell"}
                        onClick={handleSelectCategory}                        
                    >sell</CategoryOption>
                </li>
                <li>
                    <CategoryOption
                        type="button"
                        value={"lost-found"}
                        onClick={handleSelectCategory}                        
                    >lost/found</CategoryOption>
                </li>
                <li>
                    <CategoryOption
                        type="button"
                        value={"in-good-hands"}
                        onClick={handleSelectCategory}                        
                    >in good hands</CategoryOption>
                </li>                    
            </OptionList>
        </form>
    );
};


export default OptionForm;