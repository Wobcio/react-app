import style from './Container.module.scss'
import clsx from 'clsx';

const Container = props => {
    return (
        <div className={clsx(style.container, props.className)}>{props.children}</div>
    );
};

export default Container;