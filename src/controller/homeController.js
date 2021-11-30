
import db from '../models/index';
let getHomePage = async (req, res) => {
    try {
        let data = await db.User.findAll();
    
        return res.render("homepage.ejs", {
            data: JSON.stringify(data)
        });

    }catch(e) {
        console.log(e);
    }

}

let getController = (req, res) => {
    return res.render("test/about.ejs")
}

let getCrud = (req, res) => {
    return res,send("Hi anh em")
}

module.exports = {
    getHomePage: getHomePage,
    getController: getController,
    getCrud: getCrud,

}