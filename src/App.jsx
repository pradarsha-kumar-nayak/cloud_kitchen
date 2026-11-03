import { Footer } from "./components/home/footer";
import { HomePage } from "./components/home/Homepage"
import { Navbar } from "./components/home/navbar";
import {Routes,Route} from "react-router-dom";
import { VisitMore } from "./components/visit-more/visit-more";
import { ViewDetails } from "./components/visit-more/view-details";
import { Address } from "./components/address/address";
import { Admin } from "./components/admin/admin";
import { AddItem } from "./components/admin/additem";
import { UpdateItm } from "./components/admin/updateitem";
import { Signup } from "./components/users/signup";
import { Login } from "./components/users/login";
import { Subscription } from "./components/subscription/subscription";
import { Normalsub } from "./components/subscription/normal-sub";
import { Specialsub } from "./components/subscription/special-sub";
import { SubAddress } from "./components/subscription/sub-address";
import { Seesub } from "./components/admin/seesubscriber";
import { Search } from "./components/searchItm/search";

function App() {
 
  return (
    <>
    <Navbar/>
      <Routes>
         <Route path="/" element={ <HomePage/>}/>
         <Route path="/visitMore"element={<VisitMore/>}/>
         <Route path="/viewdetails/:id" element={<ViewDetails/>}></Route>
         <Route path="/address" element={<Address/>}></Route>
         <Route path="/admin" element={<Admin/>}></Route>
         <Route path="/additem" element={<AddItem/>}></Route>
         <Route path="/updateitem/:id" element={<UpdateItm></UpdateItm>}></Route>
         <Route path="/signup" element={<Signup></Signup>}></Route>
         <Route path="/Login" element={<Login></Login>}></Route>
         <Route path="/subscription" element={<Subscription></Subscription>}></Route>
         <Route path="/normal" element={<Normalsub></Normalsub>}></Route>
         <Route path="/special" element={<Specialsub></Specialsub>}></Route>
         <Route path="/subaddress" element={<SubAddress></SubAddress>}></Route>
         <Route path="/seesub" element={<Seesub></Seesub>}></Route>
         <Route path="/search/:itm" element={<Search></Search>}></Route>
      </Routes>
     <Footer/>
    </>
  )
}

export default App
