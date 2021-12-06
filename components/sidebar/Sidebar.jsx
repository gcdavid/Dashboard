import { Link } from 'react-router-dom'
import './sidebar.css'
import { 
    LineStyleOutlined,
    Timeline,
    TrendingUp,
    PermIdentity,
    Storefront,
    AttachMoney,
    BarChart,
    MailOutline,
    DynamicFeed,
    ChatBubbleOutline,
    WorkOutline,
    Report, } from '@material-ui/icons'

const Sidebar = () => {
    return (
        <div className="sidebar">
            <div className="sidebarWrapper">
                <div className="sidebarMenu">
                    <h4 className="sidebarTitle">Dashboard</h4>
                    <ul className="sidebarList">
                        <Link to="/" className="link">
                        <li className="sidebarListItem active">
                            <LineStyleOutlined className="sidebarIcon"/>Home
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <Timeline className="sidebarIcon"/>Analytics
                        </li>
                        <li className="sidebarListItem">
                            <TrendingUp className="sidebarIcon"/>Sales
                        </li>
                    </ul>
                    <h4 className="sidebarTitle">Quick Menu</h4>
                    <ul className="sidebarList">
                        <Link to="/users" className="link">
                        <li className="sidebarListItem">
                            <PermIdentity className="siebarIcon"/>Users
                        </li>
                        </Link>
                        <Link to="/product" className="link">
                        <li className="sidebarListItem">
                            <Storefront className="siebarIcon"/>Products
                        </li>
                        </Link>
                        <li className="sidebarListItem">
                            <AttachMoney className="siebarIcon"/>Transactions
                        </li>
                        <li className="sidebarListItem">
                            <BarChart className="siebarIcon"/>Reports
                        </li>
                    </ul>
                    <h4 className="sidebarTitle">Notifications</h4>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <MailOutline className="sidebarIcon"/>Mail
                        </li>
                        <li className="sidebarListItem">
                            <DynamicFeed className="sidebarIcon"/>Feedback
                        </li>
                        <li className="sidebarListItem">
                           <ChatBubbleOutline className="sidebarIcon"/> Messages
                        </li>
                    </ul>
                    <h4 className="sidebarTitle">Stuff</h4>
                    <ul className="sidebarList">
                        <li className="sidebarListItem">
                            <WorkOutline className="sidebarIcon"/>Manage
                        </li>
                        <li className="sidebarListItem">
                           <Timeline className="sidebarIcon"/> Analytics
                        </li>
                        <li className="sidebarListItem">
                           <Report className="sidebarIcon"/> Reports
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
