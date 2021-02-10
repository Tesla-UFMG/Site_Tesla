const mongoose = require('mongoose')
const Product = mongoose.model('Product')

exports.get = () => {
  return Product
    .find({
    }, 'name slug sellPrice ')
    
}

exports.getBySlug = (slug) => {
  return Product
    .findOne({
      slug: slug,
    }, 'name description slug sellPrice tags ')
}

exports.getByTag = (tag) => {
  return Product.find({
    tags: tag
  },'name description slug sellPrice tags ')
}


exports.create = (data) => {
  let product = new Product(data)
  return product.save()
}


//mudar depois
exports.update = (id,data) => {
  return Product
    .findByIdAndUpdate(id,{
      $set: {
        name: data.name,
        description: data.description,
        slug: data.slug,
        sellPrice: data.sellPrice
      }
    })
  }

exports.delete = (id,data) => {
  return Product
    .findOneAndRemove(id)
}
