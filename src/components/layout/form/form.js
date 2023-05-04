import React from "react";
import style from './form.module.scss'
import mainStyle from '../../../static/css/mainStyle.module.scss'
import cx from "classnames";

function Form() {

    return (
        <section className={style.contactBlock}>
            <div className={ cx(mainStyle.containerXxl, style.contactList) }>
                <div className={style.contactText}>
                    <svg className={style.contactTextIcon} width="156" height="144" viewBox="0 0 156 144" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="83" cy="81" r="63" fill="#6C799F"/>
                        <mask id="mask0_5236_3449" maskUnits="userSpaceOnUse" x="20" y="18" width="126" height="126">
                            <circle cx="83" cy="81" r="63" fill="#6C799F"/>
                        </mask>
                        <g mask="url(#mask0_5236_3449)">
                            <path d="M102 106V141.691C101.74 141.818 100.76 141.996 100.5 142.123C97.513 142.883 95.1169 143.62 92 144V106H102Z" fill="white"/>
                            <path d="M111 106V137.154C110.342 137.538 109.684 137.795 109.026 138.051C108.763 138.179 108.5 138.308 108.237 138.436H108.105C107.842 138.564 107.447 138.692 107.184 138.821C105.211 139.718 103.105 140.359 101 141V106H111Z" fill="#D5DAE8"/>
                            <path opacity="0.1" d="M110.681 121V136.384C110.171 136.639 109.662 136.893 109.152 137.147C108.898 137.275 108.643 137.402 108.388 137.529H108.261C108.006 137.656 107.624 137.783 107.369 137.91C105.458 138.8 103.42 139.436 101.382 140.072C101.255 140.072 101.127 140.199 101 140.199V136.893C101.127 136.512 101.255 136.13 101.382 135.749C103.293 130.79 105.713 126.849 108.516 123.543C109.152 122.653 109.917 121.763 110.681 121Z" fill="#062C78"/>
                            <path opacity="0.1" d="M111.114 105.913H92.2617V116.848H111.114V105.913Z" fill="#062C78"/>
                            <path d="M75.0786 132.386C73.2953 135.056 71.1298 139.379 69.8559 143.066C69.7286 143.32 69.6012 143.702 69.6012 143.956C68.7095 143.829 67.8178 143.574 66.9262 143.32C66.1619 141.54 65.6523 139.633 65.6523 139.633C66.1619 138.997 66.544 138.489 67.0535 137.98C69.4738 134.929 72.0214 132.894 75.0786 132.386Z" fill="#B6BED6"/>
                            <path d="M45.9047 117.381C48.9619 126.409 50.8155 133.093 54 138.433C61.5 142.433 68 143.433 70 143.933C69.2357 142.534 68.0692 139.886 66.9227 137.852C64.2477 133.274 60.4263 127.807 55.9679 124.12C52.4012 121.196 49.9809 119.416 48.4524 118.398C47.6881 117.89 47.0512 117.636 46.669 117.381C46.0321 117.127 45.7773 117.127 45.7773 117.127C45.9047 117.254 45.9047 117.254 45.9047 117.381V117.381Z" fill="#D5DAE8"/>
                            <path d="M65.1394 142.683C64.8846 142.556 64.6299 142.556 64.3751 142.429C64.1203 142.302 63.8656 142.302 63.4834 142.175C57.6239 130.35 51 122.849 47.0512 118.526C46.669 118.017 46.2869 117.636 45.9047 117.254C45.9047 117.127 45.9047 117.127 45.7773 117C45.7773 117 46.0321 117 46.669 117.254C47.0512 117.509 47.6881 117.763 48.4524 118.271C52.5286 122.849 59.2798 130.604 65.1394 142.683Z" fill="#EAEEF9"/>
                            <path d="M124.379 114.667L124.761 113.904C123.997 114.159 123.233 114.413 122.723 114.667C119.029 115.939 115.08 118.354 111.386 122.042C110.495 122.932 109.603 123.949 108.711 124.966L108.711 124.966C105.909 128.272 103.489 132.213 101.578 137.172C100.941 138.57 100.51 140.847 100 142.5C108 141 115 136 115 136C117.42 127.736 122.851 117.464 124.379 114.667Z" fill="#D5DAE8"/>
                            <path d="M124.387 114.667L124.769 113.904C124.005 114.159 123 114.5 122 115C117.924 118.814 114.579 124.076 111.139 131.069C109.993 133.485 108.847 136.155 107.7 138.952C107.7 138.952 107.5 139.5 107.5 140C107.755 139.873 109.245 139.127 109.5 139C110.137 137.347 110.502 135.519 111.139 133.993C115.088 125.474 119.547 118.863 124.387 114.667Z" fill="#EAEEF9"/>
                        </g>
                        <path d="M77.5045 51.3655C71.3902 46.4069 68.2056 38.1425 69.3521 30.3867C70.6259 21.6137 76.8676 19.9608 80.0521 21.3594C82.345 22.3766 83.7462 25.428 82.4724 27.7166C80.3069 31.7853 72.0271 30.1324 70.3711 23.1394C69.7342 20.5965 70.3711 17.7993 71.8997 15.6379C74.4473 12.205 79.1605 10.9335 83.3641 10.2978C84.3831 10.2978 85.4022 10.1707 86.2938 10.0435C88.5867 9.78924 91.3891 9.4078 94.3189 9.02637" stroke="#D5DAE8" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M100.691 10.5524L96.7422 12.3324L97.3791 5.59375" fill="#D5DAE8"/>
                        <path d="M126.037 2.2886L124.254 3.30576L103.618 14.8759L98.2678 6.99296L97.3761 5.59436L93.5547 0L122.725 2.03431L126.037 2.2886Z" fill="#EAEEF9"/>
                        <path d="M126.044 2.28945L124.26 3.3066L98.2745 6.9938L97.3828 5.59521L122.732 2.03516L126.044 2.28945Z" fill="#D5DAE8"/>
                        <path d="M21.923 43.0671C23.5956 42.5245 24.5108 40.7312 23.9671 39.0618C23.4235 37.3923 21.6269 36.4788 19.9543 37.0214C18.2817 37.564 17.3665 39.3573 17.9101 41.0268C18.4538 42.6962 20.2504 43.6097 21.923 43.0671Z" fill="#EAEEF9"/>
                        <path d="M28.8708 32.6959C30.0081 32.3269 30.6305 31.1075 30.2608 29.9723C29.8911 28.837 28.6694 28.2159 27.532 28.5848C26.3947 28.9538 25.7723 30.1732 26.142 31.3085C26.5117 32.4437 27.7334 33.0649 28.8708 32.6959Z" fill="#EAEEF9"/>
                        <path d="M55.0377 17.7635C57.0111 15.9635 57.149 12.9074 55.3455 10.9376C53.5421 8.96782 50.4803 8.83024 48.5069 10.6303C46.5334 12.4304 46.3956 15.4865 48.199 17.4563C50.0024 19.426 53.0642 19.5636 55.0377 17.7635Z" fill="#EAEEF9"/>
                        <path d="M154.496 42.554C155.327 41.796 155.385 40.5093 154.626 39.6799C153.867 38.8505 152.578 38.7926 151.747 39.5505C150.916 40.3084 150.858 41.5952 151.617 42.4246C152.376 43.254 153.666 43.3119 154.496 42.554Z" fill="#EAEEF9"/>
                        <path d="M151.124 67.2627V106.423L122 106.5L120.552 106.55H59.2812V36.2394H117.495C118.259 36.1123 119.023 36.1123 119.915 36.1123C120.934 36.1123 121.826 36.1123 122.845 36.2394C124.119 36.3666 125.265 36.4937 126.412 36.748C132.398 38.0195 137.748 41.0709 141.952 45.1396C147.684 50.8611 151.124 58.744 151.124 67.2627Z" fill="url(#paint0_linear_5236_3449)"/>
                        <path d="M126.407 36.873V65.9892C126.407 67.0063 125.642 67.7692 124.623 67.7692C123.604 67.7692 122.84 67.0063 122.84 65.9892V36.2373C123.986 36.3644 125.26 36.6187 126.407 36.873Z" fill="url(#paint1_linear_5236_3449)"/>
                        <path d="M125.264 76.4156C129.133 76.4156 132.27 73.2847 132.27 69.4226C132.27 65.5605 129.133 62.4297 125.264 62.4297C121.395 62.4297 118.258 65.5605 118.258 69.4226C118.258 73.2847 121.395 76.4156 125.264 76.4156Z" fill="#5C71FF"/>
                        <path d="M126.417 75.5259C130.427 75.5259 133.678 72.3951 133.678 68.533C133.678 64.6709 130.427 61.54 126.417 61.54C122.407 61.54 119.156 64.6709 119.156 68.533C119.156 72.3951 122.407 75.5259 126.417 75.5259Z" fill="#D5DAE8"/>
                        <path d="M126.791 75.5259C130.66 75.5259 133.797 72.3951 133.797 68.533C133.797 64.6709 130.66 61.54 126.791 61.54C122.922 61.54 119.785 64.6709 119.785 68.533C119.785 72.3951 122.922 75.5259 126.791 75.5259Z" fill="#EAEEF9"/>
                        <path d="M126.792 71.2043C128.27 71.2043 129.467 70.0089 129.467 68.5343C129.467 67.0597 128.27 65.8643 126.792 65.8643C125.315 65.8643 124.117 67.0597 124.117 68.5343C124.117 70.0089 125.315 71.2043 126.792 71.2043Z" fill="#D5DAE8"/>
                        <path d="M89.7179 64.2091V106.548H27.3008V64.2091C27.3008 50.8589 36.727 39.6702 49.2105 36.873C51.2486 36.3644 53.2867 36.2373 55.4522 36.2373H61.8213C75.8333 36.2373 87.425 46.4089 89.5905 59.8862C89.5905 61.1576 89.7179 62.6834 89.7179 64.2091Z" fill="url(#paint2_linear_5236_3449)"/>
                        <path d="M128.828 34.5869V68.2802C128.828 69.2974 128.064 70.0603 127.045 70.0603C126.026 70.0603 125.262 69.2974 125.262 68.2802V34.5869H128.828Z" fill="white"/>
                        <path d="M76.5541 88.621C76.5541 91.291 74.3886 93.4525 71.7136 93.4525C21.7799 93.4525 24.9645 93.7068 23.3085 92.6896C21.9073 91.7996 21.0156 90.2738 21.0156 88.621C23.9454 55.4362 23.4359 55.8177 25.474 53.9105C27.3847 52.2576 24.7097 52.7662 74.3886 52.7662C75.9172 52.7662 77.3184 53.5291 78.2101 54.5462C79.8661 56.7077 79.4839 55.9448 76.5541 88.621Z" fill="white"/>
                        <path d="M78.7295 55.3092C53.5079 76.6695 54.1448 77.051 50.4508 77.051C46.5019 77.051 46.8841 76.5424 24.4648 55.3092C26.3756 51.7492 25.2291 52.7663 74.5259 52.7663C76.3093 52.7663 77.9652 53.7835 78.7295 55.3092Z" fill="#EAEEF9"/>
                        <path d="M17.9609 62.3011H1.4012C0.63691 62.3011 0 61.6654 0 60.9025C0 60.1396 0.63691 59.5039 1.4012 59.5039H17.9609C18.7251 59.5039 19.3621 60.1396 19.3621 60.9025C19.3621 61.6654 18.7251 62.3011 17.9609 62.3011Z" fill="url(#paint3_linear_5236_3449)"/>
                        <path d="M17.197 70.1849H7.64339C6.8791 70.1849 6.24219 69.5492 6.24219 68.7863C6.24219 68.0234 6.8791 67.3877 7.64339 67.3877H17.197C17.9613 67.3877 18.5982 68.0234 18.5982 68.7863C18.5982 69.5492 17.9613 70.1849 17.197 70.1849Z" fill="url(#paint4_linear_5236_3449)"/>
                        <path d="M16.3059 77.6859H10.9559C10.1916 77.6859 9.55469 77.0501 9.55469 76.2873C9.55469 75.5244 10.1916 74.8887 10.9559 74.8887H16.4333C17.1976 74.8887 17.8345 75.5244 17.8345 76.2873C17.8345 77.0501 17.1976 77.6859 16.3059 77.6859Z" fill="url(#paint5_linear_5236_3449)"/>
                        <path d="M69.2935 77.3047H63.5614C63.1792 77.3047 62.9245 77.559 62.9245 77.9404L62.7971 78.7033L62.5423 80.7376L62.4149 82.1362L62.1602 83.6619C62.1602 83.7891 62.1602 83.9162 62.1602 84.0434C62.2875 84.2976 62.5423 84.5519 62.7971 84.5519H68.5293C68.9114 84.5519 69.1662 84.2976 69.1662 83.9162L69.9305 78.1947C70.0578 77.6861 69.8031 77.3047 69.2935 77.3047ZM67.8923 82.5176C67.8923 82.6448 67.765 82.899 67.5102 82.899H64.7078H64.3256C64.0709 82.899 63.9435 82.6448 63.9435 82.5176L64.0709 81.5005L64.1983 80.1019L64.3256 79.4661C64.3256 79.339 64.453 79.0847 64.7078 79.0847H67.8923C68.1471 79.0847 68.2745 79.339 68.2745 79.4661L67.8923 82.5176Z" fill="#2D76F9"/>
                        <path d="M64.7108 78.9586C64.456 78.9586 64.3287 79.0858 64.3287 79.3401L64.2013 79.9758C63.5644 80.3572 63.0548 80.6115 62.5453 80.7387C62.1632 80.8658 61.781 80.8658 61.3989 80.8658C60.2524 80.8658 59.3608 80.4844 58.5965 80.1029C57.45 79.5944 57.1953 79.5944 56.8131 79.9758C56.431 80.3572 55.9215 80.3572 55.5393 80.1029C55.1572 79.7215 55.1572 79.2129 55.4119 78.8315C56.6857 77.3058 58.2143 77.9415 59.3608 78.4501C60.5072 78.9586 61.3989 79.4672 62.8001 78.7044C62.9275 78.5772 63.1822 78.5772 63.3096 78.4501C63.6918 78.1958 64.3287 78.3229 64.5834 78.7044C64.7108 78.7044 64.7108 78.8315 64.7108 78.9586Z" fill="#2D76F9"/>
                        <path d="M64.7178 82.7733L64.5904 82.9004C63.6987 83.5361 62.9344 83.7904 62.2975 83.9176C62.0427 83.9176 61.788 83.9176 61.6606 83.9176C60.5142 83.9176 59.6225 83.5361 58.8582 83.1547C57.7118 82.6461 57.457 82.6461 57.0748 83.0276C56.6927 83.409 56.1832 83.409 55.801 83.1547C55.4189 82.7733 55.4189 82.2647 55.6736 81.8833C56.9475 80.3575 58.4761 80.9932 59.4951 81.5018C60.3868 81.8833 61.2785 82.2647 62.2975 82.0104C62.6797 81.8833 62.9344 81.7561 63.4439 81.5018C63.5713 81.3747 63.8261 81.3747 64.0809 81.3747L63.9535 82.3918C63.9535 82.6461 64.0809 82.7733 64.3356 82.7733H64.7178Z" fill="#2D76F9"/>
                        <path opacity="0.5" d="M89.7257 70.0599L89.3436 59.7612C87.1781 46.411 75.5863 36.1123 61.5743 36.1123H55.2052C53.0397 36.1123 51.0016 36.3666 48.9635 36.748L48.1992 37.3838L63.9946 102.228L89.5983 103.626V70.0599H89.7257Z" fill="url(#paint6_linear_5236_3449)"/>
                        <path d="M146.023 33.4408C146.533 33.8223 146.278 34.7123 145.514 34.7123H128.954H125.133V20.8535H145.514C146.151 20.8535 146.533 21.6164 146.023 22.125L140.673 26.575C139.909 27.2107 139.909 28.355 140.673 28.9908L146.023 33.4408Z" fill="url(#paint7_linear_5236_3449)"/>
                        <path d="M89.7335 59.7602C87.568 46.41 75.7215 36.1113 61.7095 36.1113H55.3404C53.1749 36.1113 51.1368 36.3656 49.0987 36.7471C40.182 38.7814 32.9212 45.0115 29.3545 53.1487C29.7367 52.8944 30.3736 52.7673 31.6474 52.6401C35.0867 45.6472 41.5832 40.3071 49.4809 38.5271C51.2642 38.1456 53.3023 37.8914 55.213 37.8914H61.5821C74.5751 37.8914 85.4025 47.1729 87.4407 59.8874C87.6954 61.1588 87.8228 62.5574 87.8228 63.956V104.388H29.2271V93.1993C28.2081 93.1993 27.6986 93.0721 27.3164 92.945V106.295H90.1157V64.2103C90.1157 62.6846 89.9883 61.1588 89.7335 59.7602Z" fill="#96A7FF"/>
                        <path d="M90.1192 102.099V106.549H4.77334C3.49952 106.549 2.48047 105.532 2.48047 104.387C2.48047 103.116 3.49952 102.099 4.77334 102.099H90.1192Z" fill="#7894FF"/>
                        <defs>
                            <linearGradient id="paint0_linear_5236_3449" x1="59.2907" y1="71.3717" x2="151.146" y2="71.3717" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#1D5BF8"/>
                                <stop offset="1" stop-color="#609FFF"/>
                            </linearGradient>
                            <linearGradient id="paint1_linear_5236_3449" x1="124.614" y1="63.3972" x2="124.614" y2="46.5375" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#4F6AFF"/>
                                <stop offset="1" stop-color="#657EFF" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint2_linear_5236_3449" x1="27.2593" y1="71.325" x2="89.7401" y2="71.325" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#627AFF"/>
                                <stop offset="1" stop-color="#273DD1"/>
                            </linearGradient>
                            <linearGradient id="paint3_linear_5236_3449" x1="-3.58026" y1="58.9825" x2="-3.33782" y2="62.4267" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E9ECF6"/>
                                <stop offset="1" stop-color="white"/>
                            </linearGradient>
                            <linearGradient id="paint4_linear_5236_3449" x1="3.95742" y1="66.8663" x2="4.33462" y2="70.2859" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E9ECF6"/>
                                <stop offset="1" stop-color="white"/>
                            </linearGradient>
                            <linearGradient id="paint5_linear_5236_3449" x1="8.02365" y1="74.3673" x2="8.57838" y2="77.7372" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#E9ECF6"/>
                                <stop offset="1" stop-color="white"/>
                            </linearGradient>
                            <linearGradient id="paint6_linear_5236_3449" x1="88.1468" y1="69.1758" x2="61.7833" y2="70.4042" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#0C1E82"/>
                                <stop offset="1" stop-color="#001DB5" stop-opacity="0"/>
                            </linearGradient>
                            <linearGradient id="paint7_linear_5236_3449" x1="125.269" y1="27.7249" x2="146.325" y2="27.7249" gradientUnits="userSpaceOnUse">
                                <stop stop-color="#64BEFF"/>
                                <stop offset="1" stop-color="#0C8AFF"/>
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className={style.contactTextTitle}>
                        Расскажите<br/> о вашем проекте
                    </div>
                    <div className={style.contactTextDescription}>
                        Поделитесь с нами информацией, чем мы можем быть полезны: реализовать
                        идею или выделить разработчиков для ИТ-команды.
                        <br/> Чем больше вы нам расскажете —
                        тем продуктивнее будет дальнейшее обсуждение.
                    </div>
                </div>
                <form className={style.contactForm}>
                    <div className={style.formInput}>
                        <input className={style.contactFormControl} type="email" name="email" id="email" autoComplete="on" value="" />
                        <label className={style.formLabel} htmlFor="email">Email</label>
                        <label className={style.formError}></label>
                    </div>
                    <div className={style.formInput}>
                        <input className={style.contactFormControl} type="tel" name="phone" id="phone" value="" />
                        <label className={style.formLabel} htmlFor="phone">Телефон</label>
                        <label className={style.formError}></label>
                    </div>
                    <div className={style.contactFormTextAreaFiles}>
                        <textarea className={style.contactFormTextAreaControl} name="message" id="message" data-dl-input-translation="true"></textarea>
                        <label className={style.formLabel} htmlFor="message">Сообщение</label>
                        <div className={style.formFiles}></div>
                        <label className={style.formLabelImg} htmlFor="file">
                            <svg width="28" height="29" viewBox="0 0 28 29" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M17.4994 9.66699L8.38756 18.9301C8.05937 19.2583 7.875 19.7034 7.875 20.1675C7.875 20.6317 8.05937 21.0768 8.38756 21.405C8.71575 21.7332 9.16087 21.9175 9.625 21.9175C10.0891 21.9175 10.5342 21.7332 10.8624 21.405L21.7242 10.3919C22.0492 10.0669 22.307 9.68102 22.4829 9.25638C22.6588 8.83174 22.7494 8.37662 22.7494 7.91699C22.7494 7.45737 22.6588 7.00224 22.4829 6.5776C22.307 6.15296 22.0492 5.76712 21.7242 5.44212C21.3992 5.11711 21.0134 4.85931 20.5888 4.68341C20.1641 4.50752 19.709 4.41699 19.2494 4.41699C18.7897 4.41699 18.3346 4.50752 17.91 4.68341C17.4853 4.85931 17.0995 5.11711 16.7745 5.44212L5.91269 16.4552C4.92812 17.4398 4.375 18.7751 4.375 20.1675C4.375 21.5599 4.92812 22.8953 5.91269 23.8798C6.89726 24.8644 8.23261 25.4175 9.625 25.4175C11.0174 25.4175 12.3527 24.8644 13.3373 23.8798L22.3119 14.917" stroke="#EEF3FF" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </label>
                        <input className={style.formFile} type="file" id="file" multiple/>
                    </div>
                    <div className={style.contactFormSubmission}>
                        <button className={style.contactFormButton} type={"button"}>Отправить</button>
                        <p className={style.contactFormDescription}>Нажимая “Отправить”, Вы даете согласие на обработку персональных данных</p>
                    </div>
                </form>
            </div>
        </section>
    );
}

export default Form;