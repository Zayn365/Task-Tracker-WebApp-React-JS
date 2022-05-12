import Button from "./Button"
import PropTypes from 'prop-types';
import {useLocation} from "react-router-dom";


const Header = ({title = 'Task Tracker', onAdd, showAdd}) => {
    const {pathname} = useLocation();

    const isValidRoute = pathname === '/';


    return (
        <header className={'header'}>
            <h1>{title}</h1>
            {
                isValidRoute
                    ? <Button color={showAdd ? "darkred" : "green"}
                              text={showAdd ? "Close" : "Add"}
                              onClick={onAdd}/>
                    : null
            }

        </header>
    )
}

Header.prototype = {
    title: PropTypes.string
}

export default Header
