import { pool } from "../db.js"

export const getClients = async(req, res)=> {
  const [rows] = await pool.query("SELECT * FROM clients")

  res.send(rows)
}

export const getClient = async(req, res)=> {
  try{
    const [rows] = await pool.query("SELECT * FROM clients WHERE client_id = ? ",[req.params.id])
    if (rows.length <= 0) return res.status(404).json({menssage: "Employee not found"})
    res.send(rows)
  }catch(error){
    return res.status(50).json({message : "Something goes wrong"})
  }
}

export const createClients = async(req, res)=> {
  try{
    const {first_name, last_name, phone_number, email,address} = req.body
    const [rows] = await pool.query("INSERT INTO clients ( first_name, last_name, phone_number, email, address ) VALUES (?, ?, ?, ?, ?)",[first_name, last_name, phone_number, email, address])
    res.send({ 
      id: rows.insertId,
      first_name,
      last_name,
    }) 
  }catch(error){
    return res.status(50).json({message : "Something goes wrong"})
  }
}

export const deleteClients = async(req, res)=> {
  try{
    const [result] = await pool.query("DELETE FROM clients WHERE client_id = ? ",[req.params.id])
    if (result.affectedRows <= 0) return res.status(404).json({menssage: "Client not found"})
    res.sendStatus(204)
  }catch(error){
    return res.status(50).json({message : "Something goes wrong"})
  }

}

export const updateClients = async(req, res)=> {
  try{
    console.log(req.params)
    const {id} = req.params
    const {first_name, last_name, phone_number, email,address} = req.body
      const [result] = await pool.query("UPDATE clients SET first_name = IFNULL(?,first_name), last_name = IFNULL(?,last_name), phone_number = IFNULL(?,phone_number), email = IFNULL(?,email), address = IFNULL(?,address) WHERE client_id = ? ",[first_name, last_name,phone_number,email,address, id])
      if (result.affectedRows === 0) return res.status(404).json({menssage: "Employee not found"})
      const [rows] = await pool.query("SELECT * FROM clients WHERE client_id = ? ",[req.params.id],[id])
      res.json(rows[0])
  }catch(error){
    return res.status(50).json({message : "Something goes wrong"})
  }
}


