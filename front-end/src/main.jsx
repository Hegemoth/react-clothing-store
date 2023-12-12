import "./styles/theme.css";
import "./styles/globals.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Layout } from "./components/Layout/Layout.jsx";
import { Cart } from "./views/Cart/Cart";
import { Favourites } from "./views/Favourites/Favourites";
import { MainPage } from "./views/MainPage/MainPage.jsx";
import { ProductsList } from "./views/ProductsList/ProductsList.jsx";
import { ProductDetails } from "./views/ProductDetails/ProductDetails.jsx";
import { mainPageLoader } from "./api/mainPageLoader.js";
import { productListLoader } from "./api/productListLoader.js";
import { productDetailsLoader } from "./api/productDetailsLoader.js";
import { addProductsToFavouritesAction } from "./api/addProductsToFavouritesAction.js";
import { favouritesLoader } from "./api/favouritesLoader.js";
import { deleteFavouriteAction } from "./api/deleteFavouriteAction.js";

const router = createBrowserRouter([
	{
		path: "/add-to-favourites/:productId",
		action: addProductsToFavouritesAction,
	},
	{
		path: "/delete-from-favourites/:favouriteId",
		action: deleteFavouriteAction,
	},
	{
		path: "",
		element: <Layout />,
		children: [
			{
				path: "/koszyk",
				element: <Cart />,
			},
			{
				path: "/ulubione",
				element: <Favourites />,
				loader: favouritesLoader,
			},
			{
				path: "/:gender?",
				element: <MainPage />,
				loader: mainPageLoader,
			},
			{
				path: "/:gender/:category/:subcategory?",
				element: <ProductsList />,
				loader: productListLoader,
			},
			{
				path: "/:gender/:category/:subcategory/:productId",
				element: <ProductDetails />,
				loader: productDetailsLoader,
			},
		],
	},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router}></RouterProvider>
	</React.StrictMode>
);
