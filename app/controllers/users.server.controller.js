module.exports = {
  show: function(req, res) {

    res.json( {
        name: 'Edison Sim',
        age: 26,
        email: 'edison_sxw1@hotmail.com',
        hobbies: 'Kdrama'
      }
    );
  }
}
