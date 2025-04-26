export default async function handler(req, res) {
  const { CLIENT_ID, CLIENT_SECRET, REDIRECT_URI } = process.env;
  const { code } = req.query;

  if (!code) {
    return res.status(400).send('Código não encontrado.');
  }

  const params = new URLSearchParams();
  params.append('grant_type', 'authorization_code');
  params.append('code', code);
  params.append('client_id', CLIENT_ID);
  params.append('client_secret', CLIENT_SECRET);
  params.append('redirect_uri', REDIRECT_URI);

  try {
    const response = await fetch('https://api.amazon.com/auth/o2/token', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: params
    });

    const data = await response.json();
    console.log('Tokens recebidos:', data);

    res.status(200).json(data);
  } catch (error) {
    console.error('Erro ao trocar token:', error);
    res.status(500).send('Erro ao trocar token.');
  }
}