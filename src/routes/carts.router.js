import { Router } from "express";
import CartManager from "../managers/CartManager.js";
import ProductManager from "../managers/ProductManager.js";

const router = Router();

const cartManager = new CartManager("./src/data/carts.json");
const productManager = new ProductManager("./src/data/products.json");

// GET /api/carts/:cid lee el carrito por ID
router.get("/:cid", async (req, res) => {
  try {
    const cid = Number(req.params.cid);

    if (isNaN(cid)) {
      return res.status(400).json({ error: "ID inválido" });
    }

    const cart = await cartManager.getCartById(cid);

    if (!cart) {
      return res.status(404).json({ error: "Carrito no encontrado" });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: "Error al leer el carrito" });
  }
});

// POST
router.post("/", async (req, res) => {
  try {
    const newCart = await cartManager.createCart();
    res.status(201).json(newCart);
  } catch (error) {
    res.status(500).json({ error: "Error al crear el carrito" });
  }
});

// POST /api/carts/:cid/product/:pid
router.post("/:cid/product/:pid", async (req, res) => {
  try {
    const cid = Number(req.params.cid);
    const pid = Number(req.params.pid);

    // Validamos que los IDs sean números válidos
    if (isNaN(cid) || isNaN(pid)) {
      return res.status(400).json({ error: "IDs inválidos" });
    }

    // Validamos que el carrito exista
    const cart = await cartManager.getCartById(cid);
    if (!cart) {
      return res.status(404).json({ error: "Carrito no encontrado" });
    }

    // Validamos que el producto exista
    const product = await productManager.getProductById(pid);
    if (!product) {
      return res.status(404).json({ error: "Producto no encontrado" });
    }

    // Agregamos el producto al carrito (o incrementamos quantity si ya existe)
    const updatedCart = await cartManager.addProductToCart(cid, pid);

    res.json(updatedCart);
  } catch (error) {
    res.status(500).json({ error: "Error al agregar producto al carrito" });
  }
});

export default router;
