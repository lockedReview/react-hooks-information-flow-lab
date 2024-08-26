import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import Header from "./Header"

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [isInCart, setIsInCart] = useState(false);

  function handleAddToCartClick() {
    setIsInCart((isInCart) => !isInCart);
  }


  function onDarkModeClick() {
    setIsDarkMode((isDarkMode) => !isDarkMode);
  }

  return (
    <div className={"App " + (isDarkMode ? "dark" : "light")}>
      <Header onDarkModeClick={onDarkModeClick} isDark= {isDarkMode} />

      <ShoppingList items={itemData} />
    </div>
  );
}

export default App;
