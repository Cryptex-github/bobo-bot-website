import { createContext } from 'react';
import Cookies from 'js-cookie';

const BASE_URL = 'https://api.bobobot.cf';

type OauthData = {
    access_token: string,
    token_type: string,
    expires_in: number,
    refresh_token: string,
    scope: string
}

type UserData = {
    id: string,
    username: string,
    discriminator: string,
    avatar?: string,
    bot: Boolean,
    mfa_enabled?: boolean,
    locale?: string,
    verified?: boolean,
    email?: string,
    flags?: number,
    premium_type?: number,
    public_flags?: number
}

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH' | 'HEAD' | 'OPTIONS';

export class APIClient {
    OauthData: OauthData | null;
    UserData: UserData | null;
    Authorization: string | null;
    access_token: string | null;
    refresh_token: string | null;

    constructor() {
        this.OauthData = null;
        this.UserData = null;
        this.Authorization = null;
        this.access_token = null;
        this.refresh_token = null;
    }

    async getAccessToken(): Promise<string | undefined> {
        let accessToken = Cookies.get('access_token');

        if (accessToken) {
            // TODO: fetch user

            return accessToken;
        }

        const params = new URLSearchParams(window.location.search);

        if (params.has('code')) {
            const code = params.get('code')!;
            await this.exchangeCode(code);

            Cookies.set('access_token', this.OauthData!.access_token, { expires: this.OauthData!.expires_in / 86400 });
            Cookies.set('refresh_token', this.OauthData!.refresh_token, { expires: this.OauthData!.expires_in / 86400 });

            this.access_token = this.OauthData!.access_token;
            this.refresh_token = this.OauthData!.refresh_token;

            return this.access_token;
        }
    }

    async attemptLogin(): Promise<boolean> {
        return !! await this.getAccessToken();
    }

    async getUser(): Promise<UserData> {
        if (this.UserData != null) {
            return this.UserData;
        }

        let userData = Cookies.get('user_data');

        if (userData) {
            this.UserData = JSON.parse(userData);
            return this.UserData!;
        }

        const data = await this.request('GET', '/discord/user', { params: {} });

        this.UserData = data;
        Cookies.set('user_data', JSON.stringify(data), { expires: 1 });

        return data;
    }

    async exchangeCode(code: string): Promise<OauthData> {
        const data = await this.request('POST', '/oauth2/token', { params: { code } });
        this.OauthData = data;

        return data
    }

    async request(
        method: Method,
        route: string,
        {
            json,
            params,
            auth,
            headers
        }:
            {
                json?: any,
                params?: any,
                auth?: boolean,
                headers?: any
            } =
            {
                auth: false
            }
    ): Promise<any> {
        let body;

        if (json) {
            headers['Content-Type'] = 'application/json';
            body = JSON.stringify(json);
        }

        if (auth) {
            // Ensure we have an Authorization token

            headers['Authorization'] = this.Authorization;
        }

        const resp = await fetch(BASE_URL + route + (params ? '?' + new URLSearchParams(params).toString() : ''), { method, headers, body });
        const text = await resp.text();
        const message = `${method} ${route} received status code ${resp.status} with content: ${text}`

        if (!resp.ok) {
            console.error(message);
            throw new Error(message);
        }

        if (resp.headers.get('Content-Type') === 'application/json') {
            return JSON.parse(text);
        }

        return text;
    }
}

export const DefaultAPIClient = new APIClient();
export const APIClientContext = createContext<APIClient>(DefaultAPIClient);
