export interface IProducts{
    category:string,
    createdAt:string
    description:string
    image:Array<IProductImage>
    name:string
    numOfReviews:number
    price:number
    ratings:number
    reviews:Array<IReviews>
    stock:number
    user:string,
    _id:string,
}


export interface IProductImage{
    public_id:string,
    url:string,
    _id:string
}

export interface IReviews{
    comment:string,
    name:string,
    rating:number,
    user:string,
    _id:string
}