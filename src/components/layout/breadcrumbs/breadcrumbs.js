import React from "react";
import style from "./breadcrumbs.module.scss";
import mainStyle from "../../../static/css/mainStyle.module.scss";
import cx from 'classnames'

function Breadcrumbs() {
    return (
        <div className={ cx(style.breadcrumbs, mainStyle.containerXxl)}>
            <a href="#" className={style.breadcrumbsLink}>Главная</a>
            <span className={style.breadcrumbsLink}>Проекты</span>
        </div>
    );
}

export default Breadcrumbs;