import mongoose            from 'mongoose';
import User                from '../../models/User'
import UserRole            from '../../models/UserRole'

mongoose.connect(databaseUri,{ useNewUrlParser : true , useUnifiedTopology: true });
mongoose.set('useCreateIndex', true);
mongoose.Promise = global.Promise;


global._mongoose = mongoose;

var _User = new User();
global._UserModel = _User.model();

var _UserRole = new UserRole()
global._UserRoleModel = _UserRole.model();