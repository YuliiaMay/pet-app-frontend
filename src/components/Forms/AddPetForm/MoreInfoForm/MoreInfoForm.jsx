import FormTitle from "../FormTitle/FormTitle";
import defaultAvatar from "../../../../images/default-avatar.png"


const MoreInfoForm = () => {
    return ( 
        <>
            <FormTitle />
            <div>
                <p>Load the pet’s image:</p>
                <div>
                    <img src={defaultAvatar} alt="default avatar" />
                </div>
                <label htmlFor="comment">
                    <textarea
                        type="text" id="comment">
                    </textarea>
                </label>
            </div>
        </>
        
    );
}
export default MoreInfoForm;