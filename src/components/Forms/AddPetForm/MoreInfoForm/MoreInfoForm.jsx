import defaultAvatar from "../../../../images/default-avatar.png"
import FormBtnNav from "../FormBtnNav/FormBtnNav";
import { useRef, useState } from "react";

const MoreInfoForm = () => {
    const inputRef = useRef(null);
    const [image, setImage] = useState(null);

    const handleUploadAvatar = () => {
        inputRef.current.click();
    };

    const handleImageChange = ({target}) => {
        const file = target.files[0];
        setImage(file);
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
                        onClick={handleImageChange}
                        style={{display: "none"}}
                    />
                    {
                        image
                            ? <img
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
                    ></textarea>
                </div>
                <FormBtnNav />
            </div>
        </>
        
    );
}

export default MoreInfoForm;