import classes from './Layout.module.scss'
import MainNavigation from './MainNavigation'
import FooterButton from "./FooterButton";
// import moduleUse from './moduleUse.module.scss' 學習用module方法用

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