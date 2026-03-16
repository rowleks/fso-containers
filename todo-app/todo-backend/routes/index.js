const express = require("express");
const router = express.Router();
const redis = require("../redis");

const configs = require("../util/config");

let visits = 0;

/* GET index data. */
router.get("/", async (req, res) => {
  visits++;

  res.send({
    ...configs,
    visits,
  });
});

/* GET statistics data. */
router.get("/statistics", async (req, res) => {
  const todoCount = (await redis.get("todo_count")) || 0;
  res.send({
    added_todos: Number(todoCount),
  });
});

module.exports = router;
