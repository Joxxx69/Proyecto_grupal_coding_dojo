import "./App.css";
import Main from "./views/Main";
import React from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import Recipes from "./views/RecipesTimes";
import PlatesByCategory from "./views/PlatesByCategory";
import AllRecipes from "./views/AllRecipes";
import SearchRecipe from "./views/SearchRecipe";
import RecipeOne from "./views/Recipe";
import RecipesFavorites from "./views/RecipesFavorites";
import Region from "./views/Region";
import Signup from "./views/Signup";
import AddRecipe from "./views/AddRecipe";
import Signin from "./views/Signin";
import {CookiesProvider} from 'react-cookie'
import useAuth, {AuthProvider} from './hooks/useAuth'
import Navbar from "./components/Navbar";



function App() {
  return (
    <div className="App">
      <CookiesProvider>
        <AuthProvider>
          <Routes>
            <Route path="/" element={<Main />}></Route>
            <Route path="/recipes/times/:gte/:lte" element={<Recipes />}></Route>
            <Route path="/add-recipe" element={<RequireAuth permission={'admin'} ><AddRecipe /></RequireAuth>}></Route>
            <Route  path="/recipes/:categoryName" element={<PlatesByCategory />} ></Route>
            <Route path="/all-recipes" element={<AllRecipes />}></Route>
            <Route path="/one/recipe/:id" element={<RecipeOne />}></Route>
            <Route path="/search/recipe/:name" element={<SearchRecipe />}></Route>
            <Route path="/recipes/random/:regionName" element={<Region/>} ></Route>
            <Route path="/favorites/recipes/list" element={<RecipesFavorites/>} ></Route>
            <Route path="/signup" element={<Signup/>} />
            <Route path="/signin" element={<Signin/>}></Route>
            <Route path="/favorites/recipes/list"element={<RecipesFavorites />}></Route>
          </Routes>
        </AuthProvider>
      </CookiesProvider>
    </div>

  );
}

function RequireAuth({children,permission}) {
  const {isAuthed, hasPermissions} =useAuth();
  const location = useLocation();

  const getAllowedComponent =()=>{
    console.log('estos son los permisos',permission)
    if(hasPermissions(permission)){
      return children;
    }else{
      return (

          <Navbar>
            <div className='font-weight-bold h1 text-center'>access denied</div>
          </Navbar>

      );
    }
  }

  console.log('este es location.pathname', location.pathname)
  return (isAuthed())? (
    getAllowedComponent()
  ) : (
    <Navigate to='/signin' replace state={{path: location.pathname}}></Navigate>
  )

}
export default App;
