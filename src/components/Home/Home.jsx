import { Link, } from "react-router-dom";
import Tools from "../Tools/Tools";
import Tool1 from "../../toolCategory/Tool1/Tool1";
import { Helmet } from "react-helmet";

const Home = () => {

    return (
        <>
            <Helmet>
                <title>Home - Free Digital Tool</title>
                <meta name="description" content="This is a description of my page." />
                <meta name="keywords" content="" />
            </Helmet>

            <div className="w-11/12 mx-auto mt-8">
                <h2 className="text-center text-2xl font-bold text-[#212530]">Small SEO Tools</h2>

                <div className="flex md:flex-row flex-col mt-8 gap-6">
                    <section className="md:w-3/4 w-full bg-white p-6 max-h-fit space-y-24">
                        <div>
                            <div className="text-center">
                                <h3 className="pb-2 text-xl font-bold text-[#212530]">Text Analysis Tools</h3>
                                <p className="md:w-4/6 w-full mx-auto text-sm font-normal text-black">A complete set of text tools is now at your fingertips. Check plagiarism, rewrite an article, run a spell checker, count words or change text case.</p>
                            </div>
                            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-6">
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
                            <div className="flex justify-center items-center">
                                <Link to="/text-analysis-tools" className=" px-4 py-2 bg-gray-100 text-black rounded-md hover:bg-gray-200 transition-all duration-300">Show All</Link>
                            </div>
                        </div>

                        <div>
                            <div className="text-center">
                                <h3 className="pb-2 text-xl font-bold text-[#212530]">Text Analysis Tools</h3>
                                <p className="md:w-4/6 w-full mx-auto text-sm font-normal text-black">A complete set of text tools is now at your fingertips. Check plagiarism, rewrite an article, run a spell checker, count words or change text case.</p>
                            </div>
                            <section className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 my-6">
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
                            <div className="flex justify-center items-center">
                                <Link to="/text-analysis-tools" className=" px-4 py-2 bg-gray-100 text-black rounded-md hover:bg-gray-200 transition-all duration-300">Show All</Link>
                            </div>
                        </div>
                    </section>

                    <section className="md:w-1/4 w-full">
                        <Tools />
                    </section>
                </div>
            </div>
        </>
    );
};

export default Home;
