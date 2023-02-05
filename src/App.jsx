import { Box } from "@mui/system";
import "./css/main.css";
import { Routes, Route } from "react-router-dom";
import {
  Navbar,
  Home,
  About,
  Certificate,
  Blog,
  BlogPage,
  Product,
  CategoryPage,
  PersonneManagement,
  ContactUs,
  Search,
  SearchProducts,
  Footer,
} from "./Imports/ImportPages";
import OrthopedicProducts from "./pages/Category/OrthopedicProducts";
import LiposuctionCorsets from "./pages/Category/LiposuctionCorsets";
import AntiVaricoseProductsOrder from "./pages/Category/AntiVaricoseProductsOrder";
import AntiVaricoseProducts from "./pages/Category/AntiVaricoseProducts";

export default function App() {
  return (
    <Box className="w-full min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/certificate" element={<Certificate />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/:id" element={<BlogPage />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/category/1" element={<OrthopedicProducts />} />
        <Route path="/category/2" element={<AntiVaricoseProducts />} />
        <Route path="/category/3" element={<LiposuctionCorsets />} />
        <Route path="/category/4" element={<AntiVaricoseProductsOrder />} />
        <Route path="/category-page/:id/:page" element={<CategoryPage />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/personne-management" element={<PersonneManagement />} />
        <Route path="/search" element={<Search />} />
        <Route path="/search-products/:id" element={<SearchProducts />} />
      </Routes>
      <Footer />
    </Box>
  );
}
