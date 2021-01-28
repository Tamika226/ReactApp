import './App.css';
import Header from "./components/header";
import Footer from "./components/footer";
import Layout from "./components/layout";


function App() {
    return (
        <>
            <Header title="This is title" description="This is Description!"/>
            <Layout title="This is title" description="This is Description!" id="1" urlBg colorBg/>
            <Layout title="This is title" description="This is Description!" id="2" urlBg colorBg hideBackground/>
            <Layout title="This is title" description="This is Description!" id="3" urlBg colorBg/>
            <Footer/>
        </>
    );
}

export default App;
