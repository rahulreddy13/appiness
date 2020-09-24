import Schema from "./Schema"
import mongoose from 'mongoose'

export default class UserRole extends Schema {

    constructor() {

        super();

        this.modelname = 'UserRole';
        this.collectionname = 'UserRole';

        this.schemaobject = {

             User_Id   : { type: mongoose.Types.ObjectId, required: true   },
             Role      : { type: String, required: true , default : "User" }

        };
    }

}