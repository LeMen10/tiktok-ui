import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';
import styles from './Button.module.scss';

const cx = classNames.bind(styles)

function Button({
    to, 
    href, 
    primary = false, 
    outline = false,
    text = false,
    disabled = false, 
    small=false, 
    large=false,
    rounded=false,
    children, 
    className,
    onClick, 
    leftIcon,
    ...passProps
}) {
    let Comp = 'button';
    const props = {
        onClick,
        ...passProps
    };
    if(to){
        props.to = to;
        Comp = Link;
    }
    if(disabled){
        Object.keys(props).forEach((key) => {
            if(key.startsWith('on') && typeof props[key]==='function'){
                delete props[key]
            }
        })
    }
    else if(href){
        props.href = href
        Comp = 'a';
    }
    const classes = cx('wrapper',{
        [className] : className,
        primary,
        outline,
        text,
        disabled,
        small,
        large,
        rounded
    });
    return (
        <Comp className={classes} {...props}>
            {leftIcon && <span className={cx('icon')}>{leftIcon}</span>}
            <span className={cx('title')}>{children}</span>
        </Comp>
    );
}

export default Button;
