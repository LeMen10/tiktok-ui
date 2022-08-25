import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleQuestion, 
    faCoins, 
    faEarthAsia, 
    faEllipsisVertical, 
    faGear, 
    faKeyboard, 
    faPlus, 
    faSignOut, 
    faUser 
} from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.scss'

import Button from '~/components/Button';
import images from '~/assest/images';
import Tippy from '@tippyjs/react';
// import HeadlessTippy from '@tippyjs/react/headless';
// import { Wrapper as PopperWrapper} from '~/components/Popper';
// import AccountItem from '~/components/AccountItem';
import Menu from '~/components/Popper/Menu';
import 'tippy.js/dist/tippy.css'; 
import { MailBoxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';

const cx = classNames.bind(styles)
const MENU_ITEMS = [
    {
        icon: <FontAwesomeIcon icon={
            faEarthAsia}/>,
        title: 'English',
        children: {
            title: 'Language',
            data: [
                {   
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {   
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                }
            ]
        }
    },
    {
        icon: <FontAwesomeIcon icon={faCircleQuestion}/>,
        title: 'Feedback and help',
        to: '/feedback'
    },
    {
        icon: <FontAwesomeIcon icon={faKeyboard}/>,
        title: 'Keyboard shortcuts',
    }
]
function Header() {
    
    //handle logic
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type){
            case 'language':
                break;
            default:
        }
    };
    const currentUser = true;
    const userItem = [
        {
            icon: <FontAwesomeIcon icon={faUser}/>,
            title: 'View profile',
            to: '/@menn'
        },
        {
            icon: <FontAwesomeIcon icon={faCoins}/>,
            title: 'Get coins',
            to: '/coin'
        },
        {
            icon: <FontAwesomeIcon icon={faGear}/>,
            title: 'Settings',
            to: '/settings'
        },
        ...MENU_ITEMS,
        {
            icon: <FontAwesomeIcon icon={faSignOut}/>,
            title: 'Log out',
            to: '/logout',
            separate: true,
        },
    ]
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <img src={images.logo} alt="tiktok"/>
                <Search/>

                <div className={cx('actions')}>
                    {currentUser ? (
                        <>
                            <Tippy  delay={[0, 100]} content="Upload video" placement='bottom'>
                                <button className={cx('action-btn', 'upload-icon')}>
                                    <UploadIcon />
                                </button >
                            </Tippy>

                            <Tippy  delay={[0, 100]} content="Messages" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <MessageIcon />
                                </button >
                            </Tippy>
                            <Tippy  delay={[0, 100]} content="Inbox" placement='bottom'>
                                <button className={cx('action-btn')}>
                                    <span className={cx('inbox-icon')}>14</span>
                                    <MailBoxIcon />
                                </button>
                            </Tippy>
                        </>
                    ) : (
                        <>
                            {/*disabled outline small large*/}
                            <Button text leftIcon={<FontAwesomeIcon icon={faPlus}/>}>
                                Upload
                            </Button>
                            <Button primary > 
                                Log in
                            </Button>
                            {/* <Button  rounded className={cx('custom-login')}>Get app</Button> */}
                        </>
                    
                    )} 
                    <Menu items={currentUser ? userItem : MENU_ITEMS} onChange={handleMenuChange}>
                        {currentUser ? (
                            <Image 
                                src='https://scontent.fdad3-5.fna.fbcdn.net/v/t39.30808-6/293647356_1242970689805876_2993293583672797237_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=8bfeb9&_nc_ohc=0d1nWKA2R2gAX_khusd&_nc_ht=scontent.fdad3-5.fna&oh=00_AT_BQWZ7iJoAb75Bf29HR4y_zI2MCCnUA-WVQW2FeK6zNg&oe=630A1816'
                                className={cx('user-avatar')}
                                alt="Cao Ái Linh"
                                // fallback="https://static.fullstack.edu.vn/static/media/f8-icon.18cd71cfcfa33566a22b.png"
                            />
                        ) : (
                            <button className={cx('more-btn')}>
                                <FontAwesomeIcon icon={faEllipsisVertical}/>
                            </button>
                        )}
                    </Menu>
                </div>

            </div>
        </header>
    );
}

export default Header;