import React from "react";
import SimpleComponent from "./simpleComponent";
import CardWrapper from "../common/Card";

const withFunctions = (WrappedComponent) => {
    // обьявляем функцию onLogin
    const onLogin = () => {
        // сохраняем значение token под ключом auth, localStorage - это фича для хранения данных на стороне клиента, мы сохраняем значение tokrn в localStorage, чтобы указать что пользователь авторизован
        localStorage.setItem("auth", "token");
        // вызываем перезагрузку нашей страницы
        window.location.reload();
    };
    // объявляем функцию onLogOut
    const onLogOut = () => {
        // удаляем значение token по ключу auth
        localStorage.removeItem("auth");
        // вызываем перезагрузку нашей страницы
        window.location.reload();
    };

    // вызываем из localStorage значение под ключом auth, если значение будет найдено то оно будет возвращено иначе вернется null !! - преобразует null в false, а если не равен null то преобразует его в true
    const isAuth = !!localStorage.getItem("auth");

    // создадим компонент WithFunctions, который принимает props. Берем комопнент с классом card, в него помещаем WrappedComponent и передаем туда пропсы onLogin onLogOut isAuth и остальные пропсы ...props. WithFunctions это обертка для WrappedComponent, которая позволяет передавать ему дополнительные пропсы, еще мы добавлем ему стили в виде карточки card
    const WithFunctions = (props) => {
        return (
            <CardWrapper>
                <WrappedComponent
                    onLogin={onLogin}
                    onLogOut={onLogOut}
                    isAuth={isAuth}
                    {...props}
                />
            </CardWrapper>
        );
    };

    // возвращаем WithFunctions
    return WithFunctions;
};

// Создаем компонент с HOC
const ComponentWithHoc = withFunctions(SimpleComponent);

export default ComponentWithHoc;
