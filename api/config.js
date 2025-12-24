export default function handler(req, res) {
  // Récupère la variable d'environnement Vercel
  const API_BASE = process.env.API_BASE_URL || process.env.NEXT_PUBLIC_API_BASE_URL;
  
  if (!API_BASE) {
    return res.status(500).json({ 
      error: 'API_BASE_URL environment variable is not set' 
    });
  }
  
  res.status(200).json({ apiBase: API_BASE });
}

