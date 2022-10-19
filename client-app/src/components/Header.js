import pigeon from '../assets/pigeon.ico'
import { AUTH_TOKEN } from '../constants';
import { Link, useNavigate } from 'react-router-dom';


export default function Header() {
    const navigate = useNavigate();
    const authToken = localStorage.getItem(AUTH_TOKEN);

    const style ={height:'2rem', width:'2rem'}
    return (
        <nav className='navbar bg-light mb-4 p-0'>
            <div className='container'>
                <a className='navbar-brand' href='/'>
                  <div className='d-flex'>
                    <img src={pigeon} style={style} alt='logo' className='mr-2' />
                    <div>set lists</div>
                  </div>
                </a>
                <div className="flex pa1 justify-between nowrap orange">
                <div className="flex flex-fixed black">
                {authToken ? (
                    <div
                      className="ml1 pointer black"
                      onClick={() => {
                        localStorage.removeItem(AUTH_TOKEN);
                        navigate(`/login`);
                      }}
                    >
                      logout
                    </div>
                  ) : (
                    <Link
                      to="/login"
                      className="ml1 no-underline black"
                    >
                      login
                    </Link>
                  )}
                      </div>
                    </div>
                  </div>
                </nav>
    )
}