
import { useSelector } from "react-redux";
import { selectCurrentStage } from "../../../../redux/petsSlice/selectors";
import {
    Bar,
    OptionStep,
    OptionStepTitle,
    OptionIndication,
    DetailsStep,
    DetailsStepTitle,
    DetailsIndication,
    MoreInfoStep,
    MoreInfoStepTitle,
    MoreInfoIndication
} from "./ProgressBar.styled";


const ProgressBar = () => {
    const formStage = useSelector(selectCurrentStage);
    
    return ( 
        <Bar>
            <OptionStep>
                <OptionStepTitle $formStage={formStage}>
                    Choose  option
                </OptionStepTitle>
                <OptionIndication $formStage={formStage} />
            </OptionStep>
            
            <DetailsStep>
                <DetailsStepTitle
                    $formStage={formStage}
                >
                        Personal details
                        <DetailsIndication
                            $formStage={formStage} />
                </DetailsStepTitle>
            </DetailsStep>
            
            <MoreInfoStep>
                <MoreInfoStepTitle $formStage={formStage}>
                    More info
                </MoreInfoStepTitle>
                <MoreInfoIndication $formStage={formStage} />
            </MoreInfoStep>                  
        </Bar>

    );
}
export default ProgressBar;