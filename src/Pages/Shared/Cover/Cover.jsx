import { Parallax } from 'react-parallax';


const Cover = ({ img, title, description, btn }) => {
    return (
        <Parallax
            blur={{ min: -50, max: 50 }}
            bgImage={img}
            bgImageAlt="the"
            strength={-200}
            bgImageStyle={{height: 900}}
        >
            <div
                className="hero h-[600px]"
                
            >
                <div className="hero-overlay"></div>
                <div className="hero-content text-neutral-content text-center ">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">{title}</h1>
                        <p className="mb-5">
                            {description}
                        </p>
                        {
                            btn && <button className="btn btn-primary">{btn}</button>
                        }
                    </div>
                </div>
            </div>
        </Parallax>

    );
};

export default Cover;