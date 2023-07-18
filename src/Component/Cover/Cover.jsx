

const Cover = ({ image, heading, subHeading }) => {
    return (
        <div className="hero md:h-[700px] bg-cover" style={{ backgroundImage: `url(${image})` }}>
            <div className="hero-overlay bg-opacity-60"></div>
            <div className="hero-content w-full text-center text-neutral-content">
                <div style={{ backgroundColor: `rgba(21, 21, 21, 0.60)` }} className="sm:w-10/12 rounded-lg py-20 px-10 ">
                    <h1 className="mb-5 text-5xl font-bold">{heading}</h1>
                    <p className="mb-5 text-xl">{subHeading}</p>
                </div>
            </div>
        </div >
    );
};

export default Cover;