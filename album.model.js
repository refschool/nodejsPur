// reverse engineer https://chineduorie.com/posts/how-to-use-sequelize-on-an-existing-database
//https://www.digitalocean.com/community/tutorials/how-to-use-sequelize-with-node-js-and-mysql
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize('disco', 'root', '', { host: '127.0.0.1', dialect: 'mysql' })

sequelize.authenticate().then(() => {
    console.log('Connection has been established successfully.');
}).catch((error) => {
    console.error('Unable to connect to the database: ', error);
});

const Album = sequelize.define("disques", {
    album: {
        type: DataTypes.STRING,
        allowNull: false
    },
    artiste: {
        type: DataTypes.STRING,
        allowNull: false
    },
    genre: {
        type: DataTypes.INTEGER,
    }
}, { timestamps: false });

//sequelize.sync().then(() => {
//  console.log('Book table created successfully!');
//    Album.findAll().then((res) => {
//        console.log("resultats", res)
//    })


// WHERE
// find with Where
//Album.findOne({
//    where: {
//        id: "4"
//    }

//// DELETE
//Album.destroy({
//    where: {
//        id: "14"
//    }
// CREATE
//    Album.create({
//        album: "American Idiot",
//        artiste: "Greenday",
//        genre: 6
//    }
//    ).then((res) => {
//        console.log("resultats", res)
//    })
//}).catch((error) => {
//    console.error('Unable to select data : ', error);
//});
//

//raw query
sequelize.query(
    "SELECT * FROM disques WHERE id = ?",
    {
        replacements: ['7'],
        type: sequelize.QueryTypes.SELECT
    }
).then(res => {
    console.log('resultat ', res)
}).catch((error) => {
    console.error('Failed to select data', error)
})