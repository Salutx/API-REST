import * as C from "./styles";
import { useNavigate } from "react-router-dom";

export const TitleSection = ( { title, icon, navigateTo} ) => {
    
    const navigate = useNavigate();

    return (
        <C.TitleHeader>
            <C.Title>
                <i className={icon}></i>
                <p>{title}</p>
            </C.Title>

            <C.Link onClick={() => navigate(`/${navigateTo}`)}>
                <p>Ver Todas</p>
                <i className="ri-arrow-right-s-line"></i>
            </C.Link>    
        </C.TitleHeader>
    )
}

export default TitleSection;