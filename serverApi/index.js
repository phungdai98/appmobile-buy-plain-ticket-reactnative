let express = require("express");
let app = express();
const mysql = require("mysql");
var cors = require("cors");
const bodyParser = require("body-parser");
app.use(cors());
app.use(bodyParser.json());
var mysqlConnection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mixaolanot123",
  database: "ticketplane",
  insecureAuth: true,
  multipleStatements: true,
});
mysqlConnection.connect((err) => {
  if (!err) {
    console.log("success");
  } else {
    console.log("fail" + JSON.stringify(err, undefined, 2));
  }
});
app.get("/api/san-bay/get-all", (req, res) => {
  let data = [];
  mysqlConnection.query(
    "SELECT * FROM ticketplane.airport",
    (err, rows, fields) => {
      if (!err) {
        for (let i = 0; i < rows.length; i++) {
          data.push({
            masb: rows[i].MaSanBay,
            tensb: rows[i].TenSanBay,
            thanhpho: rows[i].ThanhPho,
          });
        }
        res.json(data);
      } else {
        console.log(err);
      }
    }
  );
});
app.get("/api/chuyen-bay/get-by-query/:ngayDi/:diemDi/:diemDen", (req, res) => {
  let data = [];
  let { ngayDi, diemDi, diemDen } = req.params;

  mysqlConnection.query(
    "SELECT * FROM ticketplane.chuyenbay join airport on chuyenbay.airport_MaSanBay=airport.MaSanBay join airportto on chuyenbay.airportto_MaSanBayDen=airportto.MaSanBayDen where airport_MaSanBay='" +
      diemDi +
      "' and airportto_MaSanBayDen='" +
      diemDen +
      "' and NgayDi='" +
      ngayDi +
      "'",
    (err, rows, fields) => {
      if (!err) {
        res.json(rows);
      } else {
        res.json({
          notice: "Fail",
        });
      }
    }
  );
  //console.log(data)
});
//đặt vé
app.post('/api/chuyen-bay/datve',(req,res)=>{
  let params=req.body;
  let sql="SELECT * FROM ticketplane.ve where chuyenbay_MaChuyenBay=? and TrangThai=0";
  mysqlConnection.query(sql,[params.macb],(err,rows,fields)=>{
    if(!err)
    {
      
      let sqlInsertVe="INSERT INTO customers(Cmnd,Ho,Ten,SDT,GioiTinh,Email) VALUES("+params.cmnd+",'"+params.ho+"','"+params.ten+"',"+params.sdt+","+params.gioitinh+",'"+params.email+"') ; "+"\n"+
                      "INSERT INTO ctdatve(trangthai,customers_Cmnd,ve_MaVe) VALUES(1,"+params.cmnd+",'"+rows[0].MaVe+"') ; "+"\n"+
                      "UPDATE ve SET TrangThai=1 WHERE MaVe='"+rows[0].MaVe+"'";
                      console.log(sqlInsertVe);
          mysqlConnection.query(sqlInsertVe,(err1,rows1,fields)=>{
            if(!err1)
            {
              res.json({
                status:"success"
              })
            }
            else{
              res.json({
                status:"fail"
              })
            }
          })
    }
    else{
      res.json({
        notice:"fail"
      })
    }
  })
})
app.listen(1337, () => {
  console.log("1337");
});
