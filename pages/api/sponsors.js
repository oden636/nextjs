export default (req, res) => {
    res.statusCode = 200
    res.json({ sponsors: [
        {name: 'Stanbridge Associates', imageUrl: "http://www.jakeshawclimbingtrust.com/wp-content/uploads/2015/12/sa_logo.png"}, 
        {name: 'Vikings', imageUrl: "http://www.jakeshawclimbingtrust.com/wp-content/uploads/2016/01/unnamed-e1452547117649.jpg"},
        {name: 'Peak Mountaineering', imageUrl: "http://www.jakeshawclimbingtrust.com/wp-content/uploads/2017/10/0.png"},
        {name: 'Alpkit Foundation', imageUrl: "http://www.jakeshawclimbingtrust.com/wp-content/uploads/2017/11/0-e1509996646173.jpeg"}
    ] })
  }
  