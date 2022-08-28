import className from "classnames/bind"
import config from "~/config";
import styles from './Sidebar.module.scss';
import Menu, {MenuItem} from "./Menu";
import { FollowingActiveIcon, FollowingIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon } from "~/components/Icons";
const cx = className.bind(styles)
function Sidebar() {
    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>}/>
                <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon />} activeIcon={<FollowingActiveIcon/>}/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/>}/>
            </Menu>
        </aside>
        
    );
}

export default Sidebar;