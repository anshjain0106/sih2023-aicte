const { Client } = require('pg');

const generateEmbed = require("../../openai/connection/connection")
const POSTGRE_KEY = process.env.POSTGRE_KEY
const CockClient = new Client(POSTGRE_KEY);

const connectCockroachDb = async ()=>{
  await CockClient.connect();
  console.log("connected to cockroach db");
 
  // console.log(ans.rows)
  // for (let i = 0; i < ans.rows.length; i++) {
  //   let str="";
  //   str = ans.rows[i].name + " " + ans.rows[i].location + " " + ans.rows[i].established_year + " " +ans.rows[i].website+" ";
  //   console.log(str);
    // const embedded = generateEmbed(str);
    // const query ='insert into college_details1 values ($1,$2,$3,$4)'
    // await CockClient.query(query,[ans.rows[i].college_id, ans.rows[i].name, ans.rows[i].location,embedded]);
    // const responses = CockClient.query('select * from college_details1');
    // console.log(embedded);
    // console.log(responses);
  // }

  // console.log(ans.rows);
}

module.exports = {connectCockroachDb,CockClient};