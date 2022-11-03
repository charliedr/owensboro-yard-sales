import Header from './Header';
import Navbar from './Navbar';

export default function Layout({children}){
    return(
        <div className=":mx-0 md:max-w-2xl md:mx-auto font-poppins">
            <Header />
            <main className="mx-6 mt-6 mb-24">{children}</main>
            <Navbar />
        </div>
    )
}