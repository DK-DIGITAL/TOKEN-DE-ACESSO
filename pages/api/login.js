export default function handler(req, res) {
  const clientId = process.env.CLIENT_ID;
  const redirectUri = process.env.REDIRECT_URI;

  const authUrl = https://www.amazon.com/ap/oa?client_id=${clientId}&scope=cpc_advertising:campaign_management&response_type=code&redirect_uri=${encodeURIComponent(redirectUri)};

  res.redirect(authUrl);
}
