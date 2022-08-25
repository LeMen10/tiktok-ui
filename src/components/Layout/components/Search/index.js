import { useEffect, useState, useRef } from 'react';
import styles from './Search.module.scss'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faCircleXmark,  
    faMagnifyingGlass, 
    faSpinner, 
} from '@fortawesome/free-solid-svg-icons';
import HeadlessTippy from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper} from '~/components/Popper';
import AccountItem from '~/components/AccountItem';
import { SearchIcon } from '~/components/Icons';
const cx = classNames.bind(styles)
function Search() {
    const [searchResult, setSearchResult] = useState([]);
    useEffect(()=>{
        setTimeout(()=>{
            setSearchResult([1,2,3,4])
        },0)
    }, []);
    const [searchValue, setSearchValue] = useState('');
    const inputRef = useRef();
    const handleClear = () => {
        setSearchValue('');
        setSearchResult([]);
        inputRef.current.focus();
    };
    const [showResult, setShowResult] = useState(true);

    const handleHideResult = ()=>{
        setShowResult(false)
    }
    return (
        <HeadlessTippy
            interactive
            visible={showResult && searchResult.length > 0}
            render={attrs =>(
                <div className={cx('search-result')} tabIndex="-1" {...attrs}>
                    <PopperWrapper>
                        <h4 className={cx('search-title')}>
                            Account
                        </h4>
                        <AccountItem/>
                        <AccountItem/>
                        <AccountItem/>
                        <AccountItem/>
                    </PopperWrapper>
                </div>
            )}
            onClickOutside={handleHideResult}
        >
            <div className={cx('search')}>
                <input 
                    ref={inputRef}
                    value={searchValue}
                    spellCheck={false} 
                    onFocus={()=> setShowResult(true)}
                    placeholder='Tìm kiếm tài khoản và video' 
                    onChange={e => setSearchValue(e.target.value)}
                />
                {!!searchValue && (
                    <button className={cx('clear')} onClick={handleClear}>
                        <FontAwesomeIcon icon={faCircleXmark}/>
                    </button>
                )}
                {/* <FontAwesomeIcon className={cx('loading')} icon={faSpinner}/> */}
                    
                <button className={cx('search-btn')}>
                    <SearchIcon />
                </button>
            </div>
        </HeadlessTippy>
    );
}

export default Search