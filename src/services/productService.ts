import { useHttp } from "@hooks/useHttp"
import { useToaster } from "@hooks/useToaster";
import { IProducts } from "@typings/products"


export const productService = () =>{
    const {request} = useHttp();
    const {createToast}  = useToaster();
    const getProducts = ()=>{
          return new Promise<Array<IProducts>>(async(resolve,reject)=>{
          try{
            const res = await request('get',`products`)
            if(res.status == 200){
                resolve(res.data?.products)
            }else{
                createToast(res.statusText,'ERROR')
                resolve([])
            }
          }catch(err){
            console.log('error.',err);
          }
           
          })
  }
  const getProductByID = (id:string)=>{
    const params = { id };
    return new Promise<Array<IProducts>>(async(resolve,reject)=>{
        console.log(id);
    try{
      const res = await request('get','product-by-id',params)
      console.log(res);
      
      if(res.status == 200){
          resolve(res.data?.product)
      }else{
        createToast(res.statusText,'ERROR')
          resolve([])
      }
    }catch(err){
      console.log('error.',err);
    }
     
    })
}
  return {getProducts,getProductByID}
}
