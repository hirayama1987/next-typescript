import Header from './Header';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <>
      <Header />
      <main>
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          {children}
        </div>
      </main>
      <Footer></Footer>
    </>
  );
}