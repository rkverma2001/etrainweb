import React, { createContext, useCallback, useContext, useEffect, useState } from "react";
import api from "@/services/api";
import { useAuth } from "@/components/auth/AuthContext";

type CartItemLike = { quantity?: number };

type CartContextType = {
  /** Total quantity of all items in the cart (shown on the navbar badge). */
  cartCount: number;
  /** Re-fetch the cart from the server, e.g. after adding an item. */
  refreshCart: () => Promise<void>;
  /** Set the count directly from a list of cart items already in memory. */
  syncCartCount: (items: CartItemLike[]) => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const countItems = (items: CartItemLike[]) =>
  items.reduce((sum, item) => sum + (Number(item.quantity) || 1), 0);

export const CartProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { isAuthenticated } = useAuth();
  const [cartCount, setCartCount] = useState(0);

  const refreshCart = useCallback(async () => {
    if (!localStorage.getItem("authToken")) {
      setCartCount(0);
      return;
    }
    try {
      const { data } = await api.get("/cart");
      setCartCount(countItems(data?.items ?? []));
    } catch {
      // Keep the last known count if the request fails.
    }
  }, []);

  const syncCartCount = useCallback((items: CartItemLike[]) => {
    setCartCount(countItems(items));
  }, []);

  // Load on login, clear on logout.
  useEffect(() => {
    if (isAuthenticated) {
      refreshCart();
    } else {
      setCartCount(0);
    }
  }, [isAuthenticated, refreshCart]);

  return (
    <CartContext.Provider value={{ cartCount, refreshCart, syncCartCount }}>
      {children}
    </CartContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useCart = () => {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used inside CartProvider");
  return ctx;
};
