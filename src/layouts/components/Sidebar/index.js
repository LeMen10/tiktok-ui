import className from "classnames/bind"
import config from "~/config";
import styles from './Sidebar.module.scss';
import Menu, {MenuItem} from "./Menu";
import { FollowingActiveIcon, FollowingIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon } from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";

const cx = className.bind(styles)
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>}/>
                <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon />} activeIcon={<FollowingActiveIcon/>}/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/>}/>
            </Menu>

            <SuggestedAccounts label="Suggested Accounts"/>
            <SuggestedAccounts label="Following Accounts"/>
        </aside>
        
    );
}

export default Sidebar;