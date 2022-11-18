const Express = require("express");
const Mongoose = require("mongoose");
const WorkoutRoute = require("./routes/workoutRoute");
const Dotenv = require("dotenv").config();

// Express App
const app = Express();

// Middleware
app.use(Express.json());
app.use((req, res, next) => {
  console.log(req.path, req.method);
  next();
});

// Routes
app.use("/api/workouts", WorkoutRoute);

// Connect to DB
Mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("listening on port 4000");
    });
  })
  .catch((error) => {
    console.log(error);
  });

process.env;
