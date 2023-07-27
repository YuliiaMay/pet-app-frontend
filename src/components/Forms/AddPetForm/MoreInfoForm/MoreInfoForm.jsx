import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "../../../../images/default-avatar.png"

import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { useRef, useState } from "react";
import { formStage, moreInfoForm } from "../../../../redux/petsSlice/petsSlice";
import {
    selectAvatarURL,
    selectComment,
    selectLocation,
    selectPrice,
    selectSex,
    selectCategory,
    selectName,
    selectBirthday,
    selectBreed,
    selectTitle,
    selectType
} from "../../../../redux/petsSlice/selectors";
import { addPet } from "../../../../redux/petsSlice/operations";


const MoreInfoForm = () => {
    const dispatch = useDispatch();
    const inputRef = useRef(null);
    const [image, setImage] = useState(null);
    const [thirdStageData, setThirdStageData] = useState({
            category: useSelector(selectCategory) || "",
            name: useSelector(selectName) || "",
            birthday: useSelector(selectBirthday) || "",
            breed: useSelector(selectBreed) || "",
            title: useSelector(selectTitle) || "",
            type: useSelector(selectType) || "",
            sex: useSelector(selectSex) || "",
            imgUrl: useSelector(selectAvatarURL) || "",
            text: useSelector(selectComment) || "",
            location: useSelector(selectLocation) || "",
            price: useSelector(selectPrice) || ""
    });

    const handleChange = ({target}) => {
        const { name, value } = target;


        setThirdStageData({
            ...thirdStageData,
            [name]: value
        })
    }

    const handleUploadAvatar = () => {
        inputRef.current.click();
    };

    const handleImageChange = ({ target }) => {
        const file = target.files[0];
        setImage(file);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            moreInfoForm({
                sex: thirdStageData.sex,
                imgUrl: thirdStageData.imgUrl,
                text: thirdStageData.text,
                location: thirdStageData.location,
                price: thirdStageData.price               
            })
        )
        dispatch(
            formStage("success")
        );

        const newPetOrPost = {
            category: thirdStageData.category,
            name: thirdStageData.name,
            birthday: thirdStageData.birthday,
            breed: thirdStageData.breed,
            title: thirdStageData.title,
            type: thirdStageData.type,
            sex: thirdStageData.sex,
            imgUrl: thirdStageData.imgUrl,
            text: thirdStageData.text,
            location: thirdStageData.location,
            price: thirdStageData.price             
        }

        console.log(newPetOrPost);

        dispatch(addPet(newPetOrPost));
    }


    return ( 
        <>
            <div>
                <div onClick={handleUploadAvatar}>
                    <label htmlFor="pet-avatar">Load the pet’s image:</label>
                    <input
                        id="pet-avatar"
                        type="file"
                        ref={inputRef}
                        name="imgUrl"
                        onClick={handleImageChange}
                        onChange={handleChange}
                        style={{display: "none"}}
                    />
                    {
                        image
                            ? <img
                                id="image"
                                src={URL.createObjectURL(image)}
                                alt="pet`s photo"
                                style={{ width: 182, height: 182}}/>
                            : <img
                                src={defaultAvatar}
                                alt="pet`s photo" />
                    }
                    
                </div>

                <div>
                    <label htmlFor="comment">Comments</label>
                    <textarea
                        type="text"
                        id="comment"
                        placeholder="Type of pet"
                        name="text"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <FormBtnNav onClick={handleSubmit} />
            </div>
        </>
        
    );
}

export default MoreInfoForm;