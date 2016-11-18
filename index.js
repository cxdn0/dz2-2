var express = require('express');
var cors = require('cors');

const app = express();

app.use(cors());

app.get('/', (req, res, next) => {

  const fullname = typeof(req.query.fullname)=="undefined" ? "Empty Empty Empty" : req.query.fullname.trim();
  if(fullname.split(/\s+/).length>3 || /^$|[^A-zÀ-ʯа-я' ]|_/gi.test(fullname)) {
		var resultate = 'Invalid fullname';
	} else {
	  const rn = /(?:([\wÀ-ʯа-я])[\wÀ-ʯа-я']*)?(?:\s+(?:([\wÀ-ʯа-я])[\wÀ-ʯа-я']*))?(?:(?:\s+|^)([\wÀ-ʯа-я']+))/gi.exec(fullname);
	  console.log(rn);
	  const rn1 = typeof(rn[1])=="undefined" ? "" : ` ${rn[1]}.`.toUpperCase();
	  const rn2 = typeof(rn[2])=="undefined" ? "" : ` ${rn[2]}.`.toUpperCase();
	  const rn3 = typeof(rn[3])=="undefined" ? "" : rn[3].trim()[0].toUpperCase()+rn[3].trim().slice(1).toLowerCase();
	  var resultate = `${rn3}${rn1}${rn2}`;
	}
  console.log(`Query: ${req.originalUrl} <br>-<br>Вывод: ${resultate}`);
  res.send(resultate);

});

app.listen(3000, () => {
	console.log('App listening on port 3000!');
});
  