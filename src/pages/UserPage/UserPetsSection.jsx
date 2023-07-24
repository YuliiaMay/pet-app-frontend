// eslint-disable-next-line no-unused-vars
import { useDispatch, useSelector } from "react-redux";
// import { ReactComponent as Delete } from "../../svg/userPage/delete.svg";

export const UserPetsSection = () => {
    // const user = useSelector(user);
    const dispatch = useDispatch();
    const pets = [
      {
        id: 1,
        img: "https://cdn.pixabay.com/photo/2014/11/30/14/11/cat-551554_640.jpg",
        name: "gggggggg",
        dateofbirth: "gggggggggg",
        comments: "gggggggggggggg",
      },
    ];

    const deleteClickHandler = (e) => {
        // eslint-disable-next-line no-undef
        dispatch(deletePetFromFavorite(e.target.id))
    }
    return (
        <div>
            {pets.map(pet => {
                return (
                    <div key={pet.id}>
                        <button type='button' onClick={deleteClickHandler}>
                            <Delete />
                        </button>
                        <div>
                            <img src={pet.img} alt='' />
                            <div>
                                <p>{pet.name}</p>
                                <p>{pet.dateofbirth}</p>
                                <p>{pet.comments}</p>
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    )
}