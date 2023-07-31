import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "../../../../images/default-avatar.png";

import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { useState } from "react";
import { formStage, moreInfoForm } from "../../../../redux/petsSlice/petsSlice";
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
  // selectAllPetData
} from "../../../../redux/petsSlice/selectors";
import { addPetOrNotice } from "../../../../redux/petsSlice/operations";
import { useFormik } from "formik";
import { Input, Label, Comment } from "./MoreInfoForm.styled";
import { BsGenderFemale, BsGenderMale } from "react-icons/bs";


  // const initialMoreInfoValues = {
  //   sex: "",
  //   imgUrl: "",
  //   comments: "",
  //   location: "",
  //   price: "",
  // }


const MoreInfoForm = () => {
  //   const [formData, setFormData] = useState(new FormData());
  const [image, setImage] = useState(null);
  const [imageInfo, setImageInfo] = useState("");
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const name = useSelector(selectName);
  const birthday = useSelector(selectBirthday);
  const breed = useSelector(selectBreed);
  const title = useSelector(selectTitle);
  const type = useSelector(selectType);
  const sex = useSelector(selectSex);
  const imgUrl = useSelector(selectAvatarURL);
  const comments = useSelector(selectComments);
  const location = useSelector(selectLocation);  
  const price = useSelector(selectPrice);  
  // console.log(imageInfo);

  // const all = useSelector(selectAllPetData);
  



  const formik = useFormik({
    initialValues: {
      sex: "",
      imgUrl: "",
      comments: "",
      location: "",
      price: "",      
    },
    onSubmit: (values) => {
      dispatch(
        moreInfoForm(values)
      );
        
      const newData = {
        category: category,
        name: name,
        birthday: birthday,
        breed: breed,
        title: title,
        type: type,
        sex: sex,
        file: imageInfo,
        comments: comments,
        location: location,
        price: price
      };


      const formData = new FormData();
      formData.append("category", newData.category);
      formData.append("name", newData.name);
      formData.append("birthday", newData.birthday);
      formData.append("breed", newData.breed);
      formData.append("title", newData.title);
      formData.append("type", newData.type);
      formData.append("sex", newData.sex);
      formData.append("file", imageInfo);
      formData.append("comments", newData.comments);
      formData.append("location", newData.location);
      formData.append("price", newData.price);
        
        // for (let value in values) {
        //   if (value !== "imgUrl") {
        //     formData.append(value, values[value]);
        //   } else {
        //     formData.append(value, imageInfo);
        //   }
        // }
      
      // for (const [key, value] of formData.entries()) {
      //     console.log(`${key}: ${value}`);
      // }      

      dispatch(addPetOrNotice(formData));

      dispatch(formStage("success"));
      },
  })

  
  const handleGetFile = (e) => {
    let file = e.target.files[0];
    setImageInfo(file);

    const reader = new FileReader();
    reader.onloadend = () => {
      setImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    // <Formik
    //     initialValues={initialMoreInfoValues}      
    //     onSubmit={handleSubmit}       
    // >

      <form onSubmit={formik.handleSubmit} encType='multipart/form-data'>

        {/* {
          (category === "sell" || "lost" || "good hands") &&
            <>
              <div>
                <p>The Sex</p>
                <input
                  type="button"
                  // value={"Female"}            
                  id="pet-name"
                  name="female"
                  onChange={formik.handleChange}
                  // value={formik.values.female}
                >
                  <BsGenderMale color="#F43F5E"/>
                  Female
                </input>
                <input
                  type="button"
                  // value={"Male"}            
                  id="pet-name"
                  name="male"
                  onChange={formik.handleChange}
                  // value={formik.values.male}
                >
                  <BsGenderFemale color="#F43F5E"/>
                  Male
                </input>
              </div>     
            </>
        } */}



        <div>
          <Label htmlFor="imgUrl"></Label>
          <div>
            {
              !image && <img src={defaultAvatar} alt="pet`s photo" />
            }
          </div>
          <Input
            accept='image/*'
            type="file"
            name="imgUrl"
            id="imgUrl"
            onChange={(e) => handleGetFile(e)
              // formik.setFieldValue('imgUrl', e.currentTarget.files[0])
            }
          />
        </div>

        {
          (category === "sell" || "lost" || "good hands") &&
            <div>
              <Label htmlFor="location">
                  Location
              </Label>           
              <Input
                placeholder="Type of location"
                type="text"
                id="location"
                name="location"   
                onChange={formik.handleChange}
                value={formik.values.location}
              />
            </div>            
        }

        {
          category === "sell" &&
            <div>
              <Label htmlFor="price">
                  Price
              </Label>           
              <Input
                placeholder="Type of price"
                type="text"
                id="price"
                name="price" 
                onChange={formik.handleChange}
                value={formik.values.price}
              />          
            </div>
        }


        <div>
          <Label htmlFor="comment">Comments</Label>
          <Comment
            type="text"
            id="comment"
            placeholder="Type of pet"
            name="comments"
            onChange={formik.handleChange}
            value={formik.values.comments}
          />
        </div>
        <FormBtnNav
          // onClick={handleSubmit}
        />
      </form>
    // </Formik>
  );
};

export default MoreInfoForm;
