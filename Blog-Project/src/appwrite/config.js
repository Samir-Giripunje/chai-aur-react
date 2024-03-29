import conf from "../conf/conf";
import { Client, Account, ID ,Databases,Query,Storage} from "appwrite";

export class Service{

client = new Client();
databases;
bucket;

constructor(){
    this.client
    .setEndpoint(conf.appwriteUrl)
    .setProject(conf.appwriteProjectId);
   this.databases=new Databases(this.client)
   this.bucket=new Storage(this.client)

}

async createPost({title,slug,content,featuredImage,status,userID}){
      try {
        return await this.databases.createDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug,
            {
              title,content,featuredImage,status,userID,
            }
            )
      } catch (error) {
        throw error;
      }
}

async updatePost(slug,{title,content,featuredImage,status}){
 try {
    return await this.databases.updateDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug,
        {
            title,content,featuredImage,status
        }
    )
 } catch (error) {
    throw error;
 }
}

async deletePost({slug}){
  try {
    await this.databases.deleteDocument(
        conf.appwriteDatabaseId,
        conf.appwriteCollectionId,
        slug
    )
    return true;
  } catch (error) {
    throw error;
    return false;
  }
}

async getPost(slug){
    try {
        return await this.databases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
    } catch (error) {
        console.log("delete post",error)
        throw error;
    }
}

async getPosts(queries=[Query.equal("status","active")]){

    try {
        return await this.databases.listDocuments(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            queries,

        )
    } catch (error) {
        console.log("all post",error);
        throw error;
        return false;
    }
}

//file upload 

async uploadFile(file){
 try {
    return await  this.bucket.createFile(
        conf.appwriteBucketId,
        ID.unique(),
        file,

    )
 } catch (error) {
    console.log("upload ", error);
    return false;
 }
}


async deleteFile(fileID){
  try {
        await this.bucket.deleteFile(
            conf.appwriteBucketId,
            fileID
        )
        return true


  } catch (error) {
    console.log("delete Image",error);
    return error;
  }
}


getFilePreview(fileID){
    return this.bucket.getFilePreview(
        conf.appwriteBucketId,
        fileID
    )
}
}

const service=new Service()

export default service;