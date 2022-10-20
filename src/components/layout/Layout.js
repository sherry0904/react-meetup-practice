import classes from './Layout.module.scss'
import MainNavigation from './MainNavigation'
import FooterButton from "./FooterButton";

function Layout(props) {
    return (
        <div>
            <MainNavigation/>
            <main className={classes.main}>{props.children}</main>
            <FooterButton/>
        </div>
    )
}

export default Layout