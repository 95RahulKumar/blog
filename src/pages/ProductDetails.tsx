import { productService } from '@services/productService';
import { IProducts } from '@typings/products';
import React, { useEffect, useState } from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Autocomplete, AutocompleteChangeReason, Button, Card, CardContent, CardMedia, Rating, TextField } from "@mui/material";
import UrlConfigManager from '@shared/urlConfigManager';
export const ProductDetails = () => {
    const {id} = useParams();
    const urlConfigManager = new UrlConfigManager()
    const {state}  = useLocation();
    const [productDetail, setproductDetail] = useState<IProducts|null>(null);
       const {getProducts,getProductByID} =  productService()
      const  fetchSingleProduct = async() =>{
          const [product]:Array<IProducts> = await getProductByID(id);
          setproductDetail(product)
      }
 console.log(productDetail);
 
    useEffect(()=>{
        if(state){
            setproductDetail(state)
            return
        }else{
            fetchSingleProduct()
        }
    },[])

  return (
    <>
    {productDetail && <div className="m-auto w-[95%] h-screen">
        <Box sx={{ flexGrow: 1 }}>
      <div className='grid grid-cols-[320px_1fr] gap-4' >
        {/* {back btn} */}
            <div onClick={()=> urlConfigManager.navigatorBack()}
              
              className=" bg-slate-300 rounded-full w-8 flex items-center justify-center h-8 absolute left-4 top-[70px] cursor-pointer"
            >
              <ArrowBackIcon />
            </div>

        <div className="h-screen pt-28 gap-3 flex" >
            <Box className="flex items-center justify-center " sx={{width: 300,
            height: 300,
            borderRadius: 1,
            bgcolor: '#0026b30d',
            }}>
                <img  className="rounded-md w-72 h-72" src={productDetail.image[0].url} alt="" />
            </Box>
        </div>
        <div className="h-screen pt-28">
        <Typography gutterBottom   sx={{ color: 'text.secondary', fontSize: 20,fontWeight:600}}>
        {productDetail.name}
          </Typography>
          <Typography gutterBottom   sx={{ color: 'text.secondary', fontSize: 13,fontWeight:600}}>
            {productDetail.description}
          </Typography> 
          <Rating name="half-rating-read" defaultValue={productDetail.ratings} precision={0.5} readOnly />
          <Typography gutterBottom   sx={{ color: 'green', fontSize: 13,fontWeight:600}}>
            <span>{productDetail.ratings}{'/5'} -</span> <span className='text-gray-500'>{productDetail.reviews.length} Reviews</span>
          </Typography> 
          <Typography gutterBottom   sx={{ color: 'text.secondary', fontSize: 15,fontWeight:600}}>
          {'₹' + productDetail.price.toLocaleString('en-IN')}
          </Typography> 
          <Typography gutterBottom   sx={{ color: productDetail.stock ?'green':'red', fontSize: 15,fontWeight:600}}>
          {productDetail.stock? 'Available In Stock ':'Currently Unavalable'}
          </Typography> 
          <div className='flex gap-3 mt-4'>
           <Button  color="success"  variant="outlined"size="small">+</Button>
           <span>1</span>
           <Button variant="outlined" size="small">-</Button>
          </div>
          <div className='flex gap-3 mt-4'>
           <Button disabled={!productDetail.stock} color="success"  variant="outlined"size="small">ADD TO CART</Button>
           <Button variant="contained" size="small">{productDetail.stock==0 ? 'NOTIFY ME':'BUY NOW'}</Button>
          </div>
          {productDetail.reviews.length>0 && <>
           <div className='mt-4'>
          <Typography    sx={{ color: 'text.secondary', fontSize:16,fontWeight:600}}>
            Users Review
          </Typography>
          {productDetail.reviews.map(item=>(
            <Card key={item._id} className=' mt-4'  variant="outlined">
              <CardContent>
                    <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14 }}>
                        {item.name}
                    </Typography>
                    <Typography  component="div">
                    {item.comment}
                    </Typography>
                    <div className='flex items-center'>
                    <Rating name="half-rating-read" defaultValue={item.rating} precision={0.5} readOnly />
                    <span className='ml-3'>{item.rating}</span>
                    </div>
            </CardContent>
            </Card>
          ))}
          </div>
          </>
          }
        </div>
      </div>
    </Box>
    </div>}
    </>
  )
}
