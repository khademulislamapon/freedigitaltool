import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import AboutUs from "../components/AboutUs/AboutUs";
import ContactUs from "../components/ContactUs/ContactUs";
import PrivacyPolicy from "../components/PrivacyPolicy/PrivacyPolicy";
import PlagiarismChecker from "../allTool/PlagiarismChecker/PlagiarismChecker";
import TermsAndConditions from "../components/TermsAndConditions/TermsAndConditions";
import Disclaimer from "../components/Disclaimer/Disclaimer";
import CookiesPolicy from "../components/CookiesPolicy/CookiesPolicy";
import DMCA from "../components/DMCA/DMCA";
import ToolSection1 from "../showAllTools/ToolSection1/ToolSection1";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/plagiarism-checker",
                element: <PlagiarismChecker />
            },
            {
                path: "/text-analysis-tools",
                element: <ToolSection1 />
            },
            {
                path: "/about-us",
                element: <AboutUs />
            },
            {
                path: "/contact-us",
                element: <ContactUs />
            },
            {
                path: "/privacy-policy",
                element: <PrivacyPolicy />
            },
            {
                path: "/terms-and-conditions",
                element: <TermsAndConditions />
            },
            {
                path: "/disclaimer",
                element: <Disclaimer />
            },
            {
                path: "/cookies-policy",
                element: <CookiesPolicy />
            },
            {
                path: "/dmca-generator",
                element: <DMCA />
            },
        ]
    },
]);

export default router;