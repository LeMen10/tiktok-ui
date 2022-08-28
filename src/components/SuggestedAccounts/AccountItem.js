// import PropTypes from 'prop-types'
import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Tippy from '@tippyjs/react/headless';
import styles from './SuggestedAccounts.module.scss'
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import {Wrapper as PopperWrapper} from'~/components/Popper';
import AccountPreview from './AccountPreview/AccountPreview';

const cx = classNames.bind(styles);

function AccountItem() {
    const renderPreview = (props) => {
        return(
            <div tabIndex="-1" {...props}>
                <PopperWrapper>
                    <AccountPreview/>
                </PopperWrapper>
            </div>
        )
    }
    return (
        <div>
            <Tippy
                interactive
                delay={[900, 0]}
                placement="bottom"
                offset={[-30, 0]}
                render={renderPreview}
            >
    
                <div className={cx('account-item')}>
                    <img 
                        className={cx('avatar')}
                        src='https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/be22b8593ea95c8835d47f4b5309ec16~c5_100x100.jpeg?x-expires=1661828400&x-signature=7IaA7v8bRXJ6x8pOTAWQ%2BrmDMRA%3D'
                        alt=''
                    />
                    <div className={cx('item-info')}>
                        <p className={cx('nick-name')}>
                            <strong>duoidayxahoi</strong>
                            <FontAwesomeIcon className={cx('icon-check')} icon={faCheckCircle}/>
                        </p>
                        <p className={cx('name')}>Đạt Vinamilk</p>
                    </div>
                </div>
            </Tippy>
        </div>
    );
}

// AccountItem.propTypes = {

// }

export default AccountItem;