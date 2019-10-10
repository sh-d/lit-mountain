var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    layout: "layout/default",
    title: "Colls Guru | The Best Eductional Consultant",
    metaDescription:
      "Colls Guru is one of the best educational and admission consultancy cum career counselor for Higher education based in Patna, India. We are the leaders in educational consultancy and represent leading colleges and universities across India. We can get you admission in state like Uttar Pradesh, Maharashtra, Bengaluru, Orissa, Madhya Pradesh, Rajasthan, Tamil Nadu and many more. Our courses include Engineering, Medical and all other Professional Courses. Our expert advice and career guidance to get admission in top 100 colleges of India is unmatched.",
    metakeywords:
      "Colls Guru, best educational consultancy in Patna, best admission consultancy in Patna, career counselor in Patna Bihar, top admission consultancy in Patna, career counselor for Higher education in Patna, admission in top 100 colleges in India, list of educational consultancy in Patna, distance education consultants in Patna educational consultants in Patna Bihar, library consultant, mbbs admission consultants in Patna, engineering admission consultants in Patna, career consultancy in Patna, Education Consultants in Patna, India, mba admission consultants in Patna, Bihar",
    metarights: "Copyright © 2019 Colls Guru, All Rights Reserved."
  });
});

router.get("/contact", function(req, res, next) {
  res.render("contact", {
    layout: "layout/default",
    title: "Contact Us | Colls Guru",
    metaDescription:
      "Colls Guru is one of the best educational and admission consultancy cum career counselor for Higher education based in Patna, India. Our expert advice and career guidance to get admission in top 100 colleges of India",
    metakeywords:
      "Colls Guru, best educational consultancy in Patna, best admission consultancy in Patna, career counselor in Patna Bihar, top admission consultancy in Patna, career counselor for Higher education in Patna, admission in top 100 colleges in India, list of educational consultancy in Patna, distance education consultants in Patna educational consultants in Patna Bihar, library consultant, mbbs admission consultants in Patna, engineering admission consultants in Patna, career consultancy in Patna, Education Consultants in Patna, India, mba admission consultants in Patna, Bihar",
    metarights: "Copyright © 2019 Colls Guru, All Rights Reserved."
  });
});

router.get("/engineering-colleges", function(req, res, next) {
  res.render("eng-colleges", {
    layout: "layout/default",
    title:'List Of Engineering Colleges In India | Colls Guru',
		metaDescription:'Colls Guru List Of Colleges Engineering In India',
		metakeywords:'Colls Guru, best educational consultancy in Patna, best admission consultancy in Patna, career counselor in Patna Bihar, top admission consultancy in Patna, career counselor for Higher education in Patna, admission in top 100 colleges in India, list of educational consultancy in Patna, distance education consultants in Patna educational consultants in Patna Bihar, library consultant, mbbs admission consultants in Patna, engineering admission consultants in Patna, career consultancy in Patna, Education Consultants in Patna, India, mba admission consultants in Patna, Bihar',
		metarights:'Copyright © 2019 Colls Guru, All Rights Reserved.',
  });
});

router.get("/medical-colleges", function(req, res, next) {
  res.render("eng-colleges", {
    layout: "layout/default",
    title:'List Of Medical Colleges In India | Colls Guru',
		metaDescription:'Colls Guru List Of Colleges Medical In India',
		metakeywords:'Colls Guru, best educational consultancy in Patna, best admission consultancy in Patna, career counselor in Patna Bihar, top admission consultancy in Patna, career counselor for Higher education in Patna, admission in top 100 colleges in India, list of educational consultancy in Patna, distance education consultants in Patna educational consultants in Patna Bihar, library consultant, mbbs admission consultants in Patna, engineering admission consultants in Patna, career consultancy in Patna, Education Consultants in Patna, India, mba admission consultants in Patna, Bihar',
		metarights:'Copyright © 2019 Colls Guru, All Rights Reserved.',
  });
});

router.get("/professional-colleges", function(req, res, next) {
  res.render("eng-colleges", {
    layout: "layout/default",
    title:'List Of Professional Colleges In India | Colls Guru',
		metaDescription:'Colls Guru List Of Colleges Professional In India',
		metakeywords:'Colls Guru, best educational consultancy in Patnaa nd can get you adimmision in best professional courses, we are best admission consultancy in Patna, career counselor in Patna Bihar, top admission consultancy in Patna, career counselor for Higher education in Patna, admission in top 100 colleges in India, list of educational consultancy in Patna, distance education consultants in Patna educational consultants in Patna Bihar, library consultant, mbbs admission consultants in Patna, engineering admission consultants in Patna, career consultancy in Patna, Education Consultants in Patna, India, mba admission consultants in Patna, Bihar',
		metarights:'Copyright © 2019 Colls Guru, All Rights Reserved.',
  });
});

module.exports = router;
