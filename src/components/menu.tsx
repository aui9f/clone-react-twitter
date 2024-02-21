
import {Nav, IMenu, Post, Profile} from '@/assets/styled/Layout.styled';
import logo from '@/assets/image/logo.png';
import iHome from '@/assets/image/menu_home.png'
import iexplore from '@/assets/image/menu_explore.png'
import iNotifications from '@/assets/image/menu_notifications.png'
import iMessage from '@/assets/image/menu_messages.png'
import iList from '@/assets/image/menu_lists.png'
import iBookmarks from '@/assets/image/menu_bookmarks.png'
import iCommunites from '@/assets/image/menu_communities.png'
import iPremium from '@/assets/image/menu_premium.png'
import iUser from '@/assets/image/menu_user.png'
import iMore from '@/assets/image/menu_more.png'

import temp from '@/assets/image/temp_user.png'

import { Link, useNavigate } from 'react-router-dom';

function Menu(){
    const navigater = useNavigate();
    const onClick = () => {
        navigater('/profile');
    }
    const movePostForm = () => {
        navigater('/postform');
    }
    
    return <Nav>
        <img src="" alt="" />

        <ul>
            <li><Link to={'/'}><IMenu src={iHome} alt={'처음으로'}/><p>홈</p></Link></li>
            <li><Link to={'/'}><IMenu src={iexplore} alt={'탐색하기'}/><p>탐색하기</p></Link></li>
            <li><Link to={'/'}><IMenu src={iNotifications} alt={'알림'}/><p>알림</p></Link></li>
            <li><Link to={'/'}><IMenu src={iMessage} alt={'쪽지'}/><p>쪽지</p></Link></li>
            <li><Link to={'/'}><IMenu src={iList} alt={'리스트'}/><p>리스트</p></Link></li>
            <li><Link to={'/'}><IMenu src={iBookmarks} alt={'북마크'}/><p>북마크</p></Link></li>
            <li><Link to={'/'}><IMenu src={iCommunites} alt={'커뮤니티'}/><p>커뮤니티</p></Link></li>
            <li><Link to={'/'}><IMenu src={iPremium} alt={'Premium'}/><p>Premium</p></Link></li>
            <li><Link to={'/'}><IMenu src={iUser} alt={'프로필'}/><p>프로필</p></Link></li>
            <li><Link to={'/'}><IMenu src={iMore} alt={'더보기'}/><p>더보기</p></Link></li>
        </ul>
        <Post onClick={movePostForm}>게시하기</Post>
        <Profile onClick={onClick}>
            <img src={temp} alt="user" />
            <div className="text"><p>닉네임</p></div>
            <div className="icon">...</div>
        </Profile>
    </Nav>
}
export default Menu
