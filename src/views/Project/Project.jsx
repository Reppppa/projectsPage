import React, {useState} from 'react';
import mainStyle from '../../static/css/mainStyle.module.scss';
import style from '../Project/Project.module.scss';
import cx from 'classnames'


const getData = () =>  {
    return fetch("https://backend.cyberia.studio/api/v1/projects", {
        method: 'GET',
        mode: 'cors',
    }).then(response => response.json())
        .catch((error) => console.log(error));
}

const getCatData = () =>  {
    return fetch("https://backend.cyberia.studio/api/v1/project-categories", {
        method: 'GET',
        mode: 'cors',
    }).then(response => response.json())
        .catch((error) => console.log(error));
}



const Project = () => {

    const [fieldsProject, setFieldsProject] = useState([{categories: '', name: '', image: '', description: ''}]);
    const [a, b] = useState([{categories: '', name: '', image: '', description: ''}]);
    const [fieldsCategories, setFieldsCategories] = useState( [{name: ''}]);

    let data = getData();
    let catData = getCatData();

    const getNewProject = (evt) => {
        const category = evt.target.dataset.categories;
        const arr = [];

        document.querySelectorAll(`.${style.blockDirectionItem}`).forEach((btn) => {
            btn.classList.remove(style.active);
            console.log(btn)
        });

        evt.target.classList.add(style.active);

        a.forEach((response) => {
            response["categories"].forEach((item) => {
                if (category === item.name) {
                    arr.push(response);
                    console.log(item.name)
                }
            })
        });
        setFieldsProject(arr);
    };

    React.useEffect(() => {
        catData.then((item) => {
            setFieldsCategories(item.items);
        });
        data.then((item) => {
            b(item.items);
            setFieldsProject(item.items);
        });
    },[false]);

    return (
        <section className={cx(mainStyle.containerXxl, style.block)}>
            <div className={style.blockHeader}>
                <h1 className={style.blockTitle}>Проекты</h1>
            </div>
            <div className={style.blockBody}>
                <ul className={style.blockDirection}>

                    {fieldsCategories.map((field, index) => (
                        <li key={index} className={ cx (style.blockDirectionItem) } data-categories={field.name} onClick={getNewProject}>
                            {field.name}
                        </li>
                    ))}

                </ul>
                <div className={style.projectList}>

                    {fieldsProject.map((field, index) => (
                        <a key={index} href="" className={ cx (style.projectItem) } data-categories={field.categories}>

                            <img className={style.projectItemImage} src={field.image} alt=""/>
                            <svg className={style.projectItemIcon} width="24" height="24" viewBox="0 0 24 24"
                                 fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="24" height="5.24892" rx="0.886243" transform="matrix(1 0 0 -1 0 24)"
                                      fill="white"/>
                                <rect width="13.5" height="5.24892" rx="0.886243"
                                      transform="matrix(1 0 0 -1 10.4961 13.5054)" fill="white"/>
                                <rect width="23.9951" height="5.24996" rx="0.886243"
                                      transform="matrix(0 1 1 0 0 0.00146484)" fill="white"/>
                                <rect width="13.4972" height="5.25" rx="0.886243" transform="matrix(0 1 1 0 10.4961 0)"
                                      fill="white"/>
                            </svg>
                            <span className={style.projectItemTitle}>{field.title}</span>
                            <span className={style.projectItemDescription}>{field.description}</span>
                        </a>
                    ))}

                </div>
            </div>
        </section>
    );
}

export default Project;
