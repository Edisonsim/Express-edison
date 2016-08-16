module.exports = {
  show: function(req, res) {

    res.json( {
        name: 'junius2',
        age: 27,
        email: 'junius2@gmail.com',
        hobbies: '',
        aboutme: ''
      }
    );
  }
}
