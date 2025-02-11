import { Link } from "react-router-dom";

const Tool1 = () => {
    return (
        <>
            <Link to="/plagiarism-checker" className="py-4 px-6 flex items-center border border-gray-300 rounded-md hover:shadow-lg transition-all duration-200">
                <div className="w-10 h-10 mr-4">
                    <img src="https://i.ibb.co/mBD7tTT/76975674557.png" alt="" />
                </div>
                <h4>Plagiarism Checker</h4>
            </Link>



            {/* <Link to="/plagiarism-checker" className="flex mb-6 flex-col items-center group">
                <div className="w-16 h-16 p-2.5 flex justify-center items-center bg-white rounded-md shadow-md group-hover:shadow-none border-2 border-white group-hover:border-blue-500 group-hover:bg-blue-50 transition-all duration-300">
                    <img src="https://i.ibb.co.com/mBD7tTT/76975674557.png" alt="" />
                </div>
                <h4 className="mt-3 text-center">Plagiarism Checker</h4>
            </Link> */}
        </>
    );
};

export default Tool1;
