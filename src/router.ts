import { Router } from 'express'
import { body, validationResult } from 'express-validator'

import { handleInputErrors } from './modules/middleware'

const router = Router()

/**
 * Product
 */
router.get('/product', (req, res) => {
  res.json({ message: 'hello'})
})
router.get('/product/:id', () => {})

router.put('/product/:id', body('name').isString(), handleInputErrors, (req, res) => {
  res.status(200)
  res.json({ message: 'All good' })
})

router.post('/product', body('name').isString(), handleInputErrors, (req, res) => {
  res.status(200)
  res.json({ message: 'All good' })
})

router.delete('/product/:id', () => {})

/**
 * Update
 */
router.get('/update', () => {})
router.get('/update/:id', () => {})
router.put('/update/:id', () => {})
router.post('/update', () => {})
router.delete('/update/:id', () => {})

/**
 * Update Point
 */
router.get('/update-point', () => {})
router.get('/update-point/:id', () => {})
router.put('/update-point/:id', () => {})
router.post('/update-point', () => {})
router.delete('/update-point/:id', () => {})

export default router