import {create} from 'zustand';

export const useProductStore = create((set) => ({
  products: [],
  setProducts: (products) => set({ products }),

  createProduct: async (newProduct) => {
    if (!newProduct.name || !newProduct.price ||
      !newProduct.image) {
      console.error("All fields are required");
      return;
    }
    const res = await fetch("/api/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(newProduct)
    });

    const data = await res.json();
    set((state) => ({
      products: [...state.products, data.product]
    }));
    return { success: true, message: "Product created successfully" };
  },

  fetchProducts: async () => {
    const res = await fetch("/api/products");
    const data = await res.json();
    set({ products: data.products });
  },

  deleteProduct: async (pid) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "DELETE"
    });
    const data = await res.json();
    if (data.success) {
      //update the ui immediately needing a refresh
      set((state) => ({
        products: state.products.filter((product) => product._id !== pid)
      }));
      return { success: true, message: "Product deleted successfully" };
    } else {
      return { success: false, message: data.message };
    }
  },

  updateProduct: async (pid, updatedProduct) => {
    const res = await fetch(`/api/products/${pid}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(updatedProduct)
    });
    const data = await res.json();
    if (data.success) {
      set((state) => ({
        products: state.products.map((product) =>
          product._id === pid ? data.product : product
        )
      }));
      return { success: true, message: "Product updated successfully" };
    } else {
      return { success: false, message: data.message };
    }
  }

}));

