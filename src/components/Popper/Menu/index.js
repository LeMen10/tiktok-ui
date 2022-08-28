import PropTypes from 'prop-types'
import Tippy from '@tippyjs/react/headless';
import classNames from 'classnames/bind';
import { useState } from 'react';
import {Wrapper as PopperWrapper} from'~/components/Popper';
import Header from './Header';
import styles from './Menu.module.scss'
import MenuItem from './MenuItem';

const cx = classNames.bind(styles)
const defaultFn=()=>{}

function Menu({children, items = [], hideOnClick=false, onChange = defaultFn}) {
    const [history, setHistory] = useState([{ data: items}]);
    
    const current = history[history.length - 1];
    // console.log(history)
    const renderItems = ()=>{
        return current.data.map((item, index)=>{
            const isParent = !!item.children

            return <MenuItem key={index} data={item} onClick={()=>{
                if(isParent){
                    setHistory(prev => ([...prev, item.children]));
                }
                else{
                    onChange(item)
                }
            }}/>
        });
    };
    const renderResult = (attrs) =>(
        <div className={cx('menu-list')} tabIndex="-1" {...attrs}>
            <PopperWrapper className={cx('menu-popper')}>
                {history.length > 1 && (
                    <Header 
                        title={current.title} 
                        onBack={()=>{
                            setHistory(prev => prev.slice(0, prev.length-1));
                        }}
                    />
                )}
                <div className={cx('menu-body')}>{renderItems()}</div>
            </PopperWrapper>
        </div>
    )
    //reset to first page
    const handleResetMenu = ()=> {
        setHistory(prev=> prev.slice(0, 1))
    };
    return (
        <Tippy 
            hideOnClick={hideOnClick}
            interactive
            // visible
            offset={[12, 8]}
            delay={[0, 600]}
            placement='bottom-end'
            render={renderResult}
            onHide={handleResetMenu}
        >
            {children}
        </Tippy>
    );
}

Menu.propTypes = {
    children: PropTypes.node.isRequired,
    items: PropTypes.array,
    hideOnClick: PropTypes.bool,
    onChange: PropTypes.func,
}

export default Menu;