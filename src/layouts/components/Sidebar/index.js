import { useState, useEffect } from "react";
import className from "classnames/bind";

import config from "~/config";
import styles from './Sidebar.module.scss';
import Menu, {MenuItem} from "./Menu";
import { FollowingActiveIcon, FollowingIcon, HomeActiveIcon, HomeIcon, LiveActiveIcon, LiveIcon } from "~/components/Icons";
import SuggestedAccounts from "~/components/SuggestedAccounts";
import * as useService from '~/services/useService';

const cx = className.bind(styles);


const PER_PAGE = 5;
function Sidebar() {
    const [suggestedUsers, setSuggestedUsers] = useState([]);

    useEffect(()=>{
        useService
            .getSuggested({page: 1, perPage: PER_PAGE})
            .then((data)=>{
                setSuggestedUsers((prevUser) => [...prevUser, ...data]);
            })
            .catch((error)=> console.log(error));
    }, []);

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon/>}/>
                <MenuItem title="Following" to={config.routes.following} icon={<FollowingIcon />} activeIcon={<FollowingActiveIcon/>}/>
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon/>}/>
            </Menu>

            <SuggestedAccounts 
                label="Suggested Accounts" 
                data={suggestedUsers} />
            <SuggestedAccounts label="Following Accounts"/>
        </aside>
        
    );
}

export default Sidebar;