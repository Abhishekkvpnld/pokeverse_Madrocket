import CardData from "../components/CardData";
import { fetchDataUrl } from "../api/Api";


const Card = async ({ data }) => {

    const res = await fetchDataUrl(data?.url)
    const details = res.data;

    return (
        <CardData data={data} details={details} />
    );
};

export default Card;