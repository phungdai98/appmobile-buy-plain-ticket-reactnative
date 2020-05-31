let express = require("express");
let app = express();
const mysql = require("mysql");
var cors = require("cors");
var nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const maxacnhan=["mhks","lmpq","abca"];
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
//Mail
const option = {
  service: "gmail",
  auth: {
    user: "mailsenderptithcm@gmail.com", // email hoặc username
    pass: "ptithcm123", // password
  },
};
var transporter = nodemailer.createTransport(option);
transporter.verify(function (error, success) {
  // Nếu có lỗi.
  if (error) {
    console.log(error);
  } else {
    //Nếu thành công.
    console.log("Kết nối thành công!");
  }
});
//API
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
app.post("/api/chuyen-bay/xacnhan",(req,res)=>{
  let params=req.body;
  var mail = {
    from: "mailsenderptithcm@gmail.com", // Địa chỉ email của người gửi
    to: params.email, // Địa chỉ email của người gửi
    subject: "VIETNAM ALINE", // Tiêu đề mail
    text:
      "Mã xác nhận của quý khách là " +
      maxacnhan[0], // Nội dung mail dạng text
  };
  transporter.sendMail(mail, function (error, info) {
    if (error) {
      // nếu có lỗi
      console.log(error);
      res.json({
        notice:"fail"
      })
    } else {
      //nếu thành công
      console.log("Email sent: " + info.response);
      res.json({
        notice:"success"
      })
    }
  });
})
//đặt vé
app.post("/api/chuyen-bay/datve", (req, res) => {
  let params = req.body;
  let sql =
    "SELECT * FROM ticketplane.ve where chuyenbay_MaChuyenBay=? and TrangThai=0";
  mysqlConnection.query(sql, [params.macb], (err, rows, fields) => {
    if (!err) {
      let sqlInsertVe =
        "INSERT INTO customers(Cmnd,Ho,Ten,SDT,GioiTinh,Email) VALUES(" +
        params.cmnd +
        ",'" +
        params.ho +
        "','" +
        params.ten +
        "'," +
        params.sdt +
        "," +
        params.gioitinh +
        ",'" +
        params.email +
        "') ; " +
        "\n" +
        "INSERT INTO ctdatve(trangthai,customers_Cmnd,ve_MaVe) VALUES(1," +
        params.cmnd +
        ",'" +
        rows[0].MaVe +
        "') ; " +
        "\n" +
        "UPDATE ve SET TrangThai=1 WHERE MaVe='" +
        rows[0].MaVe +
        "'";
      console.log(sqlInsertVe);
      mysqlConnection.query(sqlInsertVe, (err1, rows1, fields) => {
        if (!err1) {
          res.json({
            status: "success",
          });
          let sqlMaDatCho =
            "SELECT * FROM ticketplane.ctdatve where customers_Cmnd=" +
            params.cmnd +
            " and ve_MaVe='" +
            rows[0].MaVe +
            "';";
          mysqlConnection.query(sqlMaDatCho, (err2, rows2, fields) => {
            if (!err2) {
              var mail = {
                from: "mailsenderptithcm@gmail.com", // Địa chỉ email của người gửi
                to: params.email, // Địa chỉ email của người gửi
                subject: "VIETNAM ALINE", // Tiêu đề mail
                text:
                  "Đạt vé máy bay thành công mã đặt chỗ của quý khách là " +
                  rows2[0].idctdatve, // Nội dung mail dạng text
              };
              transporter.sendMail(mail, function (error, info) {
                if (error) {
                  // nếu có lỗi
                  console.log(error);
                } else {
                  //nếu thành công
                  console.log("Email sent: " + info.response);
                }
              });
            }
          });
        } else {
          res.json({
            status: "fail",
          });
        }
      });
    } else {
      res.json({
        notice: "fail",
      });
    }
  });
});
app.listen(1337, () => {
  console.log("1337");
});
