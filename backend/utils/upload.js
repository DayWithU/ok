 import {GridFsStorage} from 'multer-gridfs-storage';
 import multer from 'multer';
 import dotenv from 'dotenv';

 dotenv.config();

 const username = process.env.UserName;
 const password = process.env.Password;

 const storage = new GridFsStorage({

    url : `mongodb://${username}:${password}@ac-kct2qb7-shard-00-00.6uerrc4.mongodb.net:27017,ac-kct2qb7-shard-00-01.6uerrc4.mongodb.net:27017,ac-kct2qb7-shard-00-02.6uerrc4.mongodb.net:27017/?ssl=true&replicaSet=atlas-i5uywh-shard-0&authSource=admin&retryWrites=true&w=majority`,
    options: {useNewUrlParser: true},
    file: (request,file) => {
        const match= ["image/png", "image/jpg"];

        if(match.indexOf(file.memeType) === -1) 
            return`${Date.now()}-blog-${file.originalname}`;

        return {
            bucketName: "photos",
            filename: `${Date.now()}-blog-${file.originalname}`
        }
    }
 });

 export default multer({storage}); 