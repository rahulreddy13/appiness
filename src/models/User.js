import Schema from "./Schema"

export default class User extends Schema {

    constructor() {

        super();

        this.modelname = 'Users';
        this.collectionname = 'Users';

        this.schemaobject = {
             
             First_Name    : { type: String, required: true },
             Last_Name     : { type: String, required: true },
             City          : { type: String, required: true },
             State         : { type: String, required: true },
             Pincode       : { type: Number, required: true },
             Email         : { type: String, unique: true, required: true },
             Phone_Number  : { type: Number, required: true },
        };
    }

}