
const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mb-10">
            <p className="italic text-xl text-[#ffba19] font-medium mb-5">--- {subHeading} ---</p>
            <h3 className="text-3xl border-t-2 border-b-2 inline py-1 px-4 border-gray-400 uppercase">{heading}</h3>
        </div>
    );
};

export default SectionTitle;