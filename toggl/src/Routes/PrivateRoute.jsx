import React from "react";
import { useSelector } from "react-redux";
import { Redirect, Route } from "react-router";


export function PrivateRoute({children,
    path,
    exact=false,
    redirectPath="/",
    push=false}){
        
        const isAuth = useSelector(state=>state.user.isAuth) 
        return isAuth?(
            <Route path={path} exact={exact}>
                {children}
            </Route>
        ):(
            <Redirect to={redirectPath} push={push}/>
        )
}