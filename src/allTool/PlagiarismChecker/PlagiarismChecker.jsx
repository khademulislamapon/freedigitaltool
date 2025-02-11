import { Helmet } from "react-helmet";
import Tools from "../../components/Tools/Tools";
import { useState } from "react";

const PlagiarismChecker = () => {
    const [keyword, setKeyword] = useState('');
    const [generatedTitle, setGeneratedTitle] = useState('');

    const titleTemplates = [
        'How to Master {keyword} in Just 10 Steps!',
        '{keyword} Explained: Everything You Need to Know',
        'Top 5 Tips for Better {keyword}',
        'Learn {keyword} Like a Pro: Ultimate Guide',
        'Boost Your Skills with These {keyword} Strategies',
        'The Ultimate {keyword} Tutorial for Beginners',
        'Master {keyword} Fast: Tips and Tricks',
        'Why {keyword} Is Important and How to Use It Effectively',
        'Secrets to Success in {keyword}: Don\'t Miss Out!',
        'Everything About {keyword} You Wish You Knew Sooner',
    ];

    const generateTitle = (keyword) => {
        if (!keyword) {
            return 'Please enter a keyword to generate a title.';
        }
        const randomTemplate = titleTemplates[Math.floor(Math.random() * titleTemplates.length)];
        return randomTemplate.replace('{keyword}', keyword);
    };

    const handleGenerate = () => {
        setGeneratedTitle(generateTitle(keyword));
    };

    return (
        <div className="">

            <Helmet>
                <title>Plagiarism Checker - Free Digital Tool</title>
                <meta name="description" content="This is a description of my page." />
                <meta name="keywords" content="" />
            </Helmet>

            {/* tool code */}
            <div className="flex items-center justify-center">
                <div className="text-center my-28">
                    <h1 className="text-2xl font-bold text-gray-800">YouTube Title Generator</h1>
                    <input
                        id="keyword"
                        placeholder="Enter your keyword"
                        value={keyword}
                        onChange={(e) => setKeyword(e.target.value)}
                        className="w-4/5 p-2 mt-4 border border-gray-300 rounded"
                    />
                    <button
                        onClick={handleGenerate}
                        className="mt-4 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-800"
                    >
                        Generate Title
                    </button>
                    <div id="titleOutput" className="mt-5 text-lg font-semibold text-gray-700">
                        {generatedTitle}
                    </div>
                </div>
            </div>

            <div className="w-11/12 mx-auto">
                <div className="flex md:flex-row flex-col mt-8 gap-6">
                    <section className="md:w-3/4 w-full space-y-4">
                        {/* Tool Content */}
                        <div className="bg-white p-6 space-y-4">
                            <p>Tool1Content To use this plagiarism checker, please copy and paste your text in the box above, then click on the big blue button that says “Check Plagiarism” then sit back and watch as your article is scanned for duplicate content.</p>

                            <div>
                                <h3 className="space-y-2">Benefits of SmallSEOTools’ Plagiarism Detector</h3>
                                <p>The plagiarism checker free utility offered on SmallSEOTools’ is second to none due to the advantages it provides to its users. From students to teachers, researchers, writers, publishers, and bloggers, everyone can gain the top benefits of SmallSEOTools’ plagiarism detector, which include the following:</p>
                            </div>
                            <div>
                                <h3 className="space-y-2">Quick and Hassle-Free</h3>
                                <p>The plagiarism checker online tool available on this platform is a super-fast utility that generates results within a matter of seconds. For using this plagiarism detector, the users won’t have to follow any convoluted procedure. The user-friendly interface of this facility makes the process to check plagiarism free from all kinds of intricacies.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">Multi-Platform Supportive</h3>
                                <p>Our plagiarism detector is a web-based tool that can be accessed through any kind of device. You won’t have to install a plugin or software for checking duplication with this plagiarism checker online utility. Whether you have an Android, iOS, Windows, Linux, or Mac device, you can easily access our online plagiarism remover and figure out the instances of plagiarism in a couple of clicks. All you need to check plagiarism online on SmallSEOTools is to connect your device with a stable internet connection.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">Free Plagiarism Checker</h3>
                                <p>There are no costs involved with the usage of SmallSEOTools’ plagiarism checker. The users aren’t asked to pay a single penny for the consumption of this online duplicate check service. No matter how many pieces of text you need to check for plagiarism, you can use this plagiarism detector as many times as you desire without facing any restriction or paying any charges.</p>
                            </div>

                            <div>
                                <h2 className="space-y-2">FEATURES OF OUR PLAGIARISM CHECKER</h2>
                                <p>A list of key features:</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">1. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">2. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">3. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">4. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">5. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">6. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">7. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>
                            <div>
                                <h3 className="space-y-2">8. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>
                            <div>
                                <h3 className="space-y-2">9. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>
                            <div>
                                <h3 className="space-y-2">10. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>
                            <div>
                                <h3 className="space-y-2">11. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>
                            <div>
                                <h3 className="space-y-2">12. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">13. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">14. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">15. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">16. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">17. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">2. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">3. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">4. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">5. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h3 className="space-y-2">6. Billions of web pages</h3>
                                <p>This tool has the ability to check plagiarism by matching your content against billions of webpages on the Internet. Once you upload your content, it will automatically run it against every existing content on the web within seconds, making it the most sophisticated yet fastest plagiarism scanner you'll ever come across in your lifetime.</p>
                            </div>

                            <div>
                                <h2 className="space-y-2">Importance of Plagiarism detection</h2>
                                <p>
                                    Whether you know it or not, plagiarism does affect you in some way. It doesn't matter whether you're the content creator or the one who consumes the content, plagiarism affects us all.
                                    <br />
                                    As a content creator (writer, author, researcher, student, freelancer, blogger, social media manager, etc. It's no news that you should be regularly checking to be sure that nobody is copying your content without your permission or giving you credit.
                                    <br />
                                    But much more than that, you also have to always run your content on a plagiarism detection tool before publishing or submitting it to be sure that your work does not contain plagiarism.
                                    <br />
                                    Why? Because plagiarism is an act of academic dishonesty, a breach of journalistic ethics, and above all, a publishing crime.
                                    <br />
                                    As such, you don't want to fall victim. If your work contains plagiarized content, whether intentionally or by ignorance, you stand to face serious penalties including:
                                    <br />
                                    <ul className="list-disc ml-10">
                                        <li>Legal actions</li>
                                        <li>Monetary restitution and fines</li>
                                        <li>Damaged reputation</li>
                                    </ul>
                                    <br />
                                    This is not to mention other consequences like SEO content duplication penalties and lowered rankings, lost trust, possible academic sanctions, and more.
                                    <br />
                                    Now, on the other end of the spectrum, as a content consumer or user (reader, professor or teacher who vets students' work, client of freelance writers, etc.), it is equally important to check for plagiarism before accepting or taking action on any content you come across or submitted to you.
                                    <br />
                                    And that is why we created the Plagiarism Checker by Small SEO Tools.
                                    <br />
                                    This tool is carefully designed to help you easily and quickly detect plagiarism in any digital text-based content.
                                    <br />
                                    It is used and trusted by millions of people all around the world and can easily boast of being the single most sophisticated, feature-rich, user-friendly content checker online.
                                    <br />
                                    Yet, we decided to make it 100% free.
                                </p>
                            </div>
                            <div>
                                <h2 className="space-y-2">YOUR TURN!</h2>
                                <p>
                                    Would you like to see all these features for yourself? Start using the tool right now. It is 100% FREE.

                                    This premium-level online tool is extremely easy to use, reliable and provides amazingly accurate results. It is useful for checking plagiarism irrespective of whether your content is an academic work, blog post, ebook, news article, term paper, landing page content, website page content, social media content, email newsletter, and so on.

                                    Built by our dedicated in-house team of highly talented developers, the Plagiarism Checker delivers results super fast. In fact, you can expect results in as little as 0.83 second for 1,000 words per search.

                                    We respect user privacy, and hence do not save your content in our system. Once the tool is done running the plagiarism check on your content, it automatically deletes it from our system immediately.

                                    Go to the Plagiarism Checker page to learn more about the tool and also learn how to use it.
                                </p>
                            </div>
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