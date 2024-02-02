import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";
import Page_404 from "./Page_404";
import Contact from "./Contact";
import Page_about from "./Page_about";
import Page_Expert from "./Page_Expert";
import Blog_Single from "./Blog_Single";
function App() {

  return (
    <>
          
       <Routes>
        <Route index element={<Home></Home>} />
        <Route path="/Blog" element={<Blog></Blog>} />
        <Route path="/Page_404" element={<Page_404></Page_404>} />
        <Route path="/Contact" element={<Contact></Contact>} />
        <Route path="/Page_about" element={<Page_about></Page_about>} />
        <Route path="/Page_Expert" element={<Page_Expert></Page_Expert>} />
        <Route path="/Blog_Single" element={<Blog_Single></Blog_Single>} />
      </Routes>
   

    </>
  )
}


export default App;
