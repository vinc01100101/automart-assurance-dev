import SectionHeader from "@/components/SectionHeader";
import SectionBody from "@/components/SectionBody";
import SectionFooter from "@/components/SectionFooter";
import Modals from "@/components/Modals";

//react
import {useEffect} from "react";

//redux
import {useDispatch} from "react-redux";

import {
    SET_BASE_URL,
    setDatesArray,
    fetchLocationsData,
    fetchBrandsData,
    fetchTransmissionsData,
    fetchFuelTypesData,
    fetchColorsData,
} from "@/redux/modals/creators";

export default function Home({baseUrl}) {
    const dispatch = useDispatch();

    useEffect(() => {
        SET_BASE_URL(baseUrl);
        //fetch redux states
        dispatch(setDatesArray());
        dispatch(fetchLocationsData());
        dispatch(fetchBrandsData());
        dispatch(fetchTransmissionsData());
        dispatch(fetchFuelTypesData());
        dispatch(fetchColorsData());
    }, []);

    return (
        <main style={{overflowX: "hidden"}}>
            <Modals />
            <SectionHeader />
            <SectionBody />
            {/* <SectionFooter /> */}
        </main>
    );
}

export async function getServerSideProps() {
    const baseUrl = process.env.SELLMYCAR_API_BASE_URL;

    return {props: {baseUrl}};
}
