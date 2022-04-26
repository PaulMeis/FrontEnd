import { Routes } from "react-router-dom";
import AcademicInformation from "./AcademicInformation";
import ContactInformation from "./ContactInformation";
import FinancialInformation from "./FinancialInformation";
import ForgotPassword from "./ForgotPassword";

const pages = [
    //pubic ages
   
    {
        exact: true,
        path: '/login',
        component: LoginPage,
        layout: PublicLayout
    },
    {
        exact: true,
        path: '/',
        component: Start,
        layout: PublicLayout
    },
    {
        exact: true,
        path: '/signup',
        component: Signup,
        layout: PublicLayout
    },
    {
        exact: true,
        path: '/forgotpassword',
        component: ForgotPassword,
        layout: PublicLayout
    },
    {
        exact: true,
        path: '/ contact',
        component: ContactInformation,
        layout: PublicLayout
    },
    {
        exact: true,
        path: '/financial',
        component: FinancialInformation,
        layout: PublicLayout
    },
    {
        exact: true,
        path: '/academic',
        component: AcademicInformation,
        layout: PublicLayout
    },


// authenticated pages
    {
        exact: false,
        path: '/home',
        component: Home,
        layout: AuthLayout
    },
    {
        exact: false,
        path: '/users',
        component: UserList,
        layout: AuthLayout
    },
    {
        exact: false,
        path: '/user/:userId',
        component: User,
        layout: AuthLayout
    },
    {
        exact: false,
        path: '/newUser',
        component: NewUser,
        layout: AuthLayout
    }
];


const App = () => {
    <Router history={history}>
        <Switch>
            {pages.map( (i, index)=> {
                <Route key={index}
                exact={i.exact}
                path={i.path}
                render={props => (
                    <i.layout history={props.history}>
                        <i.component {...props}/>
                    </i.layout>
                )} />
            })}
        </Switch>
    </Router>
}