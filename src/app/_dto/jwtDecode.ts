export interface JwtDecode {
    aud:       string[];
    exp:       number;
    user_name: string;
    jti:       string;
    client_id: string;
    scope:     string[];
}
