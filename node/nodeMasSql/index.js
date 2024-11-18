// npm ini -y npm express i npm i mysql2 nodemon "archivename" node "archivename" node --watch archivename PREGUNTAR(npm i -g nodemon) 
const express = require("express");
// const db = require("./config/database")
const app = express();
const PORT = 3000;
const mysql = require("mysql2");
app.use(express.json());

//explicar en el readme
const db = mysql.createConnection({
  host: "localhost",
  port:3307,
  user: "mario",
  password: "marioestatriste123",
  database: "expressDB", //use expressDB
}); //creamos la configuración para conectarnos a la bd

db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database:", err);
        return;
    }
    console.log("Connected to the database successfully!");
});
app.use(express.json());


app.get("/createdb", (req, res) => {
    let sql = "CREATE DATABASE expressDB";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Database created...");
    });
  });

  app.get("/createpoststable", (req, res) => {
    let sql =
      "CREATE TABLE products ( id INT AUTO_INCREMENT, name_product VARCHAR(50), price INT, PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Posts table created...");
    });
  });
   
  app.get("/createpoststable2", (req, res) => {
    let sql =
      "CREATE TABLE categories( id INT AUTO_INCREMENT, name_category VARCHAR(50), description VARCHAR(50), PRIMARY KEY(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Posts table created...");
    });
  });

  app.get("/createpoststable3", (req, res) => {
    let sql =
      "CREATE TABLE pertenecer( id INT AUTO_INCREMENT, products_id INT, categories_id INT, PRIMARY KEY(id), FOREIGN KEY(products_id) REFERENCES products(id) ON DELETE CASCADE, FOREIGN KEY(categories_id) REFERENCES categories(id))";
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Posts table created...");
    });
  });



  // ejerccio2
  // usado para que te cargue en la db
  app.post("/insert2products", (req, res) => {
    console.log(req.body);
    let sql = `INSERT INTO products (name_product, price) values
            ('${req.body.name}', '${req.body.price}');`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Post added...");
    });
  });

  app.post("/insert2categories", (req, res) => {
    console.log(req.body);
    let sql = `INSERT INTO categories (name_category, description) values
            ('${req.body.name}', '${req.body.description}');`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.send("Post added...");
    });
  });


// ejercicio3
app.put('/updateProduct/:id',(req,res)=>{
    let sql = `UPDATE products SET name_product = '${req.body.name}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Post updated...')
    })
  })

  app.put('/updateCategory/:id',(req,res)=>{
    let sql = `UPDATE categories SET name_category = '${req.body.name}' WHERE id = ${req.params.id}`;
    db.query(sql, (err,result)=> {
      if(err) throw err;
      res.send('Post updated...')
    })
  })



  // ejericio4
  app.get("/mostraProd", (req, res) => {
    let sql = `SELECT * FROM products`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
         res.send(result);
      res.send({
        description: "Aqui tienes las publicaciones",
        posts: result,
      });
    });
  });

  app.get("/mostraCat", (req, res) => {
    let sql = `SELECT * FROM categories`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
         res.send(result);
      res.send({
        description: "Aqui tienes las publicaciones",
        posts: result,
      });
    });
  });


  // Este huele mal
  app.get("/mostraTot", (req, res) => {
    let sql = `SELECT name_product, name_category FROM pertenecer INNER JOIN categories ON categories.id = pertecener.categories_id INNER JOIN products ON products.id = pertenecer.products_id`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
         res.send(result);
      res.send({
        description: "Aqui tienes las publicaciones",
        posts: result,
      });
    });
  });

  app.get("/mostraProd/:id", (req, res) => {
    let sql = `SELECT * FROM products WHERE id = ${req.params.id} `;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
         res.send(result);
      res.send({
        description: "Aqui tienes las publicaciones",
        posts: result,
      });
    });
  });
  
  app.get("/mostraProdDesc", (req, res) => {
    let sql = `SELECT * FROM products order by id desc`;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
         res.send(result);
      res.send({
        description: "Aqui tienes las publicaciones",
        posts: result,
      });
    });
  });

  app.get("/mostraCat/:id", (req, res) => {
    let sql = `SELECT * FROM categories WHERE id = ${req.params.id} `;
    db.query(sql, (err, result) => {
      if (err) throw err;
      console.log(result);
         res.send(result);
      res.send({
        description: "Aqui tienes las publicaciones",
        posts: result,
      });
    });
  });


  app.get("/mostraProdName/:name_product", (req, res) => {
    let sql = `SELECT * FROM products WHERE name_product = '${req.params.name_product}' `;
    db.query(sql, (err, result) => {
      if (err) throw err;
         res.send(result);
    });
  });

  app.delete("/deleteProd/:id",(req,res)=>{
    let sql = `DELETE FROM products WHERE id = ${req.params.id};`
    db.query(sql,(err,result)=>{
        if(err)throw err;
        res.send("Post deleted")
    })
})

app.listen(PORT) 

