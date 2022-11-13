import {Router} from "express";
import productController from "../controller/product-controller";
export const routerProduct = Router();
routerProduct.get('/products', productController.getAll);
routerProduct.get('/create', productController.showFormCreate);
routerProduct.post('/create', productController.createP);
routerProduct.get('/detail/:id', productController.detailProduct)
routerProduct.get('/update/:id', productController.showFormEdit)
routerProduct.post('/update/:id', productController.editP);
routerProduct.post('/delete/:id', productController.deleteP);
routerProduct.get('/delete/:id', productController.showFormDelete);
routerProduct.get('/updating',productController.showFormUpdating);
