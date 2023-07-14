import GlobalHeroFilter from "../common/GlobalHeroFilter";

const HeroFilter = () => {
    return (
        <div className="home_content">
            <div className="home-text text-center">
                <h2 className="fz55">Encuentra la propiedad que buscas</h2>
                <p className="fz18 color-white">
                    Tenemos la selección de propiedades más grande de Costa Rica.
                </p>
            </div>
            {/* End .home-text */}

            <GlobalHeroFilter />
        </div>
    );
};

export default HeroFilter;
