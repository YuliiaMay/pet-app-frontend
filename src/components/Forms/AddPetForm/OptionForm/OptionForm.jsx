import { useState } from "react";
import { OptionList, CategoryOption } from "./OptionForm.styled";



const OptionForm = () => {
    return (
        <div>
            <OptionList>
                <li>
                    <CategoryOption type="button">your pet</CategoryOption>
                </li>
                <li>
                    <CategoryOption type="button">sell</CategoryOption>
                </li>
                <li>
                    <CategoryOption type="button">lost/found</CategoryOption>
                </li>
                <li>
                    <CategoryOption type="button">in good hands</CategoryOption>
                </li>                    
            </OptionList>
        </div>
    );
};


export default OptionForm;