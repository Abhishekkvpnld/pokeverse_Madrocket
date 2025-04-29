import { useEffect, useState } from "react";
import CardData from "../components/CardData";
import { fetchDataUrl } from "../api/Api";
import LoadingComponents from "./LoadingComponent";

const Card = ({ data, selectedType }) => {
    const [details, setDetails] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getDetails = async () => {
            if (data?.url) {
                try {
                    const { data: fetchedData } = await fetchDataUrl(data?.url);
                    setDetails(fetchedData);
                } catch (error) {
                    console.error("Error fetching details:", error);
                } finally {
                    setLoading(false);
                }
            }
        };

        getDetails();
    }, [data]);

    if (loading) {
        return (<LoadingComponents />);
    }

    if (!details) {
        return (
            <div className="w-full h-[250px] flex items-center justify-center bg-white rounded-xl shadow-md">
                <p className="text-red-400">Failed to load card</p>
            </div>
        );
    }

    const hasType = selectedType
        ? details?.types?.some((t) => t.type.name === selectedType)
        : true;

    if (!hasType) return null;

    return <CardData data={data} details={details} />;
};

export default Card;
