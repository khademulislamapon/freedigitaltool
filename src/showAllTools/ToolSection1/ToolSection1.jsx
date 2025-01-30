import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
import Tool1 from "../../toolCategory/Tool1/Tool1";
import ToolCategory1Content from "../../ToolCategoryContent/ToolCategory1Content/ToolCategory1Content";

const ToolSection1 = () => {

    return (
        <>
            <Helmet>
                <title>Text Analysis Tools - Free Digital Tool</title>
                <meta name="description" content="This is a description of my page." />
                <meta name="keywords" content="" />
            </Helmet>

            <section className="py-6 w-11/12 mx-auto">
                <div className="text-center">
                    <h3 className="pb-2 text-xl font-bold text-[#212530]">Text Analysis Tools</h3>
                    <p className="md:w-4/6 w-full mx-auto text-sm font-normal text-black">A complete set of text tools is now at your fingertips. Check plagiarism, rewrite an article, run a spell checker, count words or change text case.</p>
                </div>

                <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 my-6">
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                    <Tool1 />
                </section>

                <div className="text-center mt-6">
                    <Link
                        to="/"
                        className="px-4 py-2 bg-gray-500 text-white rounded-md hover:bg-gray-600 transition-all duration-300"
                    >
                        Go Back
                    </Link>
                </div>

                <div className="mt-4">
                    <ToolCategory1Content />
                </div>
            </section>
        </>
    );
};

export default ToolSection1;
