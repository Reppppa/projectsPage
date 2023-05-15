import React from "react";
import mainStyle from "../../../static/css/mainStyle.module.scss";
import style from './footer.module.scss';
import cx from "classnames";


function Footer() {
    return (
        <footer className={style.footer}>
            <div className={ cx(mainStyle.containerXxl, style.footerInner) }>
                <div className={style.footerCompany}>
                    <span className={style.footerLogo}>
                        <svg width="196" height="41" viewBox="0 0 131 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12.5312 7.95216C13.3952 8.22408 14.6769 9.12399 15.2927 9.71664C15.4967 9.91283 15.8762 9.90094 16.1219 9.71664L18.5175 7.35168C18.7018 7.16737 18.7018 6.73744 18.5788 6.52247C17.6995 5.67073 16.0524 4.53301 14.792 4.03955L12.5312 7.95216Z" fill="#EEF3FF"/>
                        <path d="M4.92895 16.0804C4.81912 15.56 4.76058 15.0043 4.76058 14.416C4.76058 11.0791 6.55827 8.50954 9.62383 7.95507L12.2294 3.44573C11.7926 3.38941 11.3498 3.35938 10.9033 3.35938C4.54563 3.35938 0 7.93565 0 14.416C0 17.0616 0.748778 19.3305 2.02138 21.1122L4.92895 16.0804Z" fill="#EEF3FF"/>
                        <path d="M10.9024 20.988C9.32218 20.988 7.87623 20.437 6.78481 19.4353L4.43359 23.5041C6.24346 24.7757 8.48077 25.4723 10.9024 25.4723C13.8509 25.4723 16.6458 24.1821 18.5805 22.3394C18.7342 22.1858 18.6728 21.7559 18.5805 21.5409L16.2462 19.2066C15.9393 18.961 15.5093 18.9303 15.2944 19.1146C14.1272 20.2818 12.5914 20.988 10.9024 20.988Z" fill="#EEF3FF"/>
                        <path d="M4.83845 17.1784C4.90229 17.0736 4.94611 16.9709 4.96957 16.8702C4.99336 16.7694 5.00023 16.6136 4.99084 16.4021L4.85975 13.4498C4.85318 13.3037 4.83252 13.1873 4.79748 13.1009C4.76243 13.0148 4.72332 12.9742 4.67983 12.9789C4.63039 12.9842 4.58251 13.0302 4.53651 13.1168L0.859503 19.5255C0.795983 19.6304 0.752193 19.7333 0.728412 19.8341C0.704944 19.9345 0.697726 20.0906 0.707113 20.3019L0.838541 23.2545C0.844799 23.4006 0.865779 23.517 0.900511 23.6034C0.935557 23.6891 0.974976 23.7301 1.01816 23.7254C1.06791 23.7201 1.11578 23.6741 1.16178 23.5874L4.83845 17.1784Z" fill="#EEF3FF"/>
                        <path d="M12.026 4.19991C12.0895 4.09508 12.1336 3.99246 12.1571 3.89171C12.1806 3.79095 12.1878 3.63512 12.1784 3.4236L12.047 0.471285C12.0407 0.325157 12.0197 0.208773 11.985 0.122411C11.95 0.0363608 11.9109 -0.00432956 11.8674 0.000364066C11.8176 0.00568351 11.7697 0.051686 11.7237 0.138362L8.04706 6.54736C7.98323 6.65188 7.93941 6.75481 7.91594 6.85557C7.89216 6.95632 7.88529 7.11216 7.89467 7.32337L8.02577 10.276C8.03234 10.4221 8.053 10.5385 8.08804 10.6249C8.12309 10.7106 8.16219 10.7516 8.20569 10.7469C8.25513 10.7416 8.303 10.6956 8.349 10.6089L12.026 4.19991Z" fill="#EEF3FF"/>
                        <path d="M7.75648 21.0402C7.82 20.9354 7.86411 20.8328 7.88757 20.732C7.91104 20.6313 7.91826 20.4755 7.90887 20.2639L7.77775 17.3116C7.77118 17.1652 7.75021 17.0491 7.71547 16.9627C7.68043 16.8767 7.64132 16.836 7.59783 16.8407C7.54808 16.846 7.50021 16.892 7.45421 16.9787L3.77753 23.3874C3.7137 23.4922 3.66988 23.5951 3.64641 23.6959C3.62263 23.7963 3.61576 23.9525 3.62514 24.1637L3.75626 27.1163C3.76284 27.2624 3.78346 27.3788 3.81851 27.4652C3.85356 27.5509 3.89269 27.5919 3.93619 27.5872C3.98563 27.5816 4.03347 27.5356 4.07947 27.4489L7.75648 21.0402Z" fill="#EEF3FF"/>
                        <path d="M57.9601 13.8594C58.2461 13.7317 60.2803 12.7129 60.2803 9.51901C60.2803 6.53731 58.0552 3.76807 52.875 3.76807H43.9762C43.2456 3.76807 43.0547 4.11821 43.0547 4.69115V23.7911C43.0547 24.364 43.2456 24.7141 43.9762 24.7141H53.3199C57.7376 24.7141 60.8839 22.6452 60.8839 18.6021C60.8839 15.1645 58.2142 13.9545 57.9601 13.8594ZM53.3835 20.1939H48.0443V8.25641H52.875C54.5278 8.25641 55.5128 8.60126 55.5128 10.0234C55.5128 11.2541 54.7183 11.9171 52.875 11.9171H52.462C51.731 11.9171 51.5401 12.2676 51.5401 12.8402V15.2596C51.5401 15.8329 51.731 16.183 52.462 16.183H53.1929C54.7184 16.183 55.8307 16.6286 55.8307 18.1246C55.8307 19.5571 54.9408 20.1939 53.3835 20.1939Z" fill="#EEF3FF"/>
                        <path d="M99.5394 23.6988L95.0542 17.1624C97.0264 16.4937 99.4759 14.1648 99.4759 10.817C99.4759 8.77461 98.8078 6.96005 97.6307 5.81418C96.2949 4.47713 94.7679 3.77686 91.3008 3.77686H83.2851C82.5535 3.77686 82.3945 4.127 82.3945 4.69994V23.7942C82.3945 24.5318 82.7128 24.7226 83.2851 24.7226H86.4342C87.0068 24.7226 87.3566 24.5318 87.3566 23.7942V8.2333H91.5871C93.2415 8.2333 94.5138 9.28372 94.5138 10.9443C94.5138 12.4407 93.0506 13.528 91.4917 13.528H90.8556C90.124 13.528 89.9331 13.8785 89.9331 14.4514V17.0032C89.9331 17.8946 89.9966 18.2448 90.2829 18.6269L93.7184 23.7623C94.1636 24.4363 94.5454 24.7226 95.3089 24.7226H99.0622C99.6668 24.7226 99.8254 24.1444 99.5394 23.6988Z" fill="#EEF3FF"/>
                        <path d="M124.315 20.4496L120.588 10.2534L115.443 24.0843C115.34 24.3308 115.222 24.5001 115.089 24.5927C114.955 24.6851 114.745 24.7314 114.457 24.7314H110.73C110.36 24.7314 110.176 24.5568 110.176 24.2076C110.176 24.0639 110.206 23.8997 110.268 23.7147L118.246 4.709C118.39 4.3598 118.549 4.11852 118.724 3.98491C118.898 3.85161 119.15 3.78467 119.479 3.78467H121.727C122.056 3.78467 122.302 3.85161 122.466 3.98491C122.631 4.11852 122.784 4.3598 122.929 4.709L130.907 23.7147C130.968 23.8997 130.999 24.0639 130.999 24.2076C130.999 24.5568 130.814 24.7314 130.444 24.7314H126.717C126.43 24.7314 126.22 24.6851 126.086 24.5927C125.953 24.5001 125.834 24.3308 125.732 24.0843L124.315 20.4496Z" fill="#EEF3FF"/>
                        <path d="M103.761 24.7314C103.268 24.7314 102.914 24.6234 102.698 24.4078C102.483 24.1923 102.375 23.8584 102.375 23.4068V5.13986C102.375 4.68833 102.483 4.34916 102.698 4.12355C102.914 3.89763 103.268 3.78467 103.761 3.78467H106.071C106.585 3.78467 106.944 3.89262 107.149 4.1079C107.355 4.3235 107.458 4.66737 107.458 5.13986V23.4068C107.458 23.8584 107.355 24.1923 107.149 24.4078C106.944 24.6234 106.585 24.7314 106.071 24.7314H103.761Z" fill="#EEF3FF"/>
                        <path d="M28.9206 24.7314C28.4278 24.7314 28.0736 24.6234 27.858 24.4078C27.6424 24.1923 27.5345 23.8584 27.5345 23.4068V17.5845L20.08 4.80128C19.9771 4.63701 19.9258 4.47242 19.9258 4.30815C19.9258 4.16452 19.9824 4.04125 20.0951 3.93862C20.2083 3.83598 20.3573 3.78467 20.5419 3.78467H24.2383C24.5259 3.78467 24.7314 3.83066 24.8544 3.92328C24.9777 4.01558 25.101 4.17517 25.2243 4.40046L30.0912 12.9335L34.9582 4.40046C35.0812 4.17517 35.2045 4.01558 35.3278 3.92328C35.451 3.83066 35.646 3.78467 35.9129 3.78467H39.6403C39.8249 3.78467 39.9738 3.83598 40.0871 3.93862C40.1998 4.04125 40.2564 4.16452 40.2564 4.30815C40.2564 4.47242 40.2051 4.63701 40.1024 4.80128L32.6477 17.6155V23.4068C32.6477 23.8584 32.5398 24.1923 32.3245 24.4078C32.1089 24.6234 31.7443 24.7314 31.2309 24.7314H28.9206Z" fill="#EEF3FF"/>
                        <path d="M65.0307 24.7314C64.5379 24.7314 64.1834 24.6234 63.9678 24.4078C63.7525 24.1923 63.6445 23.8584 63.6445 23.4068V5.13986C63.6445 4.68833 63.7528 4.34884 63.9678 4.12355C64.183 3.89794 64.5379 3.78467 65.0307 3.78467H78.3691C78.8622 3.78467 79.2011 3.88197 79.3857 4.07723C79.5706 4.27217 79.6632 4.60698 79.6632 5.07853V6.21784C79.6632 6.6897 79.57 7.02952 79.3857 7.23479C79.2011 7.43974 78.8613 7.54299 78.3691 7.54299H68.7274V12.4097H75.0729C75.5657 12.4097 75.9046 12.5073 76.0892 12.7026C76.2741 12.8975 76.3665 13.231 76.3665 13.7035V14.7815C76.3665 15.254 76.2741 15.5926 76.0892 15.7982C75.9046 16.0037 75.5657 16.1064 75.0729 16.1064H68.7274V21.0037H77.7833C78.2761 21.0037 78.6153 21.1066 78.7999 21.3119C78.9849 21.5175 79.0772 21.8564 79.0772 22.3286V23.4378C79.0772 23.9097 78.9849 24.2435 78.7999 24.4388C78.6153 24.6337 78.2761 24.7314 77.7833 24.7314H65.0307Z" fill="#EEF3FF"/>
                    </svg>
                    </span>
                    <span className={style.footerText}>
                        Web and machine learning<br/>developing company
                    </span>
                </div>
                <label className={style.footerNavInner}>
                    <ul className={style.footerAddress}>
                        <li className={style.footerNavItem}><a href="#">+7 499 679 45 79</a></li>
                        <li className={style.footerNavItem}><a href="#">hello@cyberia.ru</a></li>
                        <li className={style.footerNavItem}><a href="#">Аносова 3Б, оф. 1</a></li>
                    </ul>
                    <ul className={style.footerNav}>
                        <li className={style.footerNavItem}><a href="#">Главная</a></li>
                        <li className={style.footerNavItem}><a href="#">Услуги</a></li>
                        <li className={style.footerNavItem}><a href="#">Проекты</a></li>
                    </ul>
                    <ul className={style.footerNav}>
                        <li className={style.footerNavItem}><a href="#">Блог</a></li>
                        <li className={style.footerNavItem}><a href="#">О нас</a></li>
                        <li className={style.footerNavItem}><a href="#">Команда</a></li>
                    </ul>
                </label>
                <ul className={style.footerDescription}>
                    <li className={style.footerNavItem}><a href="#" className={style.footerNavLink}>2022, digital-агентство Cyberia</a></li>
                    <li className={style.footerNavItem}><a href="#" className={style.footerNavLink}>Положение о защите персональных данных</a></li>
                    <li className={style.footerNavItem}><a href="#" className={style.footerNavLink}>Политика в отношении обработки<br/> и защиты персональных данных</a></li>
                    <li className={style.footerNavItem}><a href="#" className={style.footerNavLink}>Оферта оказания услуг</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;