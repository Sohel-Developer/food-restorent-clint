

const SectionTitle = ({ paragraphTitle, headingTitle }) => {
    return (
        <div className="text-center">
            <p className="text-xl text-[#D99904]">~~~~ {paragraphTitle} ~~~~</p>
            <progress className="progress progress-info sm:w-4/12" ></progress>
            <h3 className="text-4xl uppercase">{headingTitle}</h3>
            <progress className="progress progress-info sm:w-4/12 " ></progress>

        </div>
    );
};

export default SectionTitle;