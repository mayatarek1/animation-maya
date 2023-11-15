import "../app/globals.css";
import Footer from "./footer";
import Header from "./header";
import 'animate.css';

export default function Layout({ children}) {
    return (
        <div>
            <Header></Header>
            <div>
            {children}
            </div>
            <Footer></Footer>
            </div>

    );
}