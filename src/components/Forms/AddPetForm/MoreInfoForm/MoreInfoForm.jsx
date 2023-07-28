import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "../../../../images/default-avatar.png"

import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { useState } from "react";
import { formStage } from "../../../../redux/petsSlice/petsSlice";
import {
    selectAvatarURL,
    selectComments,
    selectLocation,
    selectPrice,
    selectSex,
    selectCategory,
    selectName,
    selectBirthday,
    selectBreed,
    selectTitle,
    selectType,
} from "../../../../redux/petsSlice/selectors";
import { addPet } from "../../../../redux/petsSlice/operations";
// import UploadImage from "../UploadImage/UploadImage";



const MoreInfoForm = () => {
    const [image, setImage] = useState(null);
    const [imageInfo, setImageInfo] = useState('');
    const dispatch = useDispatch();

    

    const [thirdStageData, setThirdStageData] = useState({
            category: useSelector(selectCategory) || "",
            name: useSelector(selectName) || "",
            birthday: useSelector(selectBirthday) || "",
            breed: useSelector(selectBreed) || "",
            title: useSelector(selectTitle) || "",
            type: useSelector(selectType) || "",
            sex: useSelector(selectSex) || "",
            avatar: useSelector(selectAvatarURL) || "",
            comments: useSelector(selectComments) || "",
            location: useSelector(selectLocation) || "",
            price: useSelector(selectPrice) || ""
    });


    const handleGetFile = (e) => {
        let file = e.target.files[0];
        setImageInfo(file);


        const reader = new FileReader();

        reader.onloadend = () => {
            setImage(reader.result)
        };
        reader.readAsDataURL(file);

        // setThirdStageData({
        //     ...thirdStageData,
        //     avatar: imageInfo
        // })        
    };


    const handleChange = ({ target }) => {
        const { name, value } = target;

        setThirdStageData({
            ...thirdStageData,
            [name]: value,
        })
    };


    const handleSubmit = (e) => {
        e.preventDefault();

        // const formData = new FormData();
        // formData.append('avatar', imageInfo)

        const newPetOrPost = {
            category: thirdStageData.category,
            name: thirdStageData.name,
            birthday: thirdStageData.birthday,
            breed: thirdStageData.breed,
            title: thirdStageData.title,
            type: thirdStageData.type,
            sex: thirdStageData.sex,
            avatar: imageInfo,
            comments: thirdStageData.comments,
            location: thirdStageData.location,
            price: thirdStageData.price
        };

        dispatch(addPet(newPetOrPost));

        dispatch(
            formStage("success")
        );

    }


    return ( 
        <>
            <div>

                <div>
                    <label htmlFor="upload"></label>
                    <div>
                        {
                            !image && <img src={defaultAvatar} alt="pet`s photo" />
                        }
                    </div>
                    <input
                        type="file"
                        name="upload"
                        id="upload"
                        onChange={(e) => handleGetFile(e)}
                    />
                </div>
                <div>
                    <label htmlFor="comment">Comments</label>
                    <textarea
                        type="text"
                        id="comment"
                        placeholder="Type of pet"
                        name="comments"
                        onChange={handleChange}
                    ></textarea>
                </div>
                <FormBtnNav
                    onClick={handleSubmit}
                />
            </div>
        </>
        
    );
}

export default MoreInfoForm;