import FormTitle from "../FormTitle/FormTitle";
import defaultAvatar from "../../../../images/default-avatar.png"


const MoreInfoForm = ({stage}) => {
    return ( 
        <>
            <FormTitle />
            <div>
                <p>Load the pet’s image:</p>
                <div>
                    <img src={defaultAvatar} alt="default avatar" />
                </div>
                
                <label htmlFor="comment">Comments</label>
                <textarea
                    type="text"
                    id="comment"
                    placeholder="Type of pet"
                ></textarea>
            </div>
        </>
        
    );
}

export default MoreInfoForm;