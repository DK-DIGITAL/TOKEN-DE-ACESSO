export default function handler(req, res) {
  const clientId = process.env.CLIENT_ID;
  const redirectUri = process.env.REDIRECT_URI;

  console.log("CLIENT_ID: ", clientId);  
  console.log("REDIRECT_URI: ", redirectUri);  

  if (!clientId || !redirectUri) {
    return res.status(400).json({ error: "Missing environment variables." });
  }

  // Adicionando os três scopes aprovados pela Amazon
  const scopes = 'advertising::audiences,advertising::campaign_management,advertising::create_account';

  const authUrl = https://www.amazon.com/ap/oa?client_id=${clientId}&scope=${scopes}&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)};

  res.redirect(authUrl);
}
