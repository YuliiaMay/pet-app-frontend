// import defaultAvatar from "../../../../images/default-avatar.png"

const UploadImage = () => {



    return (
        <div>
            <label htmlFor="upload"></label>
            <div>
                {
                    // !image && <img src={defaultAvatar} alt="pet`s photo" />
                }
            </div>
            <input
                type="file"
                name="upload"
                id="upload"
                // onClick={(e) => onClick(e.target.files)}
                // onClick={(e) => onChange(e.target.files)}   
                
            />
        </div>
    );
}

export default UploadImage;