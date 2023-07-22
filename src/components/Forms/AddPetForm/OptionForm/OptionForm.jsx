import FormTitle from "../FormTitle/FormTitle";


const OptionForm = () => {
    return (
        <>
            <FormTitle />
            <div>
                <ul>
                    <li>
                        <button type="button">your pet</button>
                    </li>
                    <li>
                        <button type="button">sell</button>
                    </li>
                    <li>
                        <button type="button">lost/found</button>
                    </li>
                    <li>
                        <button type="button">in good hands</button>
                    </li>                    
                </ul>
            </div>
        </>
    );
};


export default OptionForm;