import { useDispatch, useSelector } from "react-redux";
import defaultAvatar from "../../../../images/default-avatar.png";

import FormBtnNav, { useTimeout } from "../FormBtnNav/FormBtnNav";
import { useState } from "react";
import { formStage, moreInfoForm } from "../../../../redux/petsSlice/petsSlice";
import {
  selectSex,
  selectCategory,
} from "../../../../redux/petsSlice/selectors";
import { addPetOrNotice } from "../../../../redux/petsSlice/operations";
import { useFormik } from "formik";
import { Icon } from "../../../Icon/Icon";
import {
  StageWrapper,
  Form,
  RightColumnContainer,
  LeftColumnContainer,
  Input,
  Label,
  UploadInput,
  ImageWrapper,
  CommentContainer,  
  Comment,
  TheSexTitle,
  TheSexBtnContainer,
  TheSexBtn,
  BtnSexText
} from "./MoreInfoForm.styled";




const MoreInfoForm = () => {
  const [image, setImage] = useState(null);
  const [imageInfo, setImageInfo] = useState("");
  const dispatch = useDispatch();
  const category = useSelector(selectCategory);
  const sex = useSelector(selectSex);


  const formik = useFormik({
    initialValues: {
      // sex: "",
      imgUrl: "",
      comments: "",
      location: "",
      price: "",      
    },
    onSubmit: (values) => {
      dispatch(
        moreInfoForm(values)
      );

      const formData = new FormData();
      // formData.append("category", newData.category);
      // formData.append("name", newData.name);
      // formData.append("birthday", newData.birthday);
      // formData.append("breed", newData.breed);
      // formData.append("title", newData.title);
      // formData.append("type", newData.type);
      // formData.append("sex", newData.sex);
      // formData.append("file", imageInfo);
      // formData.append("comments", newData.comments);
      // formData.append("location", newData.location);
      // formData.append("price", newData.price);
        
      for (let value in values) {
        if (value !== "imgUrl" && value !== "sell") {
          formData.append(value, values[value]);
        } else if (value === "imgUrl") {
          formData.append(value, imageInfo);
        }
      }
      
      formData.append("sex", sex);
      
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


  const handleSwitchChange = ({target: {value}}) => {
    if (value === "Male") {
      dispatch(
          moreInfoForm({
            ...MoreInfoForm,
            sex: "male"
          })
      );
      return;
    }  

    if (value === "Female") {
      dispatch(
          moreInfoForm({
            ...MoreInfoForm,
            sex: "female"
          })
      );
      return;
    }     
  };



  return (
    // <Formik
    //     initialValues={initialMoreInfoValues}      
    //     onSubmit={handleSubmit}       
    // >

    <StageWrapper>
      <Form onSubmit={formik.handleSubmit} encType='multipart/form-data'>
        <LeftColumnContainer>
          {
            (category === "sell" || "lost/found" || "in good hands") &&
              <>
                <TheSexTitle>The Sex</TheSexTitle>
                <TheSexBtnContainer>
                  <TheSexBtn
                    type="button"
                    value={"Female"}           
                    name="sex-female"
                    onClick={handleSwitchChange}>
                      <Icon
                          iconName={"icon-female"}
                          width={"24px"}
                          height={"24px"}
                          stroke={"#F43F5E"}
                      /> 
                      <BtnSexText>
                        Female
                      </BtnSexText>
                  </TheSexBtn>
            
                  <TheSexBtn
                    type="button"
                    value={"Male"}           
                    name="sex-male"
                    onClick={handleSwitchChange}>
                      <Icon
                          iconName={"icon-male"}
                          width={"24px"}
                          height={"24px"}
                          stroke={"#54ADFF"}
                      />                    
                      <BtnSexText>
                        Male
                      </BtnSexText>
                  </TheSexBtn>            
                </TheSexBtnContainer>

              </>
          }


          <Label htmlFor="imgUrl">
            Load the pet’s image:
              <ImageWrapper>
                {
                  !image
                    ? <img src={defaultAvatar} alt="default avatar photo" />
                    : <div><img src={image} alt="pet`s photo" /></div>
                }
              </ImageWrapper>
              <UploadInput
                accept='image/*'
                type="file"
                name="imgUrl"
                id="imgUrl"
                onChange={(e) => handleGetFile(e)}
              />
          </Label>        

        </LeftColumnContainer>

        <RightColumnContainer>
          {
            (category === "sell" || "lost/found" || "in good hands") &&
              <>
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
              </>            
          }

          {
            category === "sell" &&
              <>
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
              </>
          }


          <CommentContainer>
            <Label htmlFor="comment">Comments</Label>
            <Comment
              type="text"
              id="comment"
              placeholder="Type of pet"
              name="comments"
              onChange={formik.handleChange}
              value={formik.values.comments}
            />
          </CommentContainer>

        </RightColumnContainer>

      </Form>
      <FormBtnNav/>
    </StageWrapper>

    // </Formik>
  );
};

export default MoreInfoForm;
