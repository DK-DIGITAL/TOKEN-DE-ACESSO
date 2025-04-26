export default function handler(req, res) {
  const { CLIENT_ID, REDIRECT_URI } = process.env;

  const authUrl = `https://www.amazon.com/ap/oa?client_id=${CLIENT_ID}&scope=cpc_advertising:campaign_management&response_type=code&redirect_uri=${encodeURIComponent(REDIRECT_URI)}`;

  res.redirect(authUrl);
}