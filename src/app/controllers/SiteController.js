class SiteController{
     index(req, res, next){
          res.render('home', {title: 'Home'});
     }
}

export default new SiteController();
