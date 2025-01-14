import { useParams } from "react-router";
import useFetch from "../customHooks/useFetch";
import Loading from "../components/partials/Loading";
import Error from "../components/partials/Error";
import { item } from "../state/userSlice";
import "../pages/styles/ItemDetails.css";
import { convertToStandardTime } from "../helperFunctions/helperFunctions";

const ItemDetails = () => {
  const { id } = useParams();
  const { data, isPending, error } = useFetch(`items/${id}`);

  const itemData = data as item;

  return (
    <>
      {itemData && (
        <div className="item-details">
          <div className="item-container">
            <h5>{itemData.name}</h5>
            <div className="image-container">
              <img src={itemData.imageUrl} alt={itemData.name} />
            </div>
            <p>Uploaded on {convertToStandardTime(itemData.createdAt)}</p>
          </div>
        </div>
      )}
      {isPending && <Loading />}
      {error && <Error message={error} />}
    </>
  );
};

export default ItemDetails;
