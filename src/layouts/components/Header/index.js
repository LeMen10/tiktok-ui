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
import { Link } from 'react-router-dom';
import Tippy from '@tippyjs/react';
import styles from './Header.module.scss'
import 'tippy.js/dist/tippy.css'; 

import config from '~/config';
import Button from '~/components/Button';
import images from '~/assest/images';
import Menu from '~/components/Popper/Menu';
import { MailBoxIcon, MessageIcon, UploadIcon } from '~/components/Icons';
import Image from '~/components/Image';
import Search from '../Search';
// import Modal from '~/components/Modal';
// import { useState } from 'react';

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
                },
                {   
                    type: 'language',
                    code: 'en',
                    title: 'English',
                },
                {   
                    type: 'language',
                    code: 'vi',
                    title: 'Tiếng Việt',
                },
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
    //modal
    // const [modalIsOpen, setIsOpen] = useState(false);
    //handle logic
    const handleMenuChange = (menuItem) => {
        switch(menuItem.type){
            case 'language':
                break;
            default:
        }
    };
    const currentUser = false;
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
    
    //modal
    // function openModal() {
    //     setIsOpen(true);
    // }
    // function closeModal() {
    //     setIsOpen(false);
    // }
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                <Link className={cx('logo-link')} to={config.routes.home}>
                    <img src={images.logo} alt="tiktok"/>
                </Link>
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
                                src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/806989714f01200c57ecb64a5df98596~c5_100x100.jpeg?x-expires=1662087600&x-signature=3ANrTbXSYvwHfwJMBseb8%2Fnb2vk%3D'
                                className={cx('user-avatar')}
                                alt="Võ Lê Mến"
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

        {/* <button onClick={openModal}>Open Modal</button>
        <Modal
            isOpen={modalIsOpen}
        >
            <button onClick={closeModal}>close</button>
            <div>I am a modal</div>
            <form>
                <input />
                <button>tab navigation</button>
                <button>stays</button>
                <button>inside</button>
                <button>the modal</button>
            </form>
        </Modal> */}
        </header>
    );
}

export default Header;