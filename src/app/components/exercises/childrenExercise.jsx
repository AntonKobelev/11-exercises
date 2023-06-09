import React from "react";
import CollapseWrapper from "../common/collapse";
const ChildrenExercise = () => {
    // получим дочерние элементы компонента ChildrenExercise в виде массива
    const children = React.Children.toArray([
        <Component />,
        <Component />,
        <Component />
    ]);

    // переберем с помощью map
    const renderChildrenWithNumber = React.Children.map(
        children,
        (child, index) => {
            return <div>Компонент списка {index + 1}</div>;
        }
    );

    return (
        <CollapseWrapper title="Упражнение">
            <p className="mt-3">
                У вас есть компоненты Списка. Вам необходимо к каждому из них
                добавить порядковый номер, относительно того, как они
                располагаются на странице. Вы можете использовать как{" "}
                <code>React.Children.map</code> так и{" "}
                <code>React.Children.toArray</code>
            </p>
            {renderChildrenWithNumber}
        </CollapseWrapper>
    );
};

const Component = () => {
    return <div>Компонент списка</div>;
};

export default ChildrenExercise;
