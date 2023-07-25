import { useState } from "react";
import { OptionList, CategoryOption } from "./OptionForm.styled";
import { useSelector } from "react-redux";
import { selectCategory, selectCurrentStage, selectAllPetData } from "../../../../redux/petsSlice/selectors";


const OptionForm = () => {
    // const dispatch = useDispatch();

    const currentPage = useSelector(selectCurrentStage);
    const category = useSelector(selectCategory);
    const all = useSelector(selectAllPetData);
    console.log(all);

     // form values initial state
    const [categoryData, setCategoryData] = useState(category);
    
     // form values onClick
    const handleSelectCategory = ({target: value}) => {
        const selectedCategory = value;
        setCategoryData(selectedCategory);

    }

    return (
        <div>
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
        </div>
    );
};


export default OptionForm;