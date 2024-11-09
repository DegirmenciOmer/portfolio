import { Pool } from 'pg'

// Create a new pool instance with your database credentials
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false, // Necessary for SSL connection with hosted databases
  },
})

export default async function handler(req, res) {
  try {
    // Test the database connection
    const client = await pool.connect()
    const result = await client.query('SELECT NOW()') // Query the current timestamp as a simple test

    client.release() // Release the client back to the pool

    res.status(200).json({
      message: 'Connection successful!',
      timestamp: result.rows[0].now,
    })
  } catch (error) {
    console.error('Database connection error:', error)
    res
      .status(500)
      .json({ message: 'Database connection error', error: error.message })
  }
}
