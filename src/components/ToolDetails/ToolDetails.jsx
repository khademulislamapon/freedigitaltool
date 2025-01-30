import Tools from "../Tools/Tools";
import ToolSection from "../ToolSection/ToolSection";
import MainContent from "../MainContent/MainContent";

const ToolDetails = () => {
    {/* XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX */ }

    return (
        <div className="">
            <ToolSection />
            <div className="w-11/12 mx-auto">
                <div className="flex md:flex-row flex-col mt-8 gap-6">
                    <section className="md:w-3/4 w-full space-y-4">
                        <div>
                            <MainContent />
                        </div>
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

export default ToolDetails;