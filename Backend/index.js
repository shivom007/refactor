// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const UsersModel = require("./models/Users");

// const app = express();
// app.use(express.json());
// app.use(cors());

// mongoose.connect("mongodb://127.0.0.1:27017/users", {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// });

// app.post("/login", (req, res) => {
//   const { email, password } = req.body;
//   UsersModel.findOne({ email })
//     .then((user) => {
//       if (user) {
//         if (user.password === password) {
//           res.json({
//             message: "success",
//             userDetails: { name: user.name, email: user.email },
//           });
//         } else {
//           res.json({ message: "password incorrect" });
//         }
//       } else {
//         res.json({ message: "user not found" });
//       }
//     })
//     .catch((err) => res.json({ message: "error", error: err }));
// });

// app.get("/login/:name", (req, res) => {
//   const { name } = req.params;
//   UsersModel.findOne({ name })
//     .then((user) => {
//       if (user) {
//         res.json(user);
//       } else {
//         res.json({ message: "user not found" });
//       }
//     })
//     .catch((err) => res.json({ message: "error", error: err }));
// });

// app.post("/register", (req, res) => {
//   UsersModel.create(req.body)
//     .then((user) => res.json(user))
//     .catch((err) => res.json(err));
// });

// app.listen(3001, () => {
//   console.log("Server is running on port 3001");
// });

const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const UsersModel = require("./models/Users");
const BasketModel = require("./models/Basket");

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/stoq_club", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.post("/login", (req, res) => {
  const { email, password } = req.body;
  UsersModel.findOne({ email })
    .then((user) => {
      if (user) {
        if (user.password === password) {
          res.json({
            message: "success",
            userDetails: { id: user._id, name: user.name, email: user.email },
          });
        } else {
          res.json({ message: "password incorrect" });
        }
      } else {
        res.json({ message: "user not found" });
      }
    })
    .catch((err) => res.json({ message: "error", error: err }));
});

app.get("/login/:name", (req, res) => {
  const { name } = req.params;
  UsersModel.findOne({ name })
    .then((user) => {
      if (user) {
        res.json(user);
      } else {
        res.json({ message: "user not found" });
      }
    })
    .catch((err) => res.json({ message: "error", error: err }));
});

app.post("/register", (req, res) => {
  UsersModel.create(req.body)
    .then((user) => res.json(user))
    .catch((err) => res.json(err));
});

// Existing code for login and register routes

// app.post("/baskets", (req, res) => {
//   const { userId, basketType, stocks } = req.body;

//   // Ensure the user is authenticated and the userId is provided
//   if (!userId) {
//     return res.status(401).json({ message: "Unauthorized" });
//   }

//   const newBasket = new BasketModel({
//     userId,
//     basketType,
//     stocks,
//   });

//   newBasket
//     .save()
//     .then((basket) => res.json(basket)) // Respond with the created basket
//     .catch((err) => res.status(400).json({ message: "Error", error: err }));
// });

app.post("/login/:name/baskets", (req, res) => {
  const { userId, basketType, stocks } = req.body;

  if (!userId) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  const newBasket = new BasketModel({
    userId,
    basketType,
    stocks,
  });

  newBasket
    .save()
    .then((basket) => res.status(201).json(basket))
    .catch((err) => res.status(400).json({ message: "Error", error: err }));
});

app.get("/baskets/:userId", (req, res) => {
  const { userId } = req.params;

  // Retrieve baskets for the given userId
  BasketModel.find({ userId })
    .then((baskets) => res.json(baskets))
    .catch((err) => res.status(400).json({ message: "Error", error: err }));
});

// Existing code for login and register routes

app.listen(3001, () => {
  console.log("Server is running on port 3001");
});
