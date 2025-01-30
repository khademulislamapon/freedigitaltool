import { Helmet } from "react-helmet";
import Tools from "../../components/Tools/Tools";
import MainTools1 from "../../mainTools/MainTools1/MainTools1";
import Tool1Content from "../../ToolContent/Tool1Content/Tool1Content";

const PlagiarismChecker = () => {
    return (
        <div className="">

            <Helmet>
                <title>Plagiarism Checker - Free Digital Tool</title>
                <meta name="description" content="This is a description of my page." />
                <meta name="keywords" content="" />
            </Helmet>

            {/*  */}
            <MainTools1 />

            <div className="w-11/12 mx-auto">
                <div className="flex md:flex-row flex-col mt-8 gap-6">
                    <section className="md:w-3/4 w-full space-y-4">
                        <div>
                            <Tool1Content />
                        </div>
                        {/* Youtube Video */}
                        <div className="w-full h-[600px] my-8 p-6 bg-white ">
                            <iframe
                                width="100%"
                                height="100%"
                                src="https://www.youtube.com/embed/LXYjFsuVOoc?si=HpTuedkkk_K2POlK"
                                title="YouTube video player"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerPolicy="strict-origin-when-cross-origin"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </section>


                    <section className="md:w-1/4 w-full">
                        <Tools />
                    </section>
                </div>
            </div>
        </div>
    );
};

export default PlagiarismChecker;