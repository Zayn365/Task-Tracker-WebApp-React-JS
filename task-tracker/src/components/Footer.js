import {Link, useLocation} from "react-router-dom";

const Footer = () => {
    const {pathname} = useLocation();

    const isValidRoute = pathname === '/';

    return(
      <footer className={'footer'}>
          <p>Copyright &copy; 2022</p>
          {isValidRoute
              ? <Link to='/about'>About Us</Link>
              : null
          }

      </footer>
  )
}

export default Footer
