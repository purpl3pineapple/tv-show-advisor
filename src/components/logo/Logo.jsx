import logoStyle from "./style.module.css";

export const Logo = ({title, subtitle, img}) => {

    return (
        <>
            <div className={logoStyle.container}>
                <img src={img} alt="Logo" className={logoStyle.img}/>
                <div className={logoStyle.title}>
                    {title}
                </div>
            </div>
            <div className={logoStyle.subtitle}>
                {subtitle}
            </div>
        </>
    );
}