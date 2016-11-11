var express = require('express');

const app = express();
app.get('/', (req, res, next) => {

  const fullname = typeof(req.query.fullname)=="undefined" ? "Empty Empty Empty" : req.query.fullname;
  if(fullname.split(" ").length>3) {
		var resultate = 'Invalid fullname';
	} else {
	  const rn = /([\wÀ-ʯа-я]+)(?:\s+(?:([\wÀ-ʯа-я])[\wÀ-ʯа-я]*))?(?:\s+(?:([\wÀ-ʯа-я])[\wÀ-ʯа-я]*))?/gi.exec(fullname);
	  const rn2 = typeof(rn[2])=="undefined" ? "" : ` ${rn[2]}.`;
	  const rn3 = typeof(rn[3])=="undefined" ? "" : ` ${rn[3]}.`;
	  var resultate = `${rn[1]}${rn2}${rn3}`;
	}
  res.send(`Query: ${req.originalUrl} <br>-<br>Вывод: ${resultate}`);

});

app.listen(3000, () => {
	console.log('App listening on port 3000!');
});
  