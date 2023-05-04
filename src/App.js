import mainStyle from "./static/css/mainStyle.module.scss";
import "./static/css/normalize.scss";
import Header from "./components/layout/header/header.js";
import Footer from "./components/layout/footer/footer.js";
import Project from "./views/Project/Project.jsx";
import Form from "./components/layout/form/form.js";
import Breadcrumbs from "./components/layout/breadcrumbs/breadcrumbs";
import cx from 'classnames';


function App() {
  return (
    <div className={mainStyle.pageContent}>
      <Header />
      <main className={mainStyle.main}>
          <Breadcrumbs />
          <Project />
          <Form />
      </main>
      <Footer />
    </div>
  );
}


export default App;