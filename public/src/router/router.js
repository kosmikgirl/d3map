import Navigo from 'navigo';
import { getLocale, setLocale, isLocaleEnabled } from '../config/locale-config';
import { RouteNames } from '../data/enum';
import { allLocales } from '../data/i18n/locale-codes';
const localizePath = (path, locale) => {
    path = path.startsWith('/') ? path : `/${path}`;
    return path.includes(':lang')
        ? path.replace(':lang', locale)
        : `/${locale}${path}`;
};
const router = new Navigo('/');
router.hooks({
    before: (done, match) => {
        var _a;
        if (!isLocaleEnabled)
            return done();
        const currentLocale = getLocale();
        const routeLocale = (_a = match.data) === null || _a === void 0 ? void 0 : _a.lang;
        const foundLocale = currentLocale === routeLocale
            ? currentLocale
            : allLocales.find(locale => locale === routeLocale);
        if (!foundLocale) {
            const path = localizePath(match.url, currentLocale);
            if (!router.match(path)) {
                router.navigateByName(RouteNames.NOT_FOUND);
                return done();
            }
            router.navigate(path);
            return done(false);
        }
        foundLocale !== currentLocale && setLocale(foundLocale);
        done();
    },
});
router.notFound(() => {
    const routeData = isLocaleEnabled ? { lang: getLocale() } : {};
    router.navigateByName(RouteNames.NOT_FOUND, routeData);
});
export default router;
//# sourceMappingURL=router.js.map