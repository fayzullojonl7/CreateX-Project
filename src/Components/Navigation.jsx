import { HomeIcon } from '@heroicons/react/24/solid';
import { Link, useLocation } from 'react-router-dom';
// import HomeIcon from '@heroicons/react/solid/HomeIcon'; // или ваш путь к иконке

function Navigation() {
    const location = useLocation();

    // Разбиваем путь, чтобы динамически формировать навигацию
    const path = location.pathname.split('/').filter(Boolean);

    return (
        <div className="flex items-center space-x-2">
            {/* Если мы на главной странице */}
            <Link to="/" className="text-white">
                <HomeIcon className="w-6 h-6 inline-block mr-2" />
                Home
            </Link>

            {/* Если мы на странице Services */}
            {path[0] === 'services' && (
                <>
                    <span className="text-white mx-2">/</span>
                    <Link to="/services" className="text-white">
                        Services
                    </Link>
                </>
            )}

            {/* Если мы на странице About */}
            {path[0] === 'services' && path[1] === 'about' && (
                <>
                    <span className="text-white mx-2">/</span>
                    <Link to="/about" className="text-white">
                        About
                    </Link>
                </>
            )}
        </div>
    );
}

export default Navigation;
