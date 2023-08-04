
import { StyledForm, Label, Input} from "./DetailsForm.styled";
import { useDispatch, useSelector } from "react-redux";
import { detailsForm, formStage } from "../../../../redux/petsSlice/petsSlice";
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { selectBirthday, selectCategory, selectName, selectTitle, selectType } from "../../../../redux/petsSlice/selectors";
import { useFormik } from "formik";


const DetailsForm = () => {
    const dispatch = useDispatch();
    const category = useSelector(selectCategory);
    const currentDay = new Date().toISOString().slice(0, 10);



    const formik = useFormik({
        initialValues: {
            name: useSelector(selectName) || "",
            birthday: useSelector(selectBirthday) || "",
            title: useSelector(selectTitle) || "",
            type: useSelector(selectType) || ""
        },
        onSubmit: values => {
            dispatch(
                detailsForm(values)
            )

            dispatch(
                formStage(3)
            );
        }
    });


    return (
        <StyledForm onSubmit={formik.handleSubmit} encType='multipart/form-data'>
                {
                    (category === "sell" || category === "lost/found" || category === "in good hands")  && 
                        <>
                            <Label htmlFor="title">
                                Title of add
                            </Label>
                            <Input
                                placeholder="Type title for adv"
                                type="text"
                                id="title"
                                name="title"
                                onChange={formik.handleChange}
                                value={formik.values.title} 
                                required
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
                    onChange={formik.handleChange}
                    value={formik.values.name}  
                    required
                />
                
                <Label htmlFor="pet-birth">
                    Date of birth
                </Label> 
                <Input
                    type="date"
                    max={currentDay}
                    id="pet-birth"
                    name="birthday"
                    onChange={formik.handleChange}
                    value={formik.values.birthday} 
                    required
                />
                
                <Label htmlFor="pet-type">
                    Type
                </Label>
                <Input
                    placeholder="Type of pet"
                    type="type"
                    id="pet-type"
                    name="type"
                    onChange={formik.handleChange}
                    value={formik.values.type}  
                    required
                />

                <FormBtnNav />
        </StyledForm>
    );
};

export default DetailsForm;
