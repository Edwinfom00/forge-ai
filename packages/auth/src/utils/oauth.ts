type GitHubAuthUrlParams = {
  clientId: string;
  redirectUri: string;
  state: string;
};

type GoogleAuthUrlParams = {
  clientId: string;
  redirectUri: string;
  state: string;
};

type CodeExchangeParams = {
  code: string;
  clientId: string;
  clientSecret: string;
  redirectUri: string;
};

type GitHubTokenResponse = {
  access_token: string;
  token_type: string;
  scope: string;
};

type GoogleTokenResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  id_token: string;
};

export type GitHubUserResponse = {
  id: number;
  login: string;
  name: string | null;
  email: string | null;
  avatar_url: string;
};

export type GitHubEmailResponse = {
  email: string;
  primary: boolean;
  verified: boolean;
};

export type GoogleUserResponse = {
  sub: string;
  name: string;
  email: string;
  picture: string;
};

export const buildGitHubAuthUrl = (params: GitHubAuthUrlParams): string => {
  const url = new URL('https://github.com/login/oauth/authorize');
  url.searchParams.set('client_id', params.clientId);
  url.searchParams.set('redirect_uri', params.redirectUri);
  url.searchParams.set('state', params.state);
  url.searchParams.set('scope', 'read:user user:email');
  return url.toString();
};

export const buildGoogleAuthUrl = (params: GoogleAuthUrlParams): string => {
  const url = new URL('https://accounts.google.com/o/oauth2/v2/auth');
  url.searchParams.set('client_id', params.clientId);
  url.searchParams.set('redirect_uri', params.redirectUri);
  url.searchParams.set('state', params.state);
  url.searchParams.set('response_type', 'code');
  url.searchParams.set('scope', 'openid email profile');
  url.searchParams.set('access_type', 'online');
  return url.toString();
};

export const exchangeGitHubCode = async (
  params: CodeExchangeParams,
): Promise<{ accessToken: string }> => {
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
    body: JSON.stringify({
      client_id: params.clientId,
      client_secret: params.clientSecret,
      code: params.code,
      redirect_uri: params.redirectUri,
    }),
  });

  if (!response.ok) {
    throw new Error('GitHub token exchange failed');
  }

  const data = (await response.json()) as GitHubTokenResponse;

  if (!data.access_token) {
    throw new Error('No access token in GitHub response');
  }

  return { accessToken: data.access_token };
};

export const exchangeGoogleCode = async (
  params: CodeExchangeParams,
): Promise<{ accessToken: string }> => {
  const response = await fetch('https://oauth2.googleapis.com/token', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      client_id: params.clientId,
      client_secret: params.clientSecret,
      code: params.code,
      redirect_uri: params.redirectUri,
      grant_type: 'authorization_code',
    }),
  });

  if (!response.ok) {
    throw new Error('Google token exchange failed');
  }

  const data = (await response.json()) as GoogleTokenResponse;

  if (!data.access_token) {
    throw new Error('No access token in Google response');
  }

  return { accessToken: data.access_token };
};

export const getGitHubUser = async (
  accessToken: string,
): Promise<{ id: string; name: string; email: string; avatarUrl: string }> => {
  const [userResponse, emailsResponse] = await Promise.all([
    fetch('https://api.github.com/user', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/vnd.github+json',
      },
    }),
    fetch('https://api.github.com/user/emails', {
      headers: {
        Authorization: `Bearer ${accessToken}`,
        Accept: 'application/vnd.github+json',
      },
    }),
  ]);

  if (!userResponse.ok || !emailsResponse.ok) {
    throw new Error('Failed to fetch GitHub user info');
  }

  const user = (await userResponse.json()) as GitHubUserResponse;
  const emails = (await emailsResponse.json()) as GitHubEmailResponse[];

  const primaryEmail =
    emails.find((e) => e.primary && e.verified)?.email ??
    emails.find((e) => e.verified)?.email ??
    user.email;

  if (!primaryEmail) {
    throw new Error('No verified email found in GitHub account');
  }

  return {
    id: String(user.id),
    name: user.name ?? user.login,
    email: primaryEmail,
    avatarUrl: user.avatar_url,
  };
};

export const getGoogleUser = async (
  accessToken: string,
): Promise<{ id: string; name: string; email: string; avatarUrl: string }> => {
  const response = await fetch('https://www.googleapis.com/oauth2/v3/userinfo', {
    headers: { Authorization: `Bearer ${accessToken}` },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch Google user info');
  }

  const user = (await response.json()) as GoogleUserResponse;

  return {
    id: user.sub,
    name: user.name,
    email: user.email,
    avatarUrl: user.picture,
  };
};
