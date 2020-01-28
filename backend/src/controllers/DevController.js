const axios = require('axios')
const  Dev = require('../models/Dev')
const ParseStringAsArray = require('../utils/parseStringAsArray')

module.exports = {
    
    async index(req,resp){
        const devs= await Dev.find();

        return resp.json(devs)
    },

    async store(req,res){ 

        const { github_username , techs , latitude, longitude } = req.body
        
        let dev = await Dev.findOne({github_username})

        if(!dev){
            const apiResp = await axios.get(`https://api.github.com/users/${github_username}`)

            const { name = login, avatar_url, bio } =apiResp.data

            const techsArray = ParseStringAsArray(techs)
            
            const location = {
                type: 'Point',
                coordinates : [longitude, latitude]
            }
            dev = await Dev.create({
                github_username,
                name,
                avatar_url,
                bio,
                techs: techsArray,
                location,
            })
        }
        
        return res.json(dev)

    }

}