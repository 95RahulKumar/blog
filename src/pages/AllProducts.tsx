import { Autocomplete, AutocompleteChangeReason, Button, CardMedia, Rating, TextField } from "@mui/material";
import { SyntheticEvent, useEffect, useRef, useState } from "react";
import { IProducts } from "@typings/products";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { productService } from "@services/productService";
import { useNavigate } from "react-router";
import { AppRoutesEnum } from "@typings/common";
const AllProducts = () => {
  const [products, setProducts] = useState<Array<IProducts>>([])
  const [selectedProduct, setSelectedProduct] = useState<string>('');
   const {getProducts,getProductByID} =  productService()
  const productList = useRef<Array<IProducts>>([])
  const navigate = useNavigate();

  const handleClose = (event: SyntheticEvent<Element, Event>, value: IProducts | null, reason: AutocompleteChangeReason)=>{
    if(reason=='selectOption'){
      if(value){
        setSelectedProduct(value._id)
      }
    }
    if(reason == 'clear'){
      setSelectedProduct('');
      fetchProducts()
    }
  }

  const  fetchProducts = async() =>{
    const products:Array<IProducts> = await getProducts();
    setProducts(products)
    // productList.current = products
  }

  // const  fetchSingleProduct = async() =>{
    const  displaySingleProduct = async() =>{
      // const product:Array<IProducts> = await getProductByID(selectedProduct);
      // setProducts(product)
      //  productList.current = product
      /*
      *optimizatin dont make an api call here 
      */
        // const singleProd = productList.current.filter(item=>item._id==selectedProduct)
        const singleProd = products.filter(item=>item._id==selectedProduct)
        setProducts(singleProd)
  }

 useEffect(()=>{
  fetchProducts();
  },[])

  useEffect(()=>{
    if(selectedProduct){
    // fetchSingleProduct();
    displaySingleProduct()
    }
   },[selectedProduct])

  return (
    <>
  {products &&  <div className="m-auto w-[95%] mt-20">
    <Autocomplete
     className="mb-5"
      // options={productList.current}
      options={products}
      // disabled={!productList.current}
      disabled={!products}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params}  placeholder="Seach Products here..."/>}
      onChange={handleClose}
    />
      <div className="flex flex-wrap gap-5">
      {products.map(item=>(
      <div className="max-w-[300px] " key={item._id}>
       {/* card start */}
      <Card  variant="outlined" sx={{ maxWidth: 300 }}>
          <CardContent sx={{
            paddingBottom:'0'
          }}>
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14,fontWeight:600}}>
          {item.name}
          </Typography>
          <CardMedia
            sx={{ height:200, width:200 }}
            image={item.image[0].url}
            title="green iguana"
          />
           <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14,marginBottom:'10px',marginTop:'10px',fontWeight:600 }}>
          {'₹' + item.price.toLocaleString('en-IN')}
          </Typography>
          <Rating name="half-rating-read" defaultValue={item.ratings} precision={0.5} readOnly />
          <Typography gutterBottom sx={{ color: 'text.secondary', fontSize: 14,marginBottom:'10px',marginTop:'10px',fontWeight:600 }}>
          {item.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button  color="success" onClick={()=>navigate(`${AppRoutesEnum.SINGLE_PRODUCTS}/${item._id}`,{state:item})} variant="outlined"size="small">View More</Button>
        </CardActions>
      </Card>
       {/* card end here */}
      </div>
      ))}
      </div>
 
    </div>}
   
    </>
  );
};

export default AllProducts;
