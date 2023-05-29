import React from "react";
import PropTypes from "prop-types";

// создаем компонент SimpleComponent
const SimpleComponent = ({ onLogin, onLogOut, isAuth }) => {
    // создаем функцию-обрабочтик
    const handleLogin = () => {
        onLogin();
    };

    // создаем функцию-обрабочтик
    const handleLogOut = () => {
        onLogOut();
    };
    return (
        <div>
            {isAuth ? (
                <button onClick={handleLogOut}>Выйти из системы</button>
            ) : (
                <button onClick={handleLogin}>Войти в систему</button>
            )}
        </div>
    );
};

SimpleComponent.propTypes = {
    onLogin: PropTypes.func.isRequired,
    onLogOut: PropTypes.func.isRequired,
    isAuth: PropTypes.bool.isRequired
};

export default SimpleComponent;
