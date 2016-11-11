var express = require('express');

const app = express();
app.get('/', (req, res, next) => {

  const fullname = typeof(req.query.fullname)=="undefined" ? "Empty Empty Empty" : req.query.fullname;
  var rn = /([\wÀ-ʯа-я]+)\s+(?:([\wÀ-ʯа-я])[\wÀ-ʯа-я]*)\s+(?:([\wÀ-ʯа-я])[\wÀ-ʯа-я]*)/gi.exec(fullname);
  res.send(`Query: ${req.originalUrl} <br>-<br>Вывод: ${rn[1]} ${rn[2]}. ${rn[3]}.`);

});

app.listen(3000, () => {
	console.log('App listening on port 3000!');
});
  