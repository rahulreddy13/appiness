import { Router } from 'express';
const routes = Router();

/**
 * Home Route
 */
routes.get('/' ,(req, res) => {

    res.render('home',{ Error_Status : false })
})

/**
 * Register User
 */

routes.post('/' ,(req, res) => {

    _UserModel.create(req.body)
        .then(async (response) =>{

            if(response){

                let data = await _UserModel.countDocuments();
                return _UserRoleModel.create({ "User_Id" : response['_id'] , "Role" : data > 1 ? "User" : "Admin" });

            }else{

                throw new Error('User Not Created!')
            }
        })
        .then(response =>{

            res.redirect('/user-list');
        })
        .catch(error => {

            res.render('home', { Error_Status : true , error : error})
        })
})

/**
 * Fetching List From 2 Collections
 */
routes.get('/user-list',(req,res) =>{

    _UserModel.aggregate([
            {
                $lookup: {
                        from: 'UserRole',
                        localField: '_id',
                        foreignField: 'User_Id',
                        as: 'UserRole'
                    }
            },
            {
                $replaceRoot: {
                    newRoot: {
                        $mergeObjects: [ { $arrayElemAt: ["$UserRole", 0] }, "$$ROOT" ]
                    }
            }
          }
        ])
        .then(response =>{

            res.render('list',{ Users : response , Error_Status : false })
        })
        .catch(error =>{

            res.render('list',{ error , Error_Status : true })

        })
})

export default routes;