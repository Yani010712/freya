const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const CupsData = require('./data/cup.model');
const path = require('path');


const { ProductsList } = require('./data');

const PORT = process.env.PORT || 4000;
const app = express();
app.use(bodyParser.json());
app.use()

if(process.env.NODE.ENV === 'production'){
  app.use(express.static('frontend/build'));

  app.get('*', (req,res)=> {
    res.sendFile(path.join(_dirname, 'frontend', 'build', 'index.html'));
  });
}

app.listen(PORT, function () {
  console.log("Server is running on Port: " + PORT);

  mongoose.connect(process.env.MONGODB_URI || 'mongodb+srv://freya:freya@cluster0-tdbvc.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true });
  const connection = mongoose.connection;

  connection.once('open', function () {
    console.log("MongoDB database connection established successfully");
  })

  // app.get('/products', (_, res) => res.send({ products: ProductsList }));

  app.get("/featured", (_, response) => {
    CupsData.find({ featured: true }, (error, cups) => {
      if (error) {
        console.log(error);
      } else {
        response.json(cups);
      }
    });
  });

  app.get("/products", (request, response) => {
    let query = {};
    if (request.query.capacity) {
      switch (request.query.capacity) {
        case 'S':
          query.capacity = { $gte: 15, $lte: 25 }
          break;
        case 'L':
          query.capacity = { $gte: 36 }
          break;
        default:
          query.capacity = { $gte: 25, $lte: 36 }
      }
    }
    if (request.query.size) {
      query.size = request.query.size;
    }
    if (request.query.price) {
      query.price = { $lte: request.query.price }
    }
    if (request.query.firmness) {
      switch (request.query.firmness) {
        case 'S':
          query.firmness = 'soft';
          break;
        case 'F':
          query.firmness = 'firm';
          break;
        default:
          query.firmness = 'medium';
      }
    }
    CupsData.find(query, (error, cups) => {
      if (error) {
        console.log(error);
      } else {
        response.json(cups);
      }
    });
  });

  app.post("/products/add", (request, response) => {
    const product = new CupsData(request.body);
    product.save()
      .then(p => {
        response.send(p);
      })
      .catch(error => {
        response.status(400).send(error);
      });
  });

  app.post("/products/add-many", (request, response) => {

    const newProducts = request.body; // Validation

    CupsData.insertMany(newProducts)
      .then(products => {
        response.send(products);
      })
      .catch(error => {
        response.status(400).send(error);
      });
  });

  app.delete("/products/:id", (request, response) => {
    const { id } = request.params;
    CupsData.deleteOne({ _id: id }, (error) => {
      if (error) {
        response.status(400).send(error);
      } else {
        response.status(200).send();
      }
    });
  });

});