import StatusChain from "../Components/statusChain";
import { MainPageLayout } from "../Layouts/MainPageLayout/MainPageLayout";

export const MainPage = () => {
    return (
        <MainPageLayout children={<StatusChain />} />
    );
};