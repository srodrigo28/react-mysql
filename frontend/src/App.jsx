import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Produtos } from "./views/Produtos";
import { Usuarios } from "./views/Usuarios";
import { ProdutosAdmin } from "./views/ProdutosAdmin";
import { FormProduto } from "./views/ProdutosAdmin/FormProduto";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/usuarios" element={<Usuarios />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/admin/produtos" element={<ProdutosAdmin />} />
        <Route path="/admin/produtos/novo" element={ <FormProduto /> } />
      </Routes>
    </BrowserRouter>
  );
}

export default App
