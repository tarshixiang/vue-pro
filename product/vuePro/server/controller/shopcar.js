const express = require('express')
const model = require('../db/db.js')
const router = express.Router()
const moment = require('moment')
const objectIdToTimestamp = require('objectid-to-timestamp')
const sha1 = require('sha1')

const shopAdd = (req,res) =>{
   let shopList = new model.Shopcar({
		name: req.body.name,
		price: req.body.price,
        number: req.body.number
	})
    console.log(shopList,req.body,'============')

	// 将 objectid 转换为 创建时间
	shopList.create_time = moment(objectIdToTimestamp(shopList._id)).format('YYYY-MM-DD HH:mm:ss');
    model.Shopcar.findOne({name:shopList.name} ,(err ,doc) => {
        if(err) {
            res.json({
                code:0,message:'查询出错'
            })
        }
        if(doc) {
             res.json({
                 code:1,message:'已经有了该商品'
             })
        }else{
            shopList.save({shopList}, err => {
				if(err) {
                    res.json({
                        code:0, message:'添加出错'
                    })
                    return ;
                }
				res.json({
					code:1,message: '添加成功'
				})
			})
        }
    })
}

const allShop = (req,res) => {
    model.Shopcar.find({},(err,result)=>{
        if(err){
            res.json({
                code:0,message:'查询错误'
            })
            return ;
        }
        res.json({
            code:1, message:result
        })

    })
}
const deleteShop = (req,res) => {
    console.log(req.params.id,req.query)
    model.Shopcar.remove({_id:req.params.id},(err ,result)=>{
        if(err){
            res.json({
                code:0,message:'删除失败'
            })
            return ;
        }
        res.json({
            code:1,message:'删除成功'
        })
    })
}

module.exports = (router) => {
	router.post('/shopcar', shopAdd),
	router.get('/allShop', allShop),
    router.delete('/shopcar/:id',deleteShop)
}
