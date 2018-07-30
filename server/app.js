const express = require("express")
const cors = require("cors")
const data = require("./data/instructors")

app.use(cors())

function findById(data, id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id == id) {
      return data[i]
    }
  }
  return null
}

const app = express()


app.get("/", (request, response) => {
  response.json({ data })
})

app.get("/:id", (request, response) => {
  var record = findById(data, request.params.id)
  if (!record) {
    response.status(404).json({
      error: {
        message: "No record found!"
      }
    })
  } else {
    response.json({ data: record })
  }
})

app.listen(3000)