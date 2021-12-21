const usersModel = require('../../config/db')
const bcrypt = require ('bcryptjs')

class UsersHandler{
    
    async protectedContent(req, res){
        let loggedUser = req.session.username
        res.render('layouts/protectedContent', {loggedUser})}
        
    async userLoginForm(req, res){

        if(req.session.isAuth){
            return res.redirect('/protectedContent')
          } else {
            return res.render('layouts/userLogin')
        }
   }
        
    async userRegisterForm(req, res){

        if(req.session.isAuth){
            return res.redirect('/protectedContent')
          } else {
            return res.render('layouts/userRegister')}
        } 
            
    async userLogin(req, res) {
                        
        const {email, password} = req.body
    
        let user = await usersModel.findOne({email})
  
        if(!user) {
            res.redirect('/login')
        }else{
            let matchPassword = await bcrypt.compare(password, user.password)
        
        if(matchPassword){
            
            req.session.isLogged = true
            req.session.username = user.username
                      
            res.redirect('/protectedContent')
        }else{
            res.redirect ('/login')}
     }}    
    
    
    async userRegister(req, res, next){
        const {email, password, username} = req.body
        let user = await usersModel.findOne({email})

            if(user) {
                return res.redirect('/login')}
            else {
                let hashedPassword = await bcrypt.hash(password, 12) // password encryption
                
                user = new usersModel({
                    username,
                    email,
                    password: hashedPassword})
                await user.save()
                return res.redirect('/login')
            }}

}

module.exports = new UsersHandler()