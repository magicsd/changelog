import { Router } from 'express'
import { body } from 'express-validator'

import { createProduct, deleteProduct, getOneProduct, getProducts } from './handlers/product'
import { handleInputErrors } from './modules/middleware'

const router = Router()

/**
 * Product
 */
router.get('/product', getProducts)
router.get('/product/:id', getOneProduct)
router.put('/product/:id', body('name').isString(), handleInputErrors, getOneProduct)
router.post('/product', body('name').isString(), handleInputErrors, createProduct)
router.delete('/product/:id', deleteProduct)

/**
 * Update
 */
router.get('/update', () => {})
router.get('/update/:id', () => {})

router.put(
  '/update/:id', 
  body('title').optional().isString(), 
  body('body').optional().isString(), 
  body('status').isIn(['IN_PROGRESS', 'SHIPPED', 'DEPRECATED']).optional(),
  body('version').optional().isString(), 
  body('asset').optional().isString(), 
  () => {}
)

router.post(
  '/update', 
  body('title').exists().isString(), 
  body('body').exists().isString(), 
  body('productId').exists().isString(), 
  () => {}
)

router.delete('/update/:id', () => {})

/**
 * Update Point
 */
router.get('/update-point', () => {})
router.get('/update-point/:id', () => {})

router.put(
  '/update-point/:id', 
  body('name').optional().isString(),
  body('description').optional().isString(),
  () => {}
)

router.post(
  '/update-point', 
  body('name').exists().isString(),
  body('description').exists().isString(),
  body('updateId').exists(),
  () => {}
)

router.delete('/update-point/:id', () => {})

export default router