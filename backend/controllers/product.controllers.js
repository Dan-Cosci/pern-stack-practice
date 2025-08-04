import { sql } from "../database/db.js";

export const getProducts = async (req, res) => {
  try {
    const data = await sql`
    SELECT * FROM products
    ORDER BY created_at DESC
    `;

    res.status(200).json({success: true, products: data });
  } catch (error) {
    console.error("ERROR getting data: "+error);
  }
};

export const createProduct = async (req, res) => {
  
  const { name, image, price } = req.body
  if (!name || !image|| !price) {
    res.status(400).json({ success:false, message:"All fields are required" });
  }

  try {
    const result = await sql`
      INSERT INTO products (name, image, price)
      VALUES (${name}, ${image}, ${price})
      RETURNING *  
    `;

    res.status(201).json({success:true, message:"Product Added Successfully", product:result[0]});

  } catch (error) {
    console.error("ERROR creating product: "+error);
    res.status(500).json({ success: false, message:"Internal Server Error" });
  }

};

export const getProduct = async (req, res) => {

  const {id} = req.params;

  try {
    const result = await sql`SELECT * FROM products WHERE id = ${id}`;
    
    res.status(201).json({success:true, product:result[0]});

  } catch (error) {
    console.error("ERROR getting product: "+error);
    res.status(500).json({ success: false, message:"Internal Server Error" });
  }
};

export const updateProduct = async (req, res) => {
  const {id} = req.params;
  const { name, image, price } = req.body;

  try {
    const result = await sql`
      UPDATE products 
      SET name=${name}, image=${image}, price=${price} 
      WHERE id = ${id}`;
    
    res.status(201).json({success:true, product:result[0]});

  } catch (error) {
    console.error("ERROR getting product: "+error);
    res.status(500).json({ success: false, message:"Internal Server Error" });
  }
};

export const deleteProduct = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await sql`DELETE FROM products WHERE id = ${id}`;
    if (result.length === 0) {
      res.status(404).json({success:false, message:"Product Not Found"})
    }
    
    res.status(200).json({success:true, product:result[0]});

  } catch (error) {
    console.error("ERROR getting product: "+error);
    res.status(500).json({ success: false, message:"Internal Server Error" });
  }

};
