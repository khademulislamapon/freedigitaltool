import PopularTools from "../PopularTools/PopularTools";
import RelatedTools from "../RelatedTools/RelatedTools";

const Tools = () => {
    return (
        <div className="space-y-10">
            {/* PopularTools */}
            <PopularTools />
            {/* RelatedTools */}
            <RelatedTools />
        </div>
    );
};

export default Tools;