import Navigation from "./Navigation";

export default function Layout({children}) {
  return (
    <>
        <Navigation />
        {children}
        <footer class="bg-dark text-center text-white fixed-bottom">
          <div class="text-center p-2">
            © 2022 Copyright: Ing. Sistemas - Tupiza
          </div>
        </footer>
    </>
  )
}
