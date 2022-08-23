import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import className from 'classnames/bind'
import styles from './AccountItem.module.scss'

const cx = className.bind(styles)
function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img className={cx('avatar')} src="https://p16-sign-va.tiktokcdn.com/tos-useast2a-avt-0068-giso/e1bf3628c3b8150126cd62816111e3c6~c5_100x100.jpeg?x-expires=1661176800&x-signature=Mv8vBmDruuQPjCFlqdQ1dYbcGU4%3D" alt='Men'/>
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>menle3005</span>
                    <FontAwesomeIcon className={cx('check-icon')} icon={faCheckCircle}/>
                </h4>
                <span className={cx('username')}>menle</span>
            </div>
        </div>
    );
}

export default AccountItem;