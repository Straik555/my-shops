import { CookiesConfig } from '~/shared'
import Cookies from 'js-cookie'

const setCookiesToken = (access: string) => {
	Cookies.set(CookiesConfig.ACCESS_TOKEN, access, {
		expires: 0.1,
		secure: true,
		path: '/'
		// httpOnly: true
	})
}

const deleteCookies = () => {
	Cookies.remove(CookiesConfig.ACCESS_TOKEN)
}

export { setCookiesToken, deleteCookies }
