/* eslint-disable import/no-anonymous-default-export */
export const cookieStore = {
    get(key: string): string | undefined {
        const mapCookie = new Map<string, string>();
        const cookies = document.cookie.split('; ');
        const listMapCookies = cookies.map((cookie) => {
            const c = cookie.split('=');
            return mapCookie.set(c[0], c[1]);
        });

        for (const cookie of listMapCookies) {
            if (cookie.get(key)) {
                return cookie.get(key);
            } else {
                return undefined;
            }
        }
    },

    set(key: string, value: string) {
        document.cookie = `${key}=${value}`;
    },

    remove(key: string) {
        const expirationDate = new Date(0).toUTCString();
        document.cookie = `${key}=; expires=${expirationDate}; path=/;`;
    },
};
