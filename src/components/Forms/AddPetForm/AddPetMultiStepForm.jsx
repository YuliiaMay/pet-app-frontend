import { useSelector } from "react-redux";
import { selectCurrentStage } from "../../../redux/petsSlice/selectors";
import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import {
    AddPetContainer,
    FormNav,
    OptionStepTitle,
    OptionIndication,
    DataStepTitle,
    DataIndication,
    MoreInfoStepTitle,
    MoreInfoIndication
} from "./AddPetMultiStepForm.styled";
import FormTitle from "./FormTitle/FormTitle";




const AddPetMultiStepForm = () => {
    const formStage = useSelector(selectCurrentStage);
    console.log(formStage);


    return (
        <AddPetContainer>
            <FormTitle />

            <FormNav>
                <div>
                    <OptionStepTitle
                        to='option'
                        $formStage={formStage}
                    >
                            Choose  option
                            <OptionIndication
                                $formStage={formStage} />
                    </OptionStepTitle>
                </div>
                
                <div>
                    <DataStepTitle
                        to='details'
                        $formStage={formStage}
                    >
                            Personal details
                            <DataIndication
                                $formStage={formStage} />
                    </DataStepTitle>
                </div>
                
                <div>
                    <MoreInfoStepTitle
                        to='more-info'
                        $formStage={formStage}
                    >
                            More info
                            <MoreInfoIndication
                                $formStage={formStage} />
                    </MoreInfoStepTitle>
                </div>                  
            </FormNav>

            <Suspense fallback={<div>Loading...</div>}>
                <Outlet/>
            </Suspense>

        </AddPetContainer>
    );
}

export default AddPetMultiStepForm;