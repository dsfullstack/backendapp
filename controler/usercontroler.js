const getUSerInfo=(
    (req, res) => {
        res.status(200).json({"name":"suman","age":"10"});
      }
)

module.exports={getUSerInfo}