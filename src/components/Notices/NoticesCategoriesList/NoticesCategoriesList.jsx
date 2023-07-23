import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectNotieces } from "../../../redux/selectors";
import { fetchNotices } from "../../../redux/noticesSlice/operations";


const NoticesCategoriesList = () => {
  const notieces = useSelector(selectNotieces);
  const dispatch = useDispatch();
  console.log(notieces);


  useEffect(() => {
    dispatch(fetchNotices())
  }, [dispatch])
  return (
    <>
      <div>gallery</div>
    </>
  );
};

export default NoticesCategoriesList;
